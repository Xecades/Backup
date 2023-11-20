var typing = new Typing("panel-cover_description", {
	"typingSpeed": 60,
	"cursorSpeed": 500,
	"cursorChar": "|",
	"cursorInfinity": true,
	"head": "/* ",
	"foot": " */",
	"cursorColor": "white"
});
typing.sleep(500)
	.add("Hello.")
	.sleep(500)
	.delete()
	.sleep(200)
	.add("Nice to meet you!")
	.sleep(500)
	.delete()
	.sleep(200)
	.add("Here's some preview features of my blog")
	.sleep(500)
	.delete()
	.sleep(200)
	.add("Some are NOT my own project,")
	.sleep(500)
	.delete()
	.sleep(200)
	.add("They are just for learning.")
	.sleep(500)
	.delete()
	.sleep(200)
	.add("Some items are buggy...")
	.sleep(500)
	.delete()
	.sleep(200)
	.add("And some are under construction")
	.sleep(500)
	.delete()
	.sleep(200)
	.add("So...")
	.sleep(500)
	.add("Have Fun! :-)")
	.execute();