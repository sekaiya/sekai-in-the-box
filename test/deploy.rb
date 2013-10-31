require 'pathname'
PARENT_PATH = Pathname(File.dirname(__FILE__)).parent.to_s
INDEX_FILE_PATH = PARENT_PATH + "/com/index.php"
APP_YAML_PATH = PARENT_PATH + "/app.yaml"
MAIL_PATH = PARENT_PATH + "/test/mail.properties"
CMD = "C:/Python27/python.exe C:/google_appengine/appcfg.py --email=#{File.read(MAIL_PATH)} update C:/repositories/sekai-in-the-box"

def is_comment_in?
	File.readlines(INDEX_FILE_PATH).each do |line|
		next if line.index("loadingWrap").nil? &&  line.index("anime.js").nil?
		raise "don't forget comment out" if line.index("<!--")
	end
end

def edit_app_yaml(old_str, new_str)
	str = File.open(APP_YAML_PATH){|f| f.read.gsub(old_str, new_str)}
	File.open(APP_YAML_PATH, "w"){|f| f.write(str)}
end
def check_show_status
end

is_comment_in?
begin
	edit_app_yaml("__APP_VERSION__", "dev")
	p `#{CMD}`
	check_show_status
ensure
	edit_app_yaml("dev", "__APP_VERSION__")
end

begin
	edit_app_yaml("__APP_VERSION__", "ver001")
	p `#{CMD}`
ensure
	edit_app_yaml("ver001", "__APP_VERSION__")
end



__END__

TODO
require 'octokit'
client = Octokit::Client.new({netrc: true})
p client
https://github.com/login/oauth/


