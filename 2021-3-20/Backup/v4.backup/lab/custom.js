var typing = new Typing("panel-cover_description", {
	"typingSpeed": 70,
	"cursorSpeed": 500,
	"cursorChar": "|",
	"cursorInfinity": true,
	"head": "/* ",
	"foot": " */",
	"cursorColor": "white"
});
typing.sleep(500)
	.add("Where there is a will")
	.sleep(300)
	.delete(4)
	.add("shell,")
	.sleep(200)
	.add(" There is a way.")
	.execute();