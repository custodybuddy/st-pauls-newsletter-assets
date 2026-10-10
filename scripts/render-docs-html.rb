#!/usr/bin/env ruby
# frozen_string_literal: true

# Generates browser-readable mirrors of the Markdown files in docs/ without
# adding a Node package or Ruby gem. Markdown remains the source of truth.

require 'cgi'

ROOT = File.expand_path('..', __dir__)
DOCS = File.join(ROOT, 'docs')
DOC_LINKS = Dir.children(DOCS).grep(/\.md\z/).map { |name| [name, name.sub(/\.md\z/, '.html')] }.to_h.freeze

STYLE = <<~CSS.freeze
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin: 0; background: #f4f7f8; color: #1e293b; font: 17px/1.6 Arial, sans-serif; }
  main { width: min(100% - 32px, 960px); margin: 32px auto 56px; padding: 40px; background: #fdfbf7; border: 1px solid #d9e1e6; border-radius: 18px; box-shadow: 0 8px 28px rgba(10, 28, 44, .08); }
  h1, h2, h3, h4, h5, h6 { color: #0a1c2c; font-family: Georgia, serif; line-height: 1.2; scroll-margin-top: 24px; }
  h1 { font-size: clamp(2rem, 5vw, 2.9rem); margin: 0 0 .7em; }
  h2 { margin-top: 2.25em; padding-top: .3em; border-top: 2px solid #f0d98c; }
  h3 { margin-top: 1.7em; }
  a { color: #075985; text-decoration-thickness: 1px; text-underline-offset: 2px; }
  a:hover { color: #0a1c2c; }
  code { padding: .12em .32em; border-radius: 4px; background: #eaf0f3; color: #0a1c2c; font: .9em ui-monospace, SFMono-Regular, Menlo, monospace; }
  pre { overflow-x: auto; padding: 18px; background: #0a1c2c; border-radius: 10px; color: #f8fafc; }
  pre code { padding: 0; background: transparent; color: inherit; }
  blockquote { margin: 1.4em 0; padding: .2em 1.2em; border-left: 4px solid #d4af37; background: #fff8df; }
  table { width: 100%; margin: 1.25em 0; border-collapse: collapse; font-size: .94em; }
  th, td { padding: .7em .8em; vertical-align: top; border: 1px solid #cbd5e1; text-align: left; }
  th { background: #eaf3f7; color: #0a1c2c; font-weight: 700; }
  tr:nth-child(even) td { background: #fffefa; }
  ul, ol { padding-left: 1.5em; }
  li + li { margin-top: .35em; }
  .doc-meta { margin: 0 0 2em; color: #64748b; font-size: .9em; }
  .doc-meta a { font-weight: 700; }
  @media (max-width: 640px) { main { width: 100%; margin: 0; padding: 24px 18px; border: 0; border-radius: 0; } table { display: block; overflow-x: auto; } }
CSS

def inline(text)
  escaped = CGI.escapeHTML(text)
  escaped = escaped.gsub(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+&quot;[^&]*&quot;)?\)/) do
    match = Regexp.last_match
    %(<img src="#{match[2]}" alt="#{match[1]}" loading="lazy">)
  end
  escaped = escaped.gsub(/\[([^\]]+)\]\(([^\s)]+)(?:\s+&quot;[^&]*&quot;)?\)/) do
    match = Regexp.last_match
    label = match[1]
    target = match[2]
    path, fragment = target.split('#', 2)
    href = DOC_LINKS.fetch(File.basename(path), path)
    href += "##{fragment}" if fragment
    %(<a href="#{href}">#{label}</a>)
  end
  escaped = escaped.gsub(/`([^`]+)`/, '<code>\\1</code>')
  escaped = escaped.gsub(/\*\*([^*]+)\*\*/, '<strong>\\1</strong>')
  escaped.gsub(/(?<!\*)\*([^*]+)\*(?!\*)/, '<em>\\1</em>')
end

def table_cells(line)
  line.strip.sub(/\A\|/, '').sub(/\|\z/, '').split('|', -1).map { |cell| cell.strip }
end

def table_rule?(line)
  line.strip.match?(/\A\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\z/)
end

def render(markdown)
  lines = markdown.lines.map(&:chomp)
  html = []
  index = 0
  paragraph = []
  list = nil

  flush_paragraph = lambda do
    unless paragraph.empty?
      html << "<p>#{inline(paragraph.join(' '))}</p>"
      paragraph.clear
    end
  end
  flush_list = lambda do
    if list
      html << "</#{list}>"
      list = nil
    end
  end

  while index < lines.length
    line = lines[index]
    if line.start_with?('```')
      flush_paragraph.call
      flush_list.call
      language = line.delete_prefix('```').strip
      index += 1
      code = []
      while index < lines.length && !lines[index].start_with?('```')
        code << lines[index]
        index += 1
      end
      html << %(<pre><code class="language-#{CGI.escapeHTML(language)}">#{CGI.escapeHTML(code.join("\n"))}</code></pre>)
    elsif line.start_with?('|') && index + 1 < lines.length && table_rule?(lines[index + 1])
      flush_paragraph.call
      flush_list.call
      headers = table_cells(line)
      index += 2
      rows = []
      while index < lines.length && lines[index].start_with?('|')
        rows << table_cells(lines[index])
        index += 1
      end
      table = ["<table><thead><tr>#{headers.map { |cell| "<th>#{inline(cell)}</th>" }.join}</tr></thead><tbody>"]
      rows.each do |row|
        table << "<tr>#{headers.each_index.map { |column| "<td>#{inline(row[column].to_s)}</td>" }.join}</tr>"
      end
      table << '</tbody></table>'
      html << table.join
      next
    elsif line.match?(/\A\#{1,6}\s+/)
      flush_paragraph.call
      flush_list.call
      level, text = line.match(/\A(#+)\s+(.+)\z/).captures
      slug = text.downcase.gsub(/[^a-z0-9\s-]/, '').strip.gsub(/\s+/, '-')
      html << "<h#{level.length} id=\"#{slug}\">#{inline(text)}</h#{level.length}>"
    elsif line.match?(/\A\s{0,3}([-*_])(?:\s*\1){2,}\s*\z/)
      flush_paragraph.call
      flush_list.call
      html << '<hr>'
    elsif line.start_with?('> ')
      flush_paragraph.call
      flush_list.call
      quote = []
      while index < lines.length && lines[index].start_with?('> ')
        quote << lines[index].delete_prefix('> ')
        index += 1
      end
      html << "<blockquote><p>#{inline(quote.join(' '))}</p></blockquote>"
      next
    elsif (match = line.match(/\A\s*([-*+])\s+(.+)\z/))
      flush_paragraph.call
      desired = 'ul'
      if list != desired
        flush_list.call
        html << '<ul>'
        list = desired
      end
      html << "<li>#{inline(match[2])}</li>"
    elsif (match = line.match(/\A\s*\d+[.)]\s+(.+)\z/))
      flush_paragraph.call
      desired = 'ol'
      if list != desired
        flush_list.call
        html << '<ol>'
        list = desired
      end
      html << "<li>#{inline(match[1])}</li>"
    elsif line.strip.empty?
      flush_paragraph.call
      flush_list.call
    else
      flush_list.call
      paragraph << line.strip
    end
    index += 1
  end
  flush_paragraph.call
  flush_list.call
  html.join("\n")
end

Dir.glob(File.join(DOCS, '*.md')).sort.each do |source|
  title = File.basename(source, '.md').tr('-', ' ').split.map(&:capitalize).join(' ')
  body = render(File.read(source, encoding: 'UTF-8'))
  output = source.sub(/\.md\z/, '.html')
  document = <<~HTML
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="robots" content="noindex">
      <title>#{CGI.escapeHTML(title)} | St. Paul’s Newsletter</title>
      <style>#{STYLE}</style>
    </head>
    <body>
      <main>
        <p class="doc-meta">Browser-readable mirror. <a href="#{File.basename(source)}">View the authoritative Markdown source</a>.</p>
        #{body}
      </main>
    </body>
    </html>
  HTML
  File.write(output, document, mode: 'w', encoding: 'UTF-8')
  puts "Rendered #{File.basename(output)}"
end
