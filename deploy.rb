#check comment out
index_file_path = File.dirname(__FILE__) + File::Separator + "com" + File::Separator + "index.php"

File.readlines(index_file_path).each do |line|
	next if line.index("loadingWrap").nil? &&  line.index("anime.js").nil?
	raise "don't forget comment out" if line.index("<!--")
end

__END__
require 'octokit'
client = Octokit::Client.new({netrc: true})
p client


__END__


https://github.com/login/oauth/


