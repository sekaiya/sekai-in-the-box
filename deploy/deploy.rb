require 'pathname'
require 'open-uri'

PARENT_PATH = Pathname(File.dirname(__FILE__)).parent.to_s
INDEX_FILE_PATH = PARENT_PATH + '/com/index.php'
APP_YAML_PATH = PARENT_PATH + '/app.yaml'
MAIL_PATH = PARENT_PATH + '/deploy/mail.properties'
CMD = "python /Applications/GoogleAppEngineLauncher.app/Contents/Resources/GoogleAppEngine-default.bundle/Contents/Resources/google_appengine/appcfg.py  --email=#{File.read(MAIL_PATH)} update /Users/sekai/repos/sekai-in-the-box"

def comment_in?
  File.readlines(INDEX_FILE_PATH).each do |line|
    next if line.index('loadingWrap').nil? &&  line.index('anime.js').nil?
    raise 'don\'t forget comment out' if line.index('<!--')
  end
end

def edit_app_yaml(old_str, new_str)
  str = File.open(APP_YAML_PATH){|f| f.read.sub(old_str, new_str)}
  File.open(APP_YAML_PATH, 'w'){|f| f.write(str)}
end

def exist?(stringio, value)
  return true if stringio.read.index(value)
  false
end
def check_show_status
  root = 'http://dev-test.sekai-in-the-box.appspot.com'
  open(root) {|f|
    raise 'top page error ' unless exist?(f, 'sekai in the box!')
  }
  open(root+'/iseer.html') {|f|
    raise 'iseer page error' unless exist?(f, 'iseer.png')
  }
  open(root+'/kimono.html') {|f|
    raise 'kimono page error' unless exist?(f, 'kimono1.png')
  }
  # expect not found
  ['/hoge', '/hoge/huga', '/hoge.html', '/hoge/huga.html'].each do |st|
    open(root + st) {|f|
      raise 'can not create not-found-page' unless exist?(f, 'sorry, but this page is not found')
    }
  end
end

comment_in?
begin
  edit_app_yaml('__APP_VERSION__', 'dev-test')
  p `#{CMD}`
  check_show_status
ensure
  edit_app_yaml('dev-test', '__APP_VERSION__')
end
begin
  edit_app_yaml('__APP_VERSION__', 'ver001')
  p `#{CMD}`
ensure
  edit_app_yaml('ver001', '__APP_VERSION__')
end



__END__

TODO
require 'octokit'
client = Octokit::Client.new({netrc: true})
p client
https://github.com/login/oauth/


