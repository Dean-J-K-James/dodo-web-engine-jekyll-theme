# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "dodo-web-engine-jekyll-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Dean James"]
  spec.email         = ["dean.j.k.james@gmail.com"]
  spec.summary       = "A Jekyll thtme for all my websites."
  spec.homepage      = "https://github.com/Dean-J-K-James/the-coding-dodo"
  spec.license       = "MIT"
  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }
  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
