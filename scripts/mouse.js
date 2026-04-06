var anzahlObj = 0;
var Bilder = new Array();


// Vorladen der Grafiken
function laden(Name1, Default1, Over1, Name2, Default2, Over2, Name3, Default3, Over3)
{
	Bilder[anzahlObj] = new Array(9);
	Bilder[anzahlObj][0] = Name1;
	Bilder[anzahlObj][1] = new Image();
	Bilder[anzahlObj][1].src = Default1;
	Bilder[anzahlObj][2] = new Image();
	Bilder[anzahlObj][2].src = Over1;

	Bilder[anzahlObj][3] = Name2;
	Bilder[anzahlObj][4] = new Image();
	Bilder[anzahlObj][4].src = Default2;
	Bilder[anzahlObj][5] = new Image();
	Bilder[anzahlObj][5].src = Over2;

	Bilder[anzahlObj][6] = Name3;
	Bilder[anzahlObj][7] = new Image();
	Bilder[anzahlObj][7].src = Default3;
	Bilder[anzahlObj][8] = new Image();
	Bilder[anzahlObj][8].src = Over3;

  anzahlObj++;
}

function an(name)
{
//alert(document.images['bFruehling'].scr);
	// aller Grafiken auf Default zuruecksetzen
	aus();
	
	// MouseOver-Effekt der ausgewaehlten Grafiken
	for (i = 0; i < anzahlObj; i++)
	{
		if (document.images[Bilder[i][0]] != null)
		{
			if (name == Bilder[i][0])
			{
				// Over1 anzeigen
				document.images[Bilder[i][0]].src = Bilder[i][2].src;
				// Fallse ein zweites Bild definiert, dann Over2 anzeigen
				if (Bilder[i][3] != "") 
					document.images[Bilder[i][3]].src = Bilder[i][5].src;
				// Fallse ein drittes Bild definiert, dann Over3 anzeigen
				if (Bilder[i][6] != "") 
					document.images[Bilder[i][6]].src = Bilder[i][8].src;
			}
		}
	}
}

function aus()
{
	for (i = 0; i < anzahlObj; i++)
	{	
//alert(Bilder[i][0]);  
		// Default1 anzeigen
		if (Bilder[i][0] != "") 
			document.images[Bilder[i][0]].src = Bilder[i][1].src;
		// Falls zweites Bild definiert, Default2 anzeigen
		if (Bilder[i][3] != "") 
			document.images[Bilder[i][3]].src = Bilder[i][4].src;
		// Falls drittes Bild definiert, Default3 anzeigen
		if (Bilder[i][6] != "") 
			document.images[Bilder[i][6]].src = Bilder[i][7].src;
	}
}