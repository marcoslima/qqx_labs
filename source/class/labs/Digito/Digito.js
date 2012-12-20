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
	},




	/*
	*****************************************************************************
	PROPERTIES
	*****************************************************************************
	*/

	properties :
	{
		status : { check : "Integer" },

		label :
		{
			check : "String",
			apply : "_applyLabel"
		},

		barWidth :
		{
			check : "Integer",
			apply : "_applyBarWidth"
		},

		showStepStatus :
		{
			check : "Boolean",
			init  : false,
			apply : "_applyShowStepStatus"
		},

		stepStatus :
		{
			check : "String",
			init  : "",
			apply : "_applyStepStatus"
		},

		showPcntStatus :
		{
			check : "Boolean",
			init  : false,
			apply : "_applyShowPcntStatus"
		},

		pcntStatus :
		{
			check : "String",
			init  : "",
			apply : "_applyPcntStatus"
		},

		barColor :
		{
			check : "Color",
			apply : "_applyBarColor"
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
		reset : function()
		{
			this.label.setValue("0");
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


	},


	destruct : function ()
	{
		this._disposeObjects
		(
			"_lblDigU",
			"_lblDigD"
		);
	}
});
