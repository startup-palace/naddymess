require 'i18n'

LOCALE = Jekyll.configuration({})['lang'] # set your locale from config var
I18n.config.available_locales = :fr # https://github.com/jekyll/jekyll/issues/6669

# Create folder "_locales" and put some locale file from https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale
module Jekyll
  module I18nFilter
    # Example:
    #   {{ post.date | localize: "%d.%m.%Y" }}
    #   {{ post.date | localize: ":short" }}
    def localize(input, format=nil)
      load_translations
      format = (format =~ /^:(\w+)/) ? $1.to_sym : format

      # Force the locale each time otherwise `jekyll serve` will fail with
      # "Liquid Exception: :en is not a valid locale" each time a regeneration happens
      # see https://github.com/jekyll/jekyll/issues/3406#issuecomment-72716384
      I18n.locale = LOCALE

      I18n.l Date.parse(input), :format => format
    end

    def load_translations
      if I18n.backend.send(:translations).empty?
        I18n.backend.load_translations Dir[File.join(File.dirname(__FILE__),'../_locales/*.yml')]
        I18n.locale = LOCALE
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::I18nFilter)
