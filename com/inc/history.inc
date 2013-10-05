
<div class="content_title">history</div>
<history>
{{each contents}}
<ul>
	${$value.date}</br>
	${$value.comment}</br>
	<url><a href="${$value.url}" target="_blank">${$value.url}</a></url>
</ul>
{{/each}}
</history>
