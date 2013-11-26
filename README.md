# Get started locally

Install nodejs

	sudo npm install -g punch
	punch s

# Calendar API

<https://www.google.com/calendar/feeds/mengwong%40hackerspace.sg/public/full?alt=json>

# URL redirect notes from old Wordpress site

http://hackerspace.sg/calendar/hackerspacesg-events/  -> http://hackerspace.sg/calendar/
http://hackerspace.sg/calendar/geektechdevdesign-events/ -> DEPRECATED
http://hackerspace.sg/calendar/rojak-calendar/ -> http://hackerspace.sg/rojak-calendar/

We should make an effort to record our past events since Google's API is pretty bad:

	curl -s https://www.google.com/calendar/feeds/mengwong%40hackerspace.sg/public/basic | 
	xmlstarlet fo | grep '<summary type="html">When

http://hackerspace.sg/social/location/ -> http://hackerspace.sg/location

The social elements can be linked from the main page


Discussion Links http://hackerspace.sg/%3Fpage_id%3D699  -> DEPRECATED


Wiki http://hackerspacesg.pbworks.com/w/page/13758491/FrontPage -> TRY DEPRECATE
http://hackerspace.sg/readme-txt/membership/ -> http://hackerspace.sg/membership
http://hackerspace.sg/readme-txt/intertubes/ -> DEPRECATE
http://hackerspace.sg/readme-txt/donations/ -> http://hackerspace.sg/donations/


http://hackerspace.sg/about-us/ -> http://hackerspace.sg/about
