/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(labs/*)

************************************************************************ */

/**
 * This is the main application class of your custom application "labs"
 */
qx.Class.define("labs.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

	members :
	{
		/**
		 * This method contains the initial application code and gets called 
		 * during startup of the application
		 * 
		 * @lint ignoreDeprecated(alert)
		 */
		main : function()
		{
			// Call super class
			this.base(arguments);

			// Enable logging in debug variant
			if (qx.core.Environment.get("qx.debug"))
			{
				// support native logging capabilities, e.g. Firebug for Firefox
				qx.log.appender.Native;
				// support additional cross-browser console. Press F7 to toggle visibility
				qx.log.appender.Console;
			}

			/*
			-------------------------------------------------------------------------
			Below is your actual application code...
			-------------------------------------------------------------------------
			*/

			// Document is the application root
			var doc = this.getRoot();
			var size = 160;
			var corte = Math.floor(size * 0.55);
			
			var fntHora = qx.bom.Font.fromString(size + "px bold Arial");
			
			var lyCell = new qx.ui.layout.Canvas();
			var cnCell = new qx.ui.container.Composite(lyCell);
			
			doc.add(cnCell,{edge:0});
			
			var lblDigU = new qx.ui.basic.Label("8");
			var lblDigD = new qx.ui.basic.Label("8");
			cnCell.add(lblDigD);
			cnCell.add(lblDigU);
			
			var lblDigUn = new qx.ui.basic.Label("7");
			var lblDigDn = new qx.ui.basic.Label("7");
			cnCell.add(lblDigDn);
			cnCell.add(lblDigUn);
			
			lblDigUn.set(
			{
				BackgroundColor:"#202020",
				TextColor:"#ff7000",
				AlignX:"center",
				AlignY:"top",
				Font:fntHora,
				Height:corte
			});
		
			
			lblDigDn.set(
			{
				BackgroundColor:"#202020",
//				TextColor:"#0070ff",
				TextColor:"#ff7000",
				AlignX:"center",
				AlignY:"top",
				Font:fntHora
			});
			
			lblDigU.set(
			{
				BackgroundColor:"#202020",
				TextColor:"#ff7000",
				AlignX:"center",
				AlignY:"top",
				Font:fntHora,
				Height:corte
			});
		
			
			lblDigD.set(
			{
				BackgroundColor:"#202020",
//				TextColor:"#0070ff",
				TextColor:"#ff7000",
				AlignX:"center",
				AlignY:"top",
				Font:fntHora
			});
			
			qx.event.Timer.once(function(e)
			{
				qx.bom.element.Clip.set(lblDigU.getContentElement().getDomElement(),{height:corte*0.99});
				qx.bom.element.Clip.set(lblDigD.getContentElement().getDomElement(),{top:corte*1.01});
				console.log("Done!");
			},this,10);
			
			qx.event.Timer.once(function(e)
			{
				lblDigUn.hide();
				lblDigDn.hide();
			},this,1000);
			
	/*			
			// Ligamos o timer
			var tmTimer = new qx.event.Timer(1000);
			tmTimer.addListener("interval",function(e)
			{
				qx.bom.element.Clip.set(lblDigD.getContentElement().getDomElement(),{bottom:80});
			},this);
			
			tmTimer.start();
*/			
			
		}
	}
});




















