/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(labs/*)

************************************************************************ */

/**
 * Digito flipper
 */
qx.Class.define("labs.Digito.Digito",
{
	extend : qx.ui.container.Composite,

	/*
	*****************************************************************************
	CONSTRUCTOR
	*****************************************************************************
	*/

	construct : function()
	{
		this.base(arguments);

		var ly = new qx.ui.layout.Canvas();
		this.setLayout(ly);
		
		this._size = arguments[1] || 160;
		this._corte = Math.floor(this._size * 0.55);
		this._font = qx.bom.Font.fromString(this._size + "px bold Arial");
		
		this._lblDigU = new qx.ui.basic.Label("8");
		this._lblDigD = new qx.ui.basic.Label("8");
		this._lblDigUn = new qx.ui.basic.Label("7");
		this._lblDigDn = new qx.ui.basic.Label("7");

		this.add(this._lblDigD);
		this.add(this._lblDigU);

		this.add(this._lblDigDn);
		this.add(this._lblDigUn);

		
		this._lblDigU.set(
		{
			BackgroundColor:"#202020",
			TextColor:"#ff7000",
			AlignX:"center",
			AlignY:"top",
			Font:this._font,
			Height:this._corte
		});
	
		this._lblDigD.set(
		{
			BackgroundColor:"#202020",
//			TextColor:"#0070ff",
			TextColor:"#ff7000",
			AlignX:"center",
			AlignY:"top",
			Font:this._font,
		});
		
		this._lblDigUn.set(
		{
			BackgroundColor:"#202020",
			TextColor:"#ff7000",
			AlignX:"center",
			AlignY:"top",
			Font:this._font,
			Height:this._corte
		});
		
		this._lblDigDn.set(
		{
			BackgroundColor:"#202020",
//			TextColor:"#0070ff",
			TextColor:"#ff7000",
			AlignX:"center",
			AlignY:"top",
			Font:this._font,
		});

		qx.event.Timer.once(function(e)
		{
			qx.bom.element.Clip.set(this._lblDigU.getContentElement().getDomElement(),{height:this._corte*0.99});
			qx.bom.element.Clip.set(this._lblDigD.getContentElement().getDomElement(),{top:this._corte*1.01});
			qx.bom.element.Clip.set(this._lblDigUn.getContentElement().getDomElement(),{height:this._corte*0.99});
			qx.bom.element.Clip.set(this._lblDigDn.getContentElement().getDomElement(),{top:this._corte*1.01});
		},this,10);
		
		// Animação do flip
		// Metade superior caindo até o meio
		this.anim_a = new qx.bom.AnimationFrame();
		
		// Metade superior caindo do meio ao fim.
		this.anim_b = new qx.bom.AnimationFrame();
	},




	/*
	*****************************************************************************
	PROPERTIES
	*****************************************************************************
	*/

	properties :
	{
		status : { check : "Integer" },

		currentDigit :
		{
			check : "String",
			apply : "_applyCurrentDigit"
		},

		nextDigit :
		{
			check : "String",
			apply : "_applyNextDigit"
		},

		bgColor :
		{
			check : "Color",
			apply : "_applyBgColor"
		},
		
		fgColor :
		{
			check : "Color",
			apply : "_applyFgColor"
		}
	},




	/*
	*****************************************************************************
	MEMBERS
	*****************************************************************************
	*/

	members :
	{
		/**
		* TODOC
		*
		* @type member
		* @return {void}
		*/
		flip : function()
		{
			
		},


		/**
		* TODOC
		*
		* @type member
		* @param newLabel {var} TODOC
		* @return {void}
		*/
		_applyLabel : function(newLabel) 
		{
			this.label.setValue(newLabel);
		}

		_applyBgColor : function(newBgColor) 
		{
			this.label.setValue(newLabel);
		}

	},


	destruct : function ()
	{
		this._disposeObjects
		(
			"_lblDigU",
			"_lblDigD",
			"_lblDigUn",
			"_lblDigDn"
		);
	}
});
