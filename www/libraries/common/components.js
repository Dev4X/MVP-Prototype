/********************************************************************************************/
/********************************************************************************************/
/*******************************            COMMON             ******************************/
/********************************************************************************************/
/********************************************************************************************/

/************************************* COMMON COMPONENT VARIABLES AND PROPERTIES *************************************/
var _library = 'common';

/************************************* COMPONENT TYPES *************************************/

//TYPE: SHAPES
prx.types.shapes = {
	name: "shapes"
	,onDisplay: function(item,containerid) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '<div id="' + _id + '" class="box pos type-shapes '+item.typeName+'">';
		
		cR += '<style>';
		cR += '#'+_id+' .shapes-text-container { width: '+dims.width+'px; '+_props+' '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; text-align: '+item.textAlign+'; color: '+prx.utils.getColor(item.textColor)+'; }';
		cR += '</style>';
				
		cR += '<div id="'+item.typeName+'-' + _id + '" class="shape-wrapper ">';
		cR += '<canvas id="canvas-'+ _id +'" width="'+dims.width+'" height="'+dims.height+'" class="shape-inner liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-borderStyle"></canvas>';
		cR += '<div class="shapes-text-container liveUpdate-textColor">';
		cR += '<span data-editableproperty="text">' + item.text + '</span>';
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {

		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);
		
		$('#'+_id).find('.shapes-text-container').css({
			'width': dims.width + 'px'
		});
		
		$('#'+_id).find('#canvas-'+ _id).remove();
		$('#'+_id).find('#'+item.typeName+'-'+ _id).html(
			'<canvas id="canvas-'+ _id +'" width="'+dims.width+'" height="'+dims.height+'" class="shape-inner liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-borderStyle"></canvas></div>'
		);
		
		if(item.typeName == 'polygon' || item.typeName == 'star' || item.typeName == 'oval') {
			prx.componentsHelper.erase( 'canvas-'+ _id );
			prx.componentsHelper.drawComplexShape( 'canvas-'+ _id, item, item.typeName);
		}
		else {
			prx.componentsHelper.erase( 'canvas-'+ _id );
			prx.componentsHelper.drawShape( 'canvas-'+ _id, item, item.typeName);
		}	
	}
	,afterDisplay: function(item,containerid) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;	
		
		if(item.typeName == 'polygon' || item.typeName == 'star' || item.typeName == 'oval') {
			prx.componentsHelper.drawComplexShape( 'canvas-'+ _id, item, item.typeName, 1, 1);
		}
		else {
			prx.componentsHelper.drawShape( 'canvas-'+ _id, item, item.typeName, 1, 1);
		}		
	}
	,interactions: [
		prx.commonproperties.actions
	]
	,editableProperties: [
		{
	    	caption: 'Text'
	    	,name: 'text'
	    	,type: 'textarea'
	    	,value: function(item,name) {
	    		if(typeof(item.text) == "undefined") { item.text = '' }
	    		return item.text;
	    	},
      		changeProperty: {
				caption: 'Text',
				property: 'text',
				selector: '.rectangle-text-container span',
				transitionable: false
  			}
	    }
	]
	,propertyGroups: [
		{
			caption: 'Text',
			properties: 
			[
				[
					{
						caption: false,
						name: 'textFont',
						proptype: 'font-family',
						type: 'select',
						value: function(item,name) {
							if(typeof(item.textFont) == "undefined") { item.textFont = 'sans-serif,Helvetica Neue,Arial' }
							return item.textFont;
						},
						values: function(){ return prx.comps.fonts }
			      		,changeProperty: {
							caption: ' Text font',
							selector: '.liveUpdate-textColor',
							property: 'font-family',
							transitionable: false
						 }
			
					},
					{
						caption: false,
						name: 'textSize',
						proptype: 'font-size',
						type: 'combo-select',
						value: function(item,name) {
							if(typeof(item.textSize) == "undefined") { item.textSize = 16 }
							return item.textSize;
						},
						values: prx.comps.textsize
			      		,changeProperty: {
							caption: ' Text size',
							selector: '.liveUpdate-textColor',
							property: 'font-size',
							transitionable: false
						 }
					},
			      	{
			      		caption: false,
			      		name: 'textColor',
			      		proptype: 'font-color',
			      		type: 'colorpicker',
			      		value: function(item,name) {
			      			if(typeof(item.textColor) == "undefined") { item.textColor = '#2E2E2E' }
			      			return item.textColor;
			      		},
			      		liveUpdate: 'color'
			      		,changeProperty: {
							caption: ' Text color',
							selector: '.liveUpdate-textColor',
							property: 'color',
							transitionable: true
						 }
			      	}
		      	],
				[
					{
						caption: false,
						name: 'textProperties',
						proptype: 'text-properties',
						type: 'checkbox',
						value: function(item,name) { if(typeof(item.textProperties) == "undefined") {item.textProperties = [];} return item.textProperties; },
						values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}],
			      		changeProperty: {
							caption: 'Text Properties',
							rerender: true
			  			}
					},
			  		{
			  			caption: false,
			  			name: 'textAlign',
			  			proptype: 'text-align',
			  			type: 'radio',
			  			value: function(item,name) {
			  				if(typeof(item.textAlign) == "undefined") { item.textAlign = 'center' }
			  				return item.textAlign;
			  			},
			  			values: [{ value: 'left', displayValue: '<span class="property-icon property-align-left" title="Align left"></span>'}, { value: 'center', displayValue: '<span class="property-icon property-align-center" title="Align center"></span>'}, { value: 'right', displayValue: '<span class="property-icon property-align-right" title="Align right"></span>'}],
			  			changeProperty: {
							caption: 'Text Align',
							selector: '.liveUpdate-textColor',
							property: 'text-align',
							transitionable: false
			  			}
			  		}
		  		]
			]
		},
        {
            caption: 'Style',
            properties: [
                [
                    {
                        caption: 'Background',
                        name: 'backgroundColor',
                        proptype: 'background-color',
                        type: 'colorpicker',
                        value: function (item, name) {
                            return item.backgroundColor;
                        },
                        liveUpdate: 'svg-fill',
                        changeProperty: {
                            caption: 'Background color',
                            selector: '.changeProperty-backgroundColor',
                            property: 'background-color',
                            transitionable: true
                        }
                    }
                ],
                [
                    prx.commonproperties.borderWidth, 
                    {
	                    caption: false,
	                    name: 'borderColor',
	                    proptype: 'border-color',
	                    type: 'colorpicker',
	                    value: function (item, name) {
	                        return item.borderColor;
	                    },
	                    liveUpdate: 'svg-stroke',
	                    changeProperty: {
	                        caption: 'Border color',
	                        selector: '.changeProperty-borderColor',
	                        property: 'border-top-color,border-bottom-color,border-left-color,border-right-color',
	                        transitionable: true
	                    }
	                }
                ],
                [
					{
						caption: 'Border join type'
						,name: 'joinType'
						,proptype: 'join-type'
						,type: 'select'
						,value: function(item,name,index) {
							if(item.joinType === undefined) { return 'round';}
							return item.joinType;
						}
						,values: [
							{value: 'round',displayValue: 'Round'},
							{value: 'bevel',displayValue: 'Bevel'},
							{value: 'miter',displayValue: 'Miter'}
					    ]
						,changeProperty: {  
							caption: 'Border join type',
							rerender: true,
							changeable: false
						}  						
					}
                ]
            ]
        },
	  	{
  		   	caption: 'Type',
			properties: [
     			[
     			 	{
						caption: false,
						proptype: 'shape-type',
						name: 'typeName',
						type: 'radio',
						value: function(item, name) {
							return item.typeName;
						},
						values: [
							{value: 'oval',displayValue: '<span class="property-icon property-shape-oval" title="Oval"></span>'},
							{value: 'rectangle',displayValue: '<span class="property-icon property-shape-rectangle" title="Rectangle"></span>'},
							{value: 'triangle',displayValue: '<span class="property-icon property-shape-triangle" title="Triangle"></span>'},
							{value: 'rhombus',displayValue: '<span class="property-icon property-shape-rhombus" title="Rhombus"></span>'},
							{value: 'trapezoid',displayValue: '<span class="property-icon property-shape-trapezoid" title="Trapezoid"></span>'},
							{value: 'parallelogram',displayValue: '<span class="property-icon property-shape-parallelogram" title="Parallellogram"></span>'},
							{value: 'polygon',displayValue: '<span class="property-icon property-shape-polygon" title="Polygon"></span>'},
							{value: 'star',displayValue: '<span class="property-icon property-shape-star" title="Star"></span>'}
						],
						onChange: function (item, name) {
							if(item.typeName == 'polygon' || item.typeName == 'star') { 
								$('#property-numOfNodes').show();
							}
							else { $('#property-numOfNodes').hide();}
							
							if(item.typeName == 'star') { $('#property-spikeDepth').show();}
							else { $('#property-spikeDepth').hide();}
							
							if(item.typeName == 'parallelogram') { 
								$('#property-skew').show();
							}
							else { $('#property-skew').hide();}
							
							if(item.typeName == 'trapezoid') { 
								$('#property-baseWidth').show();
							}
							else { $('#property-baseWidth').hide();}
						},
						changeProperty: {
							caption: 'Shape type',
							transitionable: false
						}
					}
     			]
     		]
  	   },
  	   {
  			caption: 'Dimensions',
  			properties: [
				[
      			 	{	
						caption: 'Number of Nodes',
						name: 'numOfNodes',
						proptype: 'number-of-nodes',
						type: 'slider-input', 
		                values: { min: 4, max: 50, step: 1 },
						value: function(item,name) { 
							return item.numOfNodes; 
						},
						hiddenByDefault: function (item, name) {
							return !(item.typeName == 'star' || item.typeName == 'polygon');
						},
						changeProperty: {
					 		caption: 'Shape\'s number of nodes',
					 		rerender: true
					 	}
					},
					{	
						caption: 'Depth',
						name: 'spikeDepth',
						proptype: 'star-spike-depth',
						type: 'slider-input', 
		                values: { min: 2, max: 10, step: 1 },
						value: function(item,name) { 
							if(item.spikeDepth < 2) { item.spikeDepth = 2;}
							else if(item.spikeDepth > 10) { item.spikeDepth = 10;}
							return item.spikeDepth; 
						},
						hiddenByDefault: function (item, name) {
							return item.typeName != 'star';
						},
						onChange: function (item, name) {
							if(item.spikeDepth < 2) { item.spikeDepth = 2; return item;}
							else if(item.spikeDepth > 10) { item.spikeDepth = 10; return item;}								 
						},
						changeProperty: {
					 		caption: 'Star Spike Depth',
					 		rerender: true
					 	}
					}
      			],
      			[
					{	
						caption: 'Skew',
						name: 'skew',
						proptype: 'paralellogram-skew',
						type: 'slider-input', 
		                values: { min: 0, max: 90, step: 10 },
						value: function(item,name) {
							return item.skew; 
						},
						hiddenByDefault: function (item, name) {
							return item.typeName != 'parallelogram';
						},
						changeProperty: {
					 		caption: 'Parallelogram Skew Intensity',
					 		rerender: true
					 	}
					}
      			],
      			[
					{	
						caption: 'Top Base Percentage',
						name: 'baseWidth',
						proptype: 'trapezoid-base-width',
						type: 'slider-input', 
						values: { min: 2, max: 100, step: 2 },
						value: function(item,name) {
							return item.baseWidth; 
						},
						hiddenByDefault: function (item, name) {
							return item.typeName != 'trapezoid';
						},
						changeProperty: {
					 		caption: 'Trapezoid Top Base Width',
					 		rerender: true
					 	}
					}
      			]
  	      	]
  	   }
	]

}

/***** SPECIAL COMPONENTS *****/

// TYPE: SYMBOL
prx.types.symbol = {
	name: "symbol"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _symbolindex = prx.stc.containers.getIndexFromId(item.symbolid);

		var cReturn ="";
		if (_symbolindex > -1) {
			var _symbol_width="100%";
			var _symbol_height="100%";

			if(typeof(prx.symbols[_symbolindex].states) == "undefined") {
				var _bg = prx.symbols[_symbolindex].background;
				var dataState = '';
			} else {
				var stateindex = 0;
				if(typeof(item.symbolstateid) != "undefined") {
					stateindex = prx.stc.containers.getStateIndexFromId(item.symbolstateid, prx.stc.containers.getIndexFromId(item.symbolid));
					if(stateindex == -1) {
						stateindex = 0;
						item.symbolstateid = prx.symbols[_symbolindex].states[stateindex].id;
					}
				}
				var _bg = prx.symbols[_symbolindex].states[stateindex].background;
				var dataState = 'data-state-id="'+prx.symbols[_symbolindex].states[stateindex].id+'"';
			}

			if (item.scroll!='') {
				if (item.scroll=='horizontal' || item.scroll=='omni') {
					if(typeof(prx.symbols[_symbolindex].dimensions) != "undefined") {
						_symbol_width = prx.symbols[_symbolindex].dimensions[0]+'px';
					} else {
						_symbol_width = prx.symbols[_symbolindex].states[stateindex].dimensions[0]+'px';
					}
				}
				if (item.scroll=='vertical' || item.scroll=='omni') {
					if(typeof(prx.symbols[_symbolindex].dimensions) != "undefined") {
						_symbol_height = prx.symbols[_symbolindex].dimensions[1]+'px';
					} else {
						_symbol_height = prx.symbols[_symbolindex].states[stateindex].dimensions[1]+'px';
					}
				}
			}

			/* ADDED THESE LINES IN ORDER TO MAKE SYMBOLS BEHAVE RESPONSIVELY */
			if (item.scroll == 'vertical') {
				var _symbol_dims = prx.componentsHelper.getRealDims(item);
				_symbol_width = _symbol_dims.width+'px';
			}

			if (item.scroll == 'horizontal') {
				var _symbol_dims = prx.componentsHelper.getRealDims(item);
				_symbol_height = _symbol_dims.height+'px';
			}
			/* /ADDED THESE LINES IN ORDER TO MAKE SYMBOLS BEHAVE RESPONSIVELY */

			if(typeof(item.propagateevents) == "undefined") { item.propagateevents = false; }


			cReturn='<div id="' + _id + '" class="box type-symbol '+((item.propagateevents && (item.scroll == '' || item.scroll == 'none')) ? 'type-symbol-transparent' : '')+'" data-symbol-id="'+item.symbolid+'" '+dataState+' style="position: absolute;"><div id="'+_id+'-inner" style="position: absolute; overflow: hidden !important; height: 100%; width: 100%;"><div id="' + _id + '-scroll" class="symbol-scroll" style="width: '+_symbol_width+'; height: '+_symbol_height+'; position: absolute; overflow: hidden; background-color: '+prx.utils.getColor(_bg)+';">' + prx.stc.containers.render(item,containerid,stateindex) + '</div></div></div>';
		} else {
			_appenditem = false;
			if(prx.editor) {
				return prx.componentsHelper.missingComponent(item,containerid)
			}
		}

		return cReturn;
	}
	,onResizeStop: function(item, containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		//prx.refreshPanel();
		//$('#' + _id).click();
		//prx.triggerProperties(_id);
	}
	,afterDisplay: function(item, containerid, pageid) {
		var stateindex = 0;
		if(typeof(item.symbolstateid) != "undefined") {
			stateindex = prx.stc.containers.getStateIndexFromId(item.symbolstateid, prx.stc.containers.getIndexFromId(item.symbolid));
			if(stateindex == -1) {
				stateindex = 0;
			}
		}
		prx.stc.containers.loadRecursiveAfterDisplay(item,containerid, pageid, stateindex);
	}
	,interactions: [
		prx.commonproperties.actions
	]
	,propertyGroups: [
		{
			caption: 'Container State',
			properties: [[
              		{
              			caption: false
              			,name: 'symbolstateid'
              			,type: 'select'
              			,value: function(item,name) {
              				if(typeof(prx.symbols[0].states) == "undefined") { return ''; }
              				if(typeof(item.symbolstateid) == "undefined") {
              					item.symbolstateid = prx.symbols[prx.stc.containers.getIndexFromId(item.symbolid)].states[0].id;
              				}
              				return item.symbolstateid;
              			}
      					,values: function(item){
      						if(typeof(prx.symbols[0].states) == "undefined") { return []; }
      						var rA = [];
      						for(var i=0;i<prx.symbols[prx.stc.containers.getIndexFromId(item.symbolid)].states.length;i++) {
      							rA.push({ displayValue: prx.symbols[prx.stc.containers.getIndexFromId(item.symbolid)].states[i].title, value: prx.symbols[prx.stc.containers.getIndexFromId(item.symbolid)].states[i].id });
      						}
      						return rA;
      					}
      					,hiddenByDefault: function(item) {
      						if(typeof(prx.symbols[0].states) == "undefined") { return true; }
      						if(prx.symbols[prx.stc.containers.getIndexFromId(item.symbolid)].states.length == 1) {
      							return true;
      						}
      						return false;
      					}
      					,changeProperty: {
      						caption: 'Container state',
      						selector: '',
      						property: 'container-state',
      						transitionable: false
      					}
	      			}]]
	    },

		{
			caption: 'Scroll properties',
			properties: [[
              		{
              			caption: 'Scroll'
              			,name: 'scroll'
              			,type: 'select'
              			,value: function(item,name) {
              				return item.scroll;
              			}
      					,values: [{value: 'none',displayValue: 'No'},{value: 'horizontal',displayValue: 'Horizontally'},{value: 'vertical',displayValue: 'Vertically'},{value: 'omni',displayValue: 'Omni-directional'}]
      					,onChange: function(item){
	      					if(item.scroll == '' || item.scroll == 'none') {
	      						$('#property-scrollsnap, #property-pinchzoom, #property-momentum, #property-scrollbars, #property-lockdirection, #property-bounce').hide();
	      						$('#property-propagateevents').show();
	      					} else {
	      						$('#property-scrollsnap, #property-pinchzoom, #property-momentum, #property-bounce, #property-scrollbars').show();
	      						$('#property-propagateevents').hide();
	      						if(item.scroll == 'omni') {
	      							$('#property-lockdirection').show();
	      							if(typeof(item.scrollbars) == "undefined") {
	      								if(item.vscrollbar || item.hscrollbar) {
	      									$('#p-'+item.id+'-scrollbars').prop('checked', true)
	      								} else {
	      									$('#p-'+item.id+'-scrollbars').prop('checked', false)
	      								}
	      							}
	      						} else {
	      							$('#property-lockdirection').hide();
	      							if(typeof(item.scrollbars) == "undefined") {
	      								if(item.scroll == 'horizontal') {
		      								if(item.hscrollbar) {
		      									$('#p-'+item.id+'-scrollbars').prop('checked', true)
		      								} else {
		      									$('#p-'+item.id+'-scrollbars').prop('checked', false)
		      								}
		      							}
	      								if(item.scroll == 'vertical') {
		      								if(item.vscrollbar) {
		      									$('#p-'+item.id+'-scrollbars').prop('checked', true)
		      								} else {
		      									$('#p-'+item.id+'-scrollbars').prop('checked', false)
		      								}
		      							}
	      							}
	      						}
	      					}
	      				}
	      				,changeProperty: {
      						caption: 'Scroll',
      						rerender: true
      					}
	      			}],[{
              			caption: 'Treat scroll container as snap (carousel)'
              			,name: 'scrollsnap'
              			,type: 'onoff'
              			,value: function(item,name) {
              				return item.scrollsnap;
              			}
	      				,hiddenByDefault: function(item){
	      					return (item.scroll=='' || item.scroll=='none');
	      				}
	      				,changeProperty: {
      						caption: 'Snap',
      						rerender: true
      					}
	      			},
	      			{
              			caption: 'Allow scrolling beyond container boundaries'
              			,name: 'bounce'
              			,type: 'onoff'
              			,value: function(item,name) {
              				if(typeof(item.bounce) == "undefined") {
              					item.bounce = true;
              				}
              				return item.bounce;
              			}
	      				,hiddenByDefault: function(item){
	      					return (item.scroll=='' || item.scroll=='none');
	      				}
	      				,changeProperty: {
      						caption: 'Scroll beyond boundaries',
      						rerender: true
      					}
	      			},{
              			caption: 'Enable Inertia'
              			,name: 'momentum'
              			,type: 'onoff'
              			,value: function(item,name) {
              				return item.momentum;
              			}
	      				,hiddenByDefault: function(item){
	      					return (item.scroll=='' || item.scroll=='none');
	      				}
	      				,changeProperty: {
      						caption: 'Inertia',
      						rerender: true
      					}
	      			},
	      			/*{
              			caption: 'Show horizontal scrollbar'
              			,name: 'hscrollbar'
              			,type: 'onoff'
              			,value: function(item,name) {
              				return item.hscrollbar;
              			}
	      				,hiddenByDefault: function(item){
	      					return (item.scroll=='' || item.scroll=='none' || item.scroll == 'vertical');
	      				}
	      				,changeProperty: {
      						caption: 'Horizontal scrollbar',
      						rerender: true
      					}
	      			},{
              			caption: 'Show vertical scrollbar'
              			,name: 'vscrollbar'
              			,type: 'onoff'
              			,value: function(item,name) {
              				return item.vscrollbar;
              			}
	      				,hiddenByDefault: function(item){
	      					return (item.scroll=='' || item.scroll=='none' || item.scroll == 'horizontal');
	      				}
	      				,changeProperty: {
      						caption: 'Vertical scrollbar',
      						rerender: true
      					}
	      			},*/
	      			{
              			caption: 'Show scrollbars'
              			,name: 'scrollbars'
              			,type: 'onoff'
              			,value: function(item,name) {
              				if(typeof(item.scrollbars) == "undefined") {
              					switch (item.scroll) {
              					case "omni":
              						var _scrollbars = (eval(item.hscrollbar) || eval(item.vscrollbar)) ? true : false;
              						break;
              					case "horizontal":
              						var _scrollbars = (eval(item.hscrollbar)) ? true : false;
              						break;
              					case "vertical":
              						var _scrollbars = (eval(item.vscrollbar)) ? true : false;
              						break;
              					default:
              						break;
              					}
              					return _scrollbars;
              				}
              				return item.scrollbars;
              			}
	      				,hiddenByDefault: function(item){
	      					return (item.scroll=='' || item.scroll=='none');
	      				}
	      				,changeProperty: {
      						caption: 'Scrollbars',
      						rerender: true
      					}
	      			},
	      			{
              			caption: 'Enable Pinch / Zoom'
              			,name: 'pinchzoom'
              			,type: 'onoff'
              			,value: function(item,name) {
              				return item.pinchzoom;
              			}
	      				,hiddenByDefault: function(item){
	      					return (item.scroll=='' || item.scroll=='none');
	      				}
	      				,changeProperty: {
      						caption: 'Pinch/Zoom',
      						rerender: true
      					}
	      			},{
              			caption: 'Lock direction on scroll'
              			,name: 'lockdirection'
              			,type: 'onoff'
              			,value: function(item,name) {
              				if(typeof(item.lockdirection) == "undefined") {
              					return true
              				}
	      					return item.lockdirection;
              			}
	      				,hiddenByDefault: function(item){
	      					return (item.scroll!='omni');
	      				}
	      				,changeProperty: {
      						caption: 'Lock direction',
      						rerender: true
      					}
	      			},{
              			caption: 'Propagate events in empty areas'
              			,name: 'propagateevents'
              			,type: 'onoff'
              			,value: function(item,name) {
              				if(typeof(item.propagateevents) == "undefined") {
              					return false;
              				}
	      					return item.propagateevents;
              			}
	      				,hiddenByDefault: function(item){
	      					return (item.scroll!='' && item.scroll!='none');
	      				}
	      				,changeProperty: {
      						caption: 'Propagate events',
      						rerender: true
      					}
	      			},{
	      				caption: 'Background'
              			,name: 'background'
              			,proptype: 'background-color'
              			,type: 'colorpicker'
              			,value: function(item,name) {
              				return item.background
              			}
	      				,hiddenByDefault: function(item){
	      					return true;
	      				},
	      				changeProperty: {
      						caption: 'Background Color',
      						selector: '.symbol-scroll',
      						property: 'background-color',
      						transitionable: true
      					}
	      			}]]
	      			}

	              ]
};


/***** /SPECIAL COMPONENTS *****/

/***** BASIC COMPONENTS *****/

//TYPE: TEXT
prx.types.text = {
	name: "text"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _bold = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		var _italic = (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		var _underline = (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		var _shadow = (item.enableShadow) ? " text-shadow: 0 1px 0 #FFFFFF;" : "";
		if(typeof(item.propagateEvents) == "undefined") { item.propagateEvents = false; }
		if(typeof(item.lineHeight) == "undefined") { item.lineHeight = parseInt(item.textSize*1.231); }
		
		var cReturn = '<div id="' + _id + '" class="box pos type-text '+(item.propagateEvents ? 'pointer-events-none ' : '')+'liveUpdate-textColor changeProperty-textColor liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-textAlign" style="line-height: '+item.lineHeight+'px; color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; background-color: '+prx.utils.getColor(item.backgroundColor)+'; '+_bold+_italic+_underline+_shadow+' text-align: '+item.textAlign+';"><div class="text-contents"> <span data-editableproperty="text" '+((item.autoResize) ? 'class="autoresize"' : '')+'>'+item.text+'</span></div></div>';
		return cReturn;
	}
	,editableProperties: [
		{
			caption: 'Text',
			name: 'text',
			type: 'textarea',
            value: function (item, name) {
                return item.text;
            },
			changeProperty: {
	      						caption: 'Text',
	      						selector: '.text-contents',
	      						property: 'text',
	      						transitionable: false
	      					 }
		}
	]
	,interactions: [
		{
			caption: 'Interactions',
			name: 'actions',
			type: 'action',
			value: function(item,name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			hiddenByDefault: function(item){
				if(typeof(item.propagateEvents) != "undefined" && item.propagateEvents) {
					return true;
				}
				return false;
			}
		}
	]
	,propertyGroups: [
		{
			caption: 'Text',
            properties: [[{
					caption: false,
					name: 'textFont',
					proptype: 'font-family',
					type: 'select',
                value: function (item, name) {
                    return item.textFont;
                },
                values: function () {
                    return prx.comps.fonts
                }
		      		,onChange: function(item) {
		      			if(item.autoResize) {
		      				prx.items.update(item);
		      				var $temp = $('<span>'+item.text+ '&nbsp;' +'</span>')
							    .css({
							        'display': 'inline-block',
							    	'font-size': $('#'+item.id+' [data-editableproperty="text"]').css('font-size'),
							    	'font-family': $('#'+item.id+' [data-editableproperty="text"]').css('font-family'),
							    	'line-height': $('#'+item.id+' [data-editableproperty="text"]').css('line-height'),
							    	'text-decoration': $('#'+item.id+' [data-editableproperty="text"]').css('text-decoration'),
							    	'font-weight': $('#'+item.id+' [data-editableproperty="text"]').css('font-weight'),
							    	'font-style': $('#'+item.id+' [data-editableproperty="text"]').css('font-style'),
							    	width: 'auto',
							        height: 'auto',
							        marginLeft: '5px'
							    })
                            .appendTo('body');

							// no provision for dynamic properties
							prx.data.items[prx.iSelectedIndex].wtype = "fixed";
							prx.data.items[prx.iSelectedIndex].width = $temp.width();
							prx.data.items[prx.iSelectedIndex].htype = "fixed";
							prx.data.items[prx.iSelectedIndex].height = $temp.height();

							$temp.remove();
							prx.items.update(item);
		      			}
                }, changeProperty: {
  						caption: 'Text font',
  						selector: '.liveUpdate-textColor',
  						property: 'font-family',
  						transitionable: false
  					}
            }, {
					caption: false,
					name: 'textSize',
					proptype: 'font-size',
					type: 'combo-select',
                value: function (item, name) {
                    return item.textSize;
                },
					values: prx.comps.textsize ,
		      		onChange: function(item) {
		      			//if(item.autoResize) {

		      				prx.items.update(item);
		      				var $temp = $('<span>'+item.text+ '&nbsp;' +'</span>')
							    .css({
							        'display': 'inline-block',
							    	'font-size': $('#'+item.id+' [data-editableproperty="text"]').css('font-size'),
							    	'font-family': $('#'+item.id+' [data-editableproperty="text"]').css('font-family'),
							    	'line-height': parseInt(item.textSize*1.231) + 'px', //$('#'+item.id+' [data-editableproperty="text"]').css('line-height'),
							    	'text-decoration': $('#'+item.id+' [data-editableproperty="text"]').css('text-decoration'),
							    	'font-weight': $('#'+item.id+' [data-editableproperty="text"]').css('font-weight'),
							    	'font-style': $('#'+item.id+' [data-editableproperty="text"]').css('font-style'),
							    	width: 'auto',
							        height: 'auto',
							        marginLeft: '5px'
							    })
							    .appendTo('body')

							// no provision for dynamic properties

				            prx.data.items[prx.iSelectedIndex].lineHeight = parseInt(item.textSize*1.231);
							prx.data.items[prx.iSelectedIndex].wtype = "fixed";
							prx.data.items[prx.iSelectedIndex].width = $temp.width();
							prx.data.items[prx.iSelectedIndex].htype = "fixed";
							prx.data.items[prx.iSelectedIndex].height = $temp.height();

							$temp.remove();
							prx.items.update(item);

				            $('#p-'+item.id+'-lineHeight').val(prx.data.items[prx.iSelectedIndex].lineHeight)

				            //prx.properties.popup.show();
		      			//}
		      			}
		      		,changeProperty: {
  						caption: 'Text size',
  						selector: '.liveUpdate-textColor',
  						property: 'font-size',
  						transitionable: true
  					}
				}
		      	,prx.commonproperties.textColor
		      	]
				,
				[
				{
					caption: false,
					name: 'textProperties',
					proptype: 'text-properties',
					type: 'checkbox',
                        value: function (item, name) {
                            if (typeof(item.textProperties) == "undefined") {
                                item.textProperties = [];
                            }
                            return item.textProperties;
                        },
                        values: [{
                            value: 'bold',
                            displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'
                        }, {
                            value: 'italic',
                            displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'
                        }, {
                            value: 'underline',
                            displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'
                        }],
		      		onChange: function(item) {
		      			if(item.autoResize) {
		      				prx.items.update(item);
		      				var $temp = $('<span>'+item.text+ '&nbsp;' +'</span>')
							    .css({
							        'display': 'inline-block',
							    	'font-size': $('#'+item.id+' [data-editableproperty="text"]').css('font-size'),
							    	'font-family': $('#'+item.id+' [data-editableproperty="text"]').css('font-family'),
							    	'line-height': $('#'+item.id+' [data-editableproperty="text"]').css('line-height'),
							    	'text-decoration': $('#'+item.id+' [data-editableproperty="text"]').css('text-decoration'),
							    	'font-weight': $('#'+item.id+' [data-editableproperty="text"]').css('font-weight'),
							    	'font-style': $('#'+item.id+' [data-editableproperty="text"]').css('font-style'),
							    	width: 'auto',
							        height: 'auto',
							        marginLeft: '5px'
							    })
							    .appendTo('body')


							// no provision for dynamic properties

							prx.data.items[prx.iSelectedIndex].wtype = "fixed";
							prx.data.items[prx.iSelectedIndex].width = $temp.width();
							prx.data.items[prx.iSelectedIndex].htype = "fixed";
							prx.data.items[prx.iSelectedIndex].height = $temp.height();

							$temp.remove();
							prx.items.update(item);
		      			}
		      		},
		      		changeProperty: {
  						caption: 'Text Properties',
  						rerender: true
	      			}
				}
		  		,prx.commonproperties.textAlign
				],
				[
		  		{
  					caption: 'Line height',
  					name: 'lineHeight',
  					proptype: 'font-size',
  					type: 'combo-select',
  					value: function(item,name) {
  						if(typeof(item.lineHeight) == "undefined") { item.lineHeight = item.textSize; }
  						return item.lineHeight;
  					},
  					values: prx.comps.textsize
  		      		,changeProperty: {
  						caption: 'Line height',
  						selector: '.liveUpdate-lineHeight',
  						property: 'line-height',
  						transitionable: false
  					 },
				    onChange: function(item) {
					    if(item.autoResize) {
						    prx.items.update(item);
						    var $temp = $('<span>'+item.text+ '&nbsp;' +'</span>')
							    .css({
								    'display': 'inline-block',
								    'font-size': $('#'+item.id+' [data-editableproperty="text"]').css('font-size'),
								    'font-family': $('#'+item.id+' [data-editableproperty="text"]').css('font-family'),
								    'line-height': $('#'+item.id+' [data-editableproperty="text"]').css('line-height'),
								    'text-decoration': $('#'+item.id+' [data-editableproperty="text"]').css('text-decoration'),
								    'font-weight': $('#'+item.id+' [data-editableproperty="text"]').css('font-weight'),
								    'font-style': $('#'+item.id+' [data-editableproperty="text"]').css('font-style'),
								    width: 'auto',
								    height: 'auto',
								    marginLeft: '5px'
							    })
							    .appendTo('body')


						    // no provision for dynamic properties

						    prx.data.items[prx.iSelectedIndex].wtype = "fixed";
						    prx.data.items[prx.iSelectedIndex].width = $temp.width();
						    prx.data.items[prx.iSelectedIndex].htype = "fixed";
						    prx.data.items[prx.iSelectedIndex].height = $temp.height();

						    $temp.remove();
						    prx.items.update(item);
					    }
				    }
  				}
		  		],
		  		[
				{
		      		caption: 'Text Shadow',
		      		name: 'enableShadow',
		      		type: 'onoff',
		      		value: function(item,name) {
		      			return item.enableShadow;
		      		},
		      		changeProperty: {
  						caption: 'Text Shadow',
  						rerender: true
	      			}
				}
				],
				[
			      	{
						caption: 'Use lorem ipsum text',
						name: 'loremIpsum',
						type: 'link',
						onClick: function(item) {
							if(item.text.indexOf(item.caption.replace('...', '')) == 0 || /^Text(\s[0-9]*)?$/.test(item.caption)) {
								item.caption = "Lorem ipsum dolor sit amet...";
								$('#itembrowser #id-' + item.id + ' .item-caption').text(item.caption);
							}
							item.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor. Duis nec sem at orci commodo viverra id in ipsum. Fusce tellus nisl, vestibulum sed rhoncus at, pretium non libero. Cras vel lacus ut ipsum vehicula aliquam at quis urna. Nunc ac ornare ante. Fusce lobortis neque in diam vulputate quis semper sem elementum.";
							if(item.autoResize) {
								prx.items.update(item);
								var $temp = $('<span>'+item.text+ '&nbsp;' +'</span>')
									.css({
										'display': 'inline-block',
										'font-size': $('#'+item.id+' [data-editableproperty="text"]').css('font-size'),
										'font-family': $('#'+item.id+' [data-editableproperty="text"]').css('font-family'),
										'line-height': $('#'+item.id+' [data-editableproperty="text"]').css('line-height'),
										'text-decoration': $('#'+item.id+' [data-editableproperty="text"]').css('text-decoration'),
										'font-weight': $('#'+item.id+' [data-editableproperty="text"]').css('font-weight'),
										'font-style': $('#'+item.id+' [data-editableproperty="text"]').css('font-style'),
										width: 'auto',
										height: 'auto',
										marginLeft: '5px'
									})
									.appendTo('body')

								// no provision for dynamic properties

								prx.data.items[prx.iSelectedIndex].wtype = "fixed";
								prx.data.items[prx.iSelectedIndex].width = $temp.width();
								prx.data.items[prx.iSelectedIndex].htype = "fixed";
								prx.data.items[prx.iSelectedIndex].height = $temp.height();

								$temp.remove();
								prx.items.update(item);
							}
							return item;
						}
					}
				]
			]
			},
			{
				caption: 'Style',
				properties: [
					[
						prx.commonproperties.backgroundColor

					],
					[
						{
				      		caption: 'Fit size to text',
				      		name: 'autoResize',
				      		type: 'onoff',
				      		value: function(item,name) {
                            if (typeof(item.autoResize) == "undefined") {
                                item.autoResize = false;
                            }
				      			return item.autoResize;
				      		},
				      		onChange: function(item) {
				      			if(item.autoResize) {
				      				var $temp = $('<span>'+item.text+ '&nbsp;' +'</span>')
									    .css({
									        'display': 'inline-block',
									    	'font-size': $('#'+item.id+' [data-editableproperty="text"]').css('font-size'),
									    	'font-family': $('#'+item.id+' [data-editableproperty="text"]').css('font-family'),
									    	'line-height': $('#'+item.id+' [data-editableproperty="text"]').css('line-height'),
									    	'text-decoration': $('#'+item.id+' [data-editableproperty="text"]').css('text-decoration'),
									    	'font-weight': $('#'+item.id+' [data-editableproperty="text"]').css('font-weight'),
									    	'font-style': $('#'+item.id+' [data-editableproperty="text"]').css('font-style'),
									    	width: 'auto',
									        height: 'auto',
									        marginLeft: '5px'
									    })
									    .appendTo('body')

									// no provision for dynamic properties

									prx.data.items[prx.iSelectedIndex].wtype = "fixed";
									prx.data.items[prx.iSelectedIndex].width = $temp.width();
									prx.data.items[prx.iSelectedIndex].htype = "fixed";
									prx.data.items[prx.iSelectedIndex].height = $temp.height();

									$temp.remove();
									prx.items.update(item);
				      			}
				      		},
				      		changeProperty: {
		  						caption: 'Fit to text',
		  						selector: '.foo',
		  						property: 'bar',
		  						transitionable: false
		  					}
						}
					]
				]
			}, {
				caption: 'Advanced',
				properties: [
					[
						{
							caption: 'Propagate all events to the item below'
							,name: 'propagateEvents'
							,type: 'onoff'
							,value: function(item,name) {
								if(typeof(item.propagateEvents) == "undefined") {
									return false;
								}
								return item.propagateEvents;
							}
							,onChange: function(item){
								// will force rerender of properties to show/hide the interactions tab
								return item;
							}
							,changeProperty: {
								caption: 'Propagate events',
								rerender: true
							}
						}
					]
				]
			}
	      ]

};

//TYPE: RICHTEXT
prx.types.richtext = {
	name: 'richtext'
		,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		if(typeof(item.propagateEvents) == "undefined") { item.propagateEvents = false; }
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-richtext '+(item.propagateEvents ? 'pointer-events-none ' : '')+'"><div style="overflow: hidden; width: 100%; height: 100%;"><span>' + item.text + '</span></div></div>';
		return cR;
	}
	,interactions: [
		{
			caption: 'Interactions',
			name: 'actions',
			type: 'action',
			value: function(item,name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			hiddenByDefault: function(item){
				if(typeof(item.propagateEvents) != "undefined" && item.propagateEvents) {
					return true;
				}
				return false;
			}
		}
	]
	,propertyGroups: [{
		caption: 'Text',
		properties: [
				[
				{
			  		caption: false
			    	,name: 'text'
			    	,type: 'wysiwyg'
			    	,value: function(item,name) {
			    		return item.text;
			    	}
			    	,changeProperty: {
			    		caption: 'Text',
			    		rerender: true
			    	}
				}
				],
		        [
	  			{
					caption: 'Use lorem ipsum text',
					name: 'loremIpsum',
					type: 'link',
					onClick: function(item) {
						item.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor. Duis nec sem at orci commodo viverra id in ipsum. Fusce tellus nisl, vestibulum sed rhoncus at, pretium non libero. Cras vel lacus ut ipsum vehicula aliquam at quis urna. Nunc ac ornare ante. Fusce lobortis neque in diam vulputate quis semper sem elementum."
						return item;
					}
				}
			]
	]
	}, {
		caption: 'Advanced',
		properties: [
			[
				{
					caption: 'Propagate all events to the item below'
					,name: 'propagateEvents'
					,type: 'onoff'
					,value: function(item,name) {
						if(typeof(item.propagateEvents) == "undefined") {
							return false;
						}
						return item.propagateEvents;
					}
					,onChange: function(item){
						// will force rerender of properties to show/hide the interactions tab
						return item;
					}
					,changeProperty: {
						caption: 'Propagate events',
						rerender: true
					}
				}
			]
		]
	}

   ]
};

//TYPE: RECTANGLE
prx.types.rectangle = {
	name: "rectangle"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		if(item.borderRadius == parseInt(item.borderRadius)) { item.borderRadius += 'px'; }
		if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
		if(typeof(item.text) == "undefined") { item.text = '' }
		if(typeof(item.text) == "undefined") { item.textProperties = [] }

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";


		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-rectangle">';
		cR += '<style>';
		cR += '#'+_id+' .inner-rec { background-color: '+prx.utils.getColor(item.backgroundColor)+'; border: '+item.borderWidth+'px '+item.borderStyle+' ' + prx.utils.getColor(item.borderColor) + '; border-radius: '+item.borderRadius+'; } ';
		cR += '#'+_id+' .rectangle-text-container { '+_props+' '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; text-align: '+item.textAlign+'; color: '+prx.utils.getColor(item.textColor)+'; }';
		cR += '</style>';
		cR += '<div id="rec-' + _id + '" class="inner-rec liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-borderColor liveUpdate-borderColor">';
		cR += '<div class="rectangle-text-container liveUpdate-textColor">';
		cR += '<span data-editableproperty="text">' + item.text + '</span>';
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,interactions: [
		prx.commonproperties.actions
	]
	,editableProperties: [
		{
	    	caption: 'Text'
	    	,name: 'text'
	    	,type: 'textarea'
	    	,value: function(item,name) {
	    		if(typeof(item.text) == "undefined") { item.text = '' }
	    		return item.text;
	    	},
      		changeProperty: {
				caption: 'Text',
				property: 'text',
				selector: '.rectangle-text-container span',
				transitionable: false
  			}
	    }
	]
	,propertyGroups: [
		{
		caption: 'Text',
		properties: [
			[
			{
				caption: false,
				name: 'textFont',
				proptype: 'font-family',
				type: 'select',
				value: function(item,name) {
					if(typeof(item.textFont) == "undefined") { item.textFont = 'sans-serif,Helvetica Neue,Arial' }
					return item.textFont;
				},
				values: function(){ return prx.comps.fonts }
	      		,changeProperty: {
					caption: ' Text font',
					selector: '.liveUpdate-textColor',
					property: 'font-family',
					transitionable: false
				 }

			},
			{
				caption: false,
				name: 'textSize',
				proptype: 'font-size',
				type: 'combo-select',
				value: function(item,name) {
					if(typeof(item.textSize) == "undefined") { item.textSize = 16 }
					return item.textSize;
				},
				values: prx.comps.textsize
	      		,changeProperty: {
					caption: ' Text size',
					selector: '.liveUpdate-textColor',
					property: 'font-size',
					transitionable: false
				 }
			}
	      	,{
	      		caption: false,
	      		name: 'textColor',
	      		proptype: 'font-color',
	      		type: 'colorpicker',
	      		value: function(item,name) {
	      			if(typeof(item.textColor) == "undefined") { item.textColor = '#2E2E2E' }
	      			return item.textColor;
	      		},
	      		liveUpdate: 'color'
	      		,changeProperty: {
					caption: ' Text color',
					selector: '.liveUpdate-textColor',
					property: 'color',
					transitionable: true
				 }
	      	}
	      	]
			,
			[
			{
				caption: false,
				name: 'textProperties',
				proptype: 'text-properties',
				type: 'checkbox',
				value: function(item,name) { if(typeof(item.textProperties) == "undefined") {item.textProperties = [];} return item.textProperties; },
				values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}],
	      		changeProperty: {
					caption: 'Text Properties',
					rerender: true
      			}
			}
	  		,{
	  			caption: false,
	  			name: 'textAlign',
	  			proptype: 'text-align',
	  			type: 'radio',
	  			value: function(item,name) {
	  				if(typeof(item.textAlign) == "undefined") { item.textAlign = 'center' }
	  				return item.textAlign;
	  			},
	  			values: [{ value: 'left', displayValue: '<span class="property-icon property-align-left" title="Align left"></span>'}, { value: 'center', displayValue: '<span class="property-icon property-align-center" title="Align center"></span>'}, { value: 'right', displayValue: '<span class="property-icon property-align-right" title="Align right"></span>'}],
	  			changeProperty: {
					caption: 'Text Align',
					selector: '.liveUpdate-textColor',
					property: 'text-align',
					transitionable: false
      			}
	  		}
	  		]
		]
		},
		{
			caption: 'Style',
			properties: [
	      			[
	      				{
	      					caption: 'Background',
	      					name: 'backgroundColor',
	      					proptype: 'background-color',
	      					type: 'colorpicker',
	      					value: function(item,name) { return item.backgroundColor; },
	      					liveUpdate: 'background-color',
	      					changeProperty: {
	      						caption: 'Background Color',
	      						selector: '.inner-rec',
	      						property: 'background-color',
	      						transitionable: true
	      					}
	      				}	      		      	
	      			]
	      			,
	      			[
	      				{
	      					caption: 'Border',
	      					name: 'borderWidth',
	      					proptype: 'border-width',
	      					type: 'combo-select',
	      					value: function(item,name) { return item.borderWidth; },
	      					values: { min: 0, max: 20, step: 1 } ,
	      					changeProperty: {
	      						caption: 'Border Width',
	      						selector: '.inner-rec',
	      						property: 'border-width',
	      						transitionable: true
	      					}
	      				}
	      				,{
		      				caption: false,
		      				name: 'borderStyle',
		      				proptype: 'border-style',
		      				type: 'select',
		      				value: function(item,name) {
		      					if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
		      					return item.borderStyle;
		      				},
		      				values: [{ value: "solid", displayValue: "Solid"},{ value: "dotted", displayValue: "Dotted"},{ value: "dashed", displayValue: "Dashed"},{ value: "double", displayValue: "Double"},{ value: "none", displayValue: "None"}],
	      					changeProperty: {
	      						caption: 'Border Style',
	      						selector: '.inner-rec',
	      						property: 'border-style',
	      						transitionable: false
	      					}
		      			}
	      				,
	      				{
	      					caption: false,
	      					name: 'borderColor',
	      					proptype: 'border-color',
	      					type: 'colorpicker',
	      					value: function(item,name) { return item.borderColor; },
	      					liveUpdate: 'border-color' ,
	      					changeProperty: {
	      						caption: 'Border Color',
	      						selector: '.inner-rec',
	      						property: 'border-top-color,border-bottom-color,border-left-color,border-right-color',
	      						transitionable: true
	      					}
	      				}
	      			],[{
		      				caption: '<span class="property-icon property-border-radius" title="Border radius"></span>',
		      				name: 'borderRadius',
		      				proptype: 'border-radius',
		      				type: 'combo-select',
		      				value: function(item,name) {
		      					if(item.borderRadius == parseInt(item.borderRadius)) { return item.borderRadius += 'px'; }
		      					return item.borderRadius;
		      				},
		      				values: [{ value: "0px", displayValue: "0px"}, { value: "1px", displayValue: "1px"}, { value: "2px", displayValue: "2px"}, { value: "3px", displayValue: "3px"}, { value: "4px", displayValue: "4px"}, { value: "5px", displayValue: "5px"}, { value: "6px", displayValue: "6px"}, { value: "7px", displayValue: "7px"}, { value: "8px", displayValue: "8px"}, { value: "9px", displayValue: "9px"}, { value: "10px", displayValue: "10px"}, { value: "11px", displayValue: "11px"}, { value: "12px", displayValue: "12px"}, { value: "13px", displayValue: "13px"}, { value: "14px", displayValue: "14px"}, { value: "15px", displayValue: "15px"}, { value: "16px", displayValue: "16px"}, { value: "17px", displayValue: "17px"},{ value: "18px", displayValue: "18px"}, { value: "19px", displayValue: "19px"}, { value: "20px", displayValue: "20px"}],
	      					changeProperty: {
	      						caption: 'Border Radius',
	      						selector: '.inner-rec',
	      						property: 'border-radius',
	      						transitionable: true
	      					}
		      			}
		      		]

	      	]
	   }
	]

};

/* TYPE = CIRCLE */
prx.types.circle = prx.componentsHelper.cloneobject(prx.types.rectangle);
prx.types.circle.name = 'circle';
prx.types.circle.propertyGroups = prx.componentsHelper.removeProperties(prx.types.circle.propertyGroups, ['borderRadius'])


//TYPE: HORIZONTAL LINE
prx.types.horizontalline = {
	name: "horizontalline"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		item.height = item.weight;
		if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
		if (item.locked) {var xtra='onmousedown="if (event.preventDefault) event.preventDefault()"';} else {var xtra=""}; // prevent default drag
		var cReturn = '<div id="' + _id + '" class="box pos type-horizontalline" style="height: '+item.weight+'px; overflow: visible"><div class="inner liveUpdate-color" style="border-top: '+item.weight+'px '+item.borderStyle+' '+prx.utils.getColor(item.color)+';"></div></div>';
		return cReturn;
	}
	,propertyGroups: [
		{
			caption: "Style",
			properties: [
				[
	      			{
            			caption: 'Border'
            			,name: 'weight'
            			,proptype: 'border-width'
            			,type: 'combo-select'
            			,value: function(item,name) {
            				return item.weight;
            			}
    					,values: { min: 1, max: 10, step: 1 }
    					,changeProperty: {
							caption: 'Thickness',
							selector: '.inner',
							property: 'border-width',
							transitionable: true
						 }
	      			},{
	      				caption: false,
	      				name: 'borderStyle',
	      				proptype: 'border-style',
	      				type: 'select',
	      				value: function(item,name) {
	      					if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
	      					return item.borderStyle;
	      				},
	      				values: [{ value: "solid", displayValue: "Solid"},{ value: "dotted", displayValue: "Dotted"},{ value: "dashed", displayValue: "Dashed"},{ value: "double", displayValue: "Double"},{ value: "none", displayValue: "None"}]
	      				,changeProperty: {
							caption: 'Style',
							rerender: true
						 }
		      		},
	      			{
	      				caption: false
	      				,name: 'color'
	      				,proptype: 'border-color'
	      				,type: 'colorpicker'
	      				,value: function(item,name) {
	      					return item.color;
	      				}
	      				,liveUpdate: 'border-color'
	      				,changeProperty: {
							caption: 'color',
							selector: '.inner',
							property: 'border-color',
							transitionable: true
						}
	      			}

	      		]
	      		]
	      	}
	      ]

};

//TYPE: VERTICAL LINE
prx.types.verticalline = {
	name: "verticalline"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		item.width = item.weight;
		if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
		if (item.locked) {var xtra='onmousedown="if (event.preventDefault) event.preventDefault()"';} else {var xtra=""}; // prevent default drag
		var cReturn = '<div id="' + _id + '" class="box pos type-verticalline" style="width: '+item.weight+'px;"><div class="inner liveUpdate-color" style="border-left: '+item.weight+'px '+item.borderStyle+' '+prx.utils.getColor(item.color)+';"></div></div>';
		return cReturn;
	}
	,propertyGroups: [
		{
			caption: "Style",
			properties: [
				[
	      			{
            			caption: 'Border'
            			,name: 'weight'
            			,proptype: 'border-width'
            			,type: 'combo-select'
            			,value: function(item,name) {
            				return item.weight;
            			}
    					,values: { min: 1, max: 10, step: 1 }
    					,changeProperty: {
							caption: 'Thickness',
							selector: '.inner',
							property: 'border-width',
							transitionable: true
						}
	      			}
	      			,{
	      				caption: false,
	      				name: 'borderStyle',
	      				proptype: 'border-style',
	      				type: 'select',
	      				value: function(item,name) {
	      					if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
	      					return item.borderStyle;
	      				},
	      				values: [{ value: "solid", displayValue: "Solid"},{ value: "dotted", displayValue: "Dotted"},{ value: "dashed", displayValue: "Dashed"},{ value: "double", displayValue: "Double"},{ value: "none", displayValue: "None"}]
	      				,changeProperty: {
							caption: 'Style',
							rerender: true
						}
		      		},
	      			{
	      				caption: false
	      				,name: 'color'
	      				,proptype: 'border-color'
	      				,type: 'colorpicker'
	      				,value: function(item,name) {
	      					return item.color;
	      				}
	      				,liveUpdate: 'border-color'
	      				,changeProperty: {
							caption: 'Color',
							selector: '.inner',
							property: 'border-color',
							transitionable: true
						 }
	      			}

	      		]
	      		]
	      	}
	      ]

};

//TYPE: ACTION AREA
prx.types.actionarea = {
	name: "actionarea"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var cReturn = '<div id="' + _id + '" class="box pos type-actionarea"><div id="rec-' + _id + '" class="inner-rec" ><div></div></div></div>';
		return cReturn;
	}
	,interactions: [
	              prx.commonproperties.actions
	      		]

};

//TYPE: IMAGE

prx.imageChecked =  {};
prx.types.image = {
    name: "image"
    , onDisplay: function (item, containerid) {
        var _id = (!containerid) ? item.id : containerid + '-' + item.id;
        if (typeof(item.overlay) == "undefined") {
            item.overlay = false;
        }
        if (typeof(item.repeat) == "undefined") {
            item.repeat = false;
        }

        var assetUrl = prx.componentsHelper.getAssetUrl(item.imgSrc);
        var thumbUrl = '';

        if (prx.urlCache != undefined)
            thumbUrl = prx.urlCache.thumbs[item.imgSrc.fileId] || '';

        var missing = prx.url.static + '/images/editor/missing.png';


        if (prx.editor && item.imgSrc.assetType === "project") {

            //if (prx.iam.haveAsset(item.imgSrc.url)) {

                var img = document.createElement("img");

                img.onload = function (e) {

                    document.body.removeChild(img);

                    $('#' + _id).css('background-image', '');
                    delete prx.imageChecked[toCheck];

                    $('#' + _id + '-img-wrapper').removeClass('missing');
                    $('#' + _id + '-img-wrapper').find('div').remove();
                    //$('#' + _id + '-img-wrapper').css('background-image', '');
                }

                img.onerror = function (e) {
                    $('#' + _id).css('background-image', '');

                    prx.imageChecked[toCheck] = missing;
                    $('#' + _id + '-img').attr('src', missing);

                    var title = $('<div>' + item.caption + '</div>');
                    $('#' + _id + '-img-wrapper').addClass('missing');
                    $('#' + _id + '-img-wrapper').css('background-image', '');

                    $('#' + _id + '-img-wrapper').find('div').remove();
                    $('#' + _id + '-img-wrapper').prepend($('<div></div>'));
                    $('#' + _id + '-img-wrapper').append(title);
                    $('#' + _id + '-img-wrapper').append($('<div></div>'));

                    document.body.removeChild(img);
                }

                var toCheck = '' + assetUrl;

                img.style.visibility = 'none';
                document.body.appendChild(img);
                img.setAttribute('src', toCheck);
                img.setAttribute('alt', 'na');

                if (prx.imageChecked[assetUrl] !== undefined && prx.imageChecked[assetUrl] !== missing) {
                    assetUrl = prx.imageChecked[assetUrl] || assetUrl;
                    prx.items.loadAll();
                }

                assetUrl = prx.imageChecked[assetUrl] || assetUrl;

            //} else {
            //    prx.imageChecked[assetUrl] = missing;
            //    assetUrl = missing;
            //}
        }

        var missingClass = '', wrapperBackground = assetUrl;
        if (assetUrl == missing) {
            thumbUrl == '';
            missingClass = ' missing';
            wrapperBackground = '';
        }

        var cR = '<div id="' + _id + '" style="background-image:  url(' + thumbUrl + ');" ';

        cR += 'class="box pos type-image ' + (item.propagateEvents ? 'pointer-events-none' : '') + ((item.repeat) ? ' type-image-repeater' : '') + '" ' + ((item.overlay) ? 'data-mpoverlay="1"' : '') + '>';
        cR += '<div id="' + _id + '-img-wrapper" class="type-image-wrapper ' + ((item.imgSrc.fileId.slice(-4) == '.svg') ? ' type-image-svg' : '') + missingClass + ((item.repeat) ? ' type-image-repeater' : '') + '" ' +
        'style="background-image: url(' + wrapperBackground + ');">';

        cR += '<div></div>'
        cR += '<img id="' + _id + '-img" src="' + ((item.imgSrc.fileId == "") ? "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" : assetUrl) + '" width="100%" height="100%" />';

        if (assetUrl == missing)
            cR += '<div>' + item.caption + '</div>';

        cR += '<div></div>'
        cR += '</div>'
        if (prx.editor && item.imgSrc.fileId == "d310bece0e91b91b485ed62166d1fc2e.svg" && item.imgSrc.assetType == "gallery") {
            cR += '<div class="type-image-hover-message">Double-click to edit image</div>';
	        cR += '<style>#' + _id + ' { background-color: #f9f9f9; }</style>'
	        cR += '<style>#' + _id + ' .type-image-wrapper { border: ' + 1 * prx.componentsHelper.getScale(item.lib) + 'px solid #eee; box-sizing: border-box; }</style>'
        }
        cR += '</div>';

        return cR;
    }
    , interactions: [{
        caption: 'Interactions',
        name: 'actions',
        type: 'action',
        value: function (item, name) {
            if (typeof(item.actions) == "undefined") {
                item.actions = [];
            }
            return item.actions.length;
        },
        hiddenByDefault: function (item) {
            if (typeof(item.propagateEvents) != "undefined" && item.propagateEvents) {
                return true;
            }
            return false;
        }
    }]
	,propertyGroups: [
		{
			caption: 'Image',
			properties: [
					[
	      			{
	      				caption: false
	      				,name: 'imgSrc'
	      				,type: 'combo-asset'
	      				,displayValue: function(item,name) {
	      					if(item.imgSrc.fileId == '') {
	      						return 'No asset selected.';
	      					}
	      					return item.imgSrc.name;
	      				}
	      				,value: function(item,name) {
	      					return $.toJSON({
	      						allow: 'image',
	      						asset: item.imgSrc
	      					});
	      				}
	      				,changeProperty: {
      						caption: 'Image',
      						rerender: true
      					}
	      			}
	      			],
	      			[
	      			{
	      				caption: 'Repeat image instead of stretch'
	      				,name: 'repeat'
	      				,type: 'onoff'
	      				,value: function(item,name) {
	      					if(typeof(item.repeat) == "undefined") {
	      						return false;
	      					}
	      					return item.repeat;
	      				}
	      				,changeProperty: {
							caption: 'Repeat image',
							rerender: true
						 }
	      			}]
	      		]
	      	}, {
	      		caption: 'Advanced',
	      		properties: [
	      			[
	      			{
	      				caption: 'Propagate all events to the item below'
	      				,name: 'propagateEvents'
	      				,type: 'onoff'
	      				,value: function(item,name) {
	      					if(typeof(item.propagateEvents) == "undefined") {
	      						return false;
	      					}
	      					return item.propagateEvents;
	      				}
	      				,onChange: function(item){
	      					/*
	      					if(item.propagateEvents) {
	      						('#property-actions').hide();
	      					} else {
	      						$('#property-actions').show();
	      					}*/
	      					// will force rerender of properties to show/hide the interactions tab
	      					return item;
	      				}
	      				,changeProperty: {
							caption: 'Propagate events',
							rerender: true
						 }
	      			}],
	      			[
	      		  	{
	    				caption: 'Position fixed on transitions'
	    				,name: 'overlay'
	    				,type: 'onoff'
	    				,value: function(item,name) {
	    					if(typeof(item.overlay)=="undefined") {
	    						return false;
	    					}
	    					return item.overlay;
	    				}
	    				,changeProperty: {
							caption: 'Position fixed',
							rerender: true
						 }
	      	      	}
	      	      ]
	      	      ]
	      	      }

	      		]
};

//TYPE: PLACEHOLDER
prx.types.placeholder = {
	name: 'placeholder'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var _real = prx.componentsHelper.getRealDims(item, symbol);
		var _realh = _real.height;
		var _realw = _real.width;

		var _width = Math.sqrt(Math.pow(_realw,2) + Math.pow(_realh,2)) - item.thickness;
		var _angle1 = 90 - Math.atan((_realw-item.thickness*2)/(_realh-item.thickness*2)) * (180/Math.PI);

		if(typeof(item.textColor) == "undefined") {
			item.textColor = item.borderColor;
		}

		//needs the width patenta to correctly calculate width on afterdisplay
		var cR = '<div id="' + _id + '" class="pos box type-placeholder" style="width: '+_realw+'px;">';
		cR += '<div class="bg liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor" style="background-color: '+prx.utils.getColor(item.backgroundColor)+'; border-color: '+prx.utils.getColor(item.borderColor)+'; border-width: '+item.thickness+'px;"></div>';
		cR += '<div class="diagonal diagonal1 liveUpdate-borderColor" style="border-color: '+prx.utils.getColor(item.borderColor)+'; width: '+_width+'px; -moz-transform: rotate('+_angle1+'deg); -webkit-transform: rotate('+_angle1+'deg); -o-transform: rotate('+_angle1+'deg); transform: rotate('+_angle1+'deg);  border-top-width: '+item.thickness+'px; left: '+item.thickness/2+'px;"></div>'
		cR += '<div class="diagonal diagonal2 liveUpdate-borderColor" style="border-color: '+prx.utils.getColor(item.borderColor)+'; width: '+_width+'px; -moz-transform: rotate(-'+_angle1+'deg); -webkit-transform: rotate(-'+_angle1+'deg); -o-transform: rotate(-'+_angle1+'deg); transform: rotate(-'+_angle1+'deg); border-top-width: '+item.thickness+'px; right: '+item.thickness/2+'px;"></div>'
		//if(item.text != "") {
			cR += '<div class="contents"><span class="liveUpdate-backgroundColor changeProperty-backgroundColor liveUpdate-textColor" style="text-align: '+item.textAlign+'; font-size: '+item.textSize+'px; background-color: '+prx.utils.getColor(item.backgroundColor)+'; color: '+prx.utils.getColor(item.textColor)+';"><span data-editableproperty="text">' + item.text + '</span></span></div>';
		//}
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var _real = prx.componentsHelper.getRealDims(item);
		var _realh = _real.height;
		var _realw = _real.width;

		var _width = Math.sqrt(Math.pow(_realw,2) + Math.pow(_realh,2)) - item.thickness;
		var _angle1 = 90 - Math.atan((_realw-item.thickness*2)/(_realh-item.thickness*2)) * (180/Math.PI);

		$('#' + _id + ' .diagonal1')
			.width(_width)
			.css('-moz-transform', 'rotate(' + _angle1 + 'deg)')
			.css('-webkit-transform', 'rotate(' + _angle1 + 'deg)')
			.css('-o-transform', 'rotate(' + _angle1 + 'deg)')
			.css('transform', 'rotate(' + _angle1 + 'deg)');
		$('#' + _id + ' .diagonal2')
			.width(_width)
			.css('-moz-transform', 'rotate(-' + _angle1 + 'deg)')
			.css('-webkit-transform', 'rotate(-' + _angle1 + 'deg)')
			.css('-o-transform', 'rotate(-' + _angle1 + 'deg)')
			.css('transform', 'rotate(-' + _angle1 + 'deg)');

	}
	,interactions: [
		prx.commonproperties.actions
	]
	,editableProperties: [
		{
	    	caption: 'Text'
	    	,name: 'text'
	    	,type: 'textarea'
	    	,value: function(item,name) {
	    		return item.text;
	    	}
	    	,changeProperty: {
				caption: 'Text',
				property: 'text',
				selector: '.liveUpdate-textColor',
				transitionable: false
			 }
	    }
	]
	,propertyGroups: [
	    {
	    	caption: 'Style',
	    	properties: [
		    	[
		    		prx.commonproperties.backgroundColor
		    	,
				    {
				    	caption: 'Border'
				    	,name: 'thickness'
				    	,proptype: 'border-width'
				    	,type: 'combo-select'
				    	,value: function(item,name) {
				    		return item.thickness
				    	}
				    	,values: prx.comps.onetoten
				    	,changeProperty: {
							caption: 'Border Width',
							rerender: true
						 }
				    }
		    		,prx.commonproperties.borderColor
		    	],
		    	[
		    		{
		    			caption: 'Text',
		    			name: 'textSize',
		    			proptype: 'font-size',
		    			type: 'combo-select',
		    			value: function(item,name) { return item.textSize; },
		    			values: prx.comps.textsize
		    			,changeProperty: {
							caption: 'Text Size',
							selector: '.liveUpdate-textColor',
							property: 'font-size',
							transitionable: true
						 }
		    		}

		    		,{
		    			caption: false,
		    			name: 'textColor',
		    			proptype: 'font-color',
		    			type: 'colorpicker',
		    			value: function(item,name) {
		    				if(typeof(item.textColor) == "undefined") {
		    					return item.borderColor;
		    				}
		    				return item.textColor;
		    			},
		    			liveUpdate: 'color'
		    			,changeProperty: {
							caption: 'Text Color',
							selector: '.liveUpdate-textColor',
							property: 'color',
							transitionable: true
						 }
		    		}
		    	]
	    	]
	    }

	]
}

//TYPE: WEBVIEW
prx.types.webview = {
	name: 'webview'
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(typeof(item.scrollable) == "undefined") {
			item.scrollable = false;
		}

		var cR = '';

		cR += '<div id="' + _id + '" class="box pos type-webview">';
		cR += '<div style="overflow: hidden; height: 100%; width: 100%;">';
		if(!prx.editor && prx.iosmobilebrowser) {
		cR += '<div class="webview-scroll-wrapper">';
		}
		cR += '<iframe src='+item.url+' scrolling='+((item.scrollable) ? '"yes"' : '"no"') +' style="border: none; width: 100%; height: 100%;"></iframe>';
		if(!prx.editor && prx.iosmobilebrowser) {
		cR += '</div>';
		}
		cR += '</div>';
		cR += '</div>';

		return cR;
	}
	,propertyGroups: [
		{
			caption: 'Properties',
			properties: [
	             [
				      {
					    	caption: 'URL'
					    	,name: 'url'
					    	,type: 'input'
					    	,value: function(item,name) {
					    		return item.url;
					    	}
				      		,help: 'Works only with https:// URLS, but it will work for http:// if you use Export to HTML'
						    ,changeProperty: {
								caption: 'URL',
								rerender: true
							 }
					    }
			      ],
			      [
		              {
							caption: 'Scrollable?'
							,name: 'scrollable'
							,type: 'onoff'
							,value: function(item,name) {
								if(typeof(item.scrollable)=="undefined") {
									return false;
								}
								return item.scrollable;
							}
							,changeProperty: {
				        		caption: 'Scrollable',
				        		rerender: true
				        	}
		              }
	              ]
			]
		}
	]
}

//TYPE: HTML
prx.types.html = {
	name: 'html'
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-html"></div>';
		return cR;
	}
	,afterDisplay: function(item, containerid, pageid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var iframe = new prx.componentsHelper.IFrame($('#'+_id).get(0));
		iframe.doc.body.style.margin = "0px";
	    var div = iframe.doc.createElement("div");
	    div.innerHTML = item.html;
	    iframe.doc.body.appendChild(div);
	}
	,propertyGroups: [
		{
			caption: 'HTML Code',
			properties: [[
		      	{
			    	caption: false
			    	,name: 'html'
			    	,type: 'html-textarea'
			    	,value: function(item,name) {
			    		return item.html;
			    	}
			    	,changeProperty: {
						caption: 'HTML code',
						rerender: true,
						changeable: true
					 }
			    }
			 ]]
		}
	]
};

//TYPE: AUDIO
prx.types.audio = {
	name: 'audio'
		,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-audio">';
		cR += '<audio '+ ((item.controls) ? 'controls' : '') +' '+ ((item.preload) ? 'preload' : '') +' '+ ((item.autoplay) ? 'autoplay' : '') +'>';
		if(item.audioFileMP3.fileId != '') cR += '<source src="'+prx.componentsHelper.getAssetUrl(item.audioFileMP3)+'" type="audio/mpeg" />';
		if(item.audioFileOGG.fileId != '') cR += '<source src="'+prx.componentsHelper.getAssetUrl(item.audioFileOGG)+'" type="audio/ogg" />';
		if(item.audioFileWAV.fileId != '') cR += '<source src="'+prx.componentsHelper.getAssetUrl(item.audioFileWAV)+'" type="audio/x-wav" />';
		if(item.audioFileAAC.fileId != '') cR += '<source src="'+prx.componentsHelper.getAssetUrl(item.audioFileAAC)+'" type="audio/x-m4a" />';
		cR += '</audio>';
		cR += '</div>';
		return cR;
	}
	,propertyGroups: [
		{
			caption: 'Audio properties',
			properties: [[
				{
					caption: 'Audio file MP3'
					,name: 'audioFileMP3'
					,type: 'asset'
					,displayValue: function(item,name) {
						if(item.audioFileMP3.fileId == '') {
							return 'No asset selected.';
						}
						return item.audioFileMP3.name;
					}
					,value: function(item,name) {
						return $.toJSON({
							allow: 'audio',
							asset: item.audioFileMP3
						});
					}
					,changeProperty: {
						rerender: true
					 }
				}],
				[{
					caption: 'Audio file OGG (.oga)'
					,name: 'audioFileOGG'
					,type: 'asset'
					,displayValue: function(item,name) {
						if(item.audioFileOGG.fileId == '') {
							return 'No asset selected.';
						}
						return item.audioFileOGG.name;
					}
					,value: function(item,name) {
						return $.toJSON({
							allow: 'audio',
							asset: item.audioFileOGG
						});
					}
					,changeProperty: {
						rerender: true
					 }
				}],
				[{
			    	caption: 'Audio file WAV'
			    	,name: 'audioFileWAV'
			    	,type: 'asset'
					,displayValue: function(item,name) {
						if(item.audioFileWAV.fileId == '') {
							return 'No asset selected.';
						}
						return item.audioFileWAV.name;
					}
					,value: function(item,name) {
						return $.toJSON({
							allow: 'audio',
							asset: item.audioFileWAV
						});
					}
					,changeProperty: {
						rerender: true
					 }
			    }],
			    [{
			    	caption: 'Audio file AAC'
			    	,name: 'audioFileAAC'
			    	,type: 'asset'
					,displayValue: function(item,name) {
						if(item.audioFileAAC.fileId == '') {
							return 'No asset selected.';
						}
						return item.audioFileAAC.name;
					}
					,value: function(item,name) {
						return $.toJSON({
							allow: 'audio',
							asset: item.audioFileAAC
						});
					}
					,changeProperty: {
						rerender: true
					 }
			    }],
			    [
			    {
			    	caption: 'Preload audio'
			    	,name: 'preload'
			    	,type: 'onoff'
			    	,value: function(item,name){
			    		return item.preload;
			    	}
			    	,changeProperty: {
						rerender: true
					 }
			    }
			    ,
			    {
			    	caption: 'Autoplay'
			    	,name: 'autoplay'
			    	,type: 'onoff'
			    	,value: function(item,name){
			    		return item.autoplay;
			    	}
			    	,changeProperty: {
						rerender: true
					 }
			    },
			    {
			    	caption: 'Display controls'
			    	,name: 'controls'
			    	,type: 'onoff'
			    	,value: function(item,name){
			    		return item.controls;
			    	}
			    	,changeProperty: {
						rerender: true
					}
			    }]
			    ]
		}
   ]
};

//TYPE: VIDEO
prx.types.video = {
	name: 'video'
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		if(typeof(item.vimeoid)=="undefined") { item.vimeoid = '' }
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-video '+item.videoType+'">';
		switch(item.videoType) {
		case 'html5':
			cR += '<video id="'+_id+'-html5video" class="html5" width="100%" height="100%" '+ ((item.controls) ? 'controls' : '') + ((item.placeholder.fileId != '') ? ' poster='+prx.componentsHelper.getAssetUrl(item.placeholder) : '' )+' '+ ((!item.preload || prx.editor) ? 'preload="none"' : '') +' '+ ((item.autoplay) ? 'autoplay' : '') +' webkit-playsinline>';
			if(item.videoFileMP4.fileId != '') cR += '<source src="'+prx.componentsHelper.getAssetUrl(item.videoFileMP4)+'" type="video/mp4" />';
			if(item.videoFileWEBM.fileId != '') cR += '<source src="'+prx.componentsHelper.getAssetUrl(item.videoFileWEBM)+'" type="video/webm" />';
			if(item.videoFileOGG.fileId != '') cR += '<source src="'+prx.componentsHelper.getAssetUrl(item.videoFileOGG)+'" type="video/ogg" />';
			cR += '</video>';
			break;
		case 'youtube':
			if(prx.editor && $.browser.chrome) {
				cR += '<object width="100%" height="100%"><param name="movie" value="//www.youtube.com/v/'+item.youtubeid+'?version=3&amp;hl=en_GB"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="//www.youtube.com/v/'+item.youtubeid+'?version=3&amp;hl=en_GB" type="application/x-shockwave-flash" width="100%" height="100%" allowscriptaccess="always" allowfullscreen="true"></embed></object>'
			} else {
				cR += '<iframe id="'+_id+'-youtube"   width="100%" height="100%" src="https://www.youtube.com/embed/'+item.youtubeid+'?enablejsapi=1&html5=1&wmode=transparent&playsinline=1'+((item.autoplay && !prx.editor) ? '&autoplay=1' : '')+((!item.controls) ? '&controls=0' : '')+'" frameborder="0"  webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
			}
			break;
		case 'vimeo':
			if(prx.editor && $.browser.chrome) {
				cR += '<object width="100%" height="100%"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="https://vimeo.com/moogaloop.swf?clip_id='+item.vimeoid+'&amp;force_embed=1&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=1&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" /><embed src="https://vimeo.com/moogaloop.swf?clip_id='+item.vimeoid+'&amp;force_embed=1&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=1&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%"></embed></object>'
			} else {
				cR += '<iframe id="'+_id+'-vimeo"  width="100%" height="100%" src="https://player.vimeo.com/video/'+item.vimeoid+'?title=0&amp;byline=0&amp;portrait=0&wmode=transparent'+((item.autoplay && !prx.editor) ? '&autoplay=1' : '')+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
			}
			break;
		}
		cR += '</div>';
		return cR;
	}
	,afterDisplay: function (item,containerid) { 
		if(!prx.editor){
			var _id = (!containerid) ? item.id : containerid+'-'+item.id;
			if(item.videoType=="youtube"){
				prx.youtube.createVideo(_id+'-youtube');
			}
		}
	}
//if not editor new youtube save to array prx.actions.players
	/*,afterDisplay: function(item,containerid) {
		if(prx.editor && $.browser.mozilla) {
			var _id = (!containerid) ? item.id : containerid+'-'+item.id;
			$('<div class="iframe-fix" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; pointer-events: auto;"><img style="pointer-events: auto;" src="data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" width="100%" height="100%" /></div>')
				.appendTo('#'+_id)
				.click(function(){
					$('#'+_id).click();
					return false;
				})
		}
	}*/
	,propertyGroups: [
		{
			caption: 'Video properties',
			properties: [[
		      {
		    	  	caption: 'Video type'
		    		,name: 'videoType'
		    		,type: 'select'
		    		,value: function(item,name){
		    	  		return item.videoType;
		      		}
		      		,values: [{ displayValue: 'HTML5 video', value: 'html5' }, { displayValue: 'YouTube video', value: 'youtube' }, { displayValue: 'Vimeo video', value: 'vimeo' }]
		      		,onChange: function(item){
		      			//if(item.videoType == 'youtube') {
		      			switch(item.videoType) {
		      			case 'youtube':
		  					$('#property-videoFileMP4, #property-videoFileOGG, #property-videoFileWEBM, #property-placeholder, #property-removePlaceholder, #property-preload, #property-vimeoid').hide();
							$('#property-youtubeid, #property-controls').show();
							break;
		      			case 'vimeo':
		      				$('#property-videoFileMP4, #property-videoFileOGG, #property-videoFileWEBM, #property-placeholder, #property-removePlaceholder, #property-preload, #property-youtubeid, #property-controls').hide();
							$('#property-vimeoid').show();
		      				break;
		      			case 'html5':
							$('#property-videoFileMP4, #property-videoFileOGG, #property-videoFileWEBM, #property-placeholder, #property-removePlaceholder, #property-preload, #property-controls').show();
							$('#property-youtubeid, #property-vimeoid').hide();
							break;
		      			}
		  				return false;
		      		}
		      		,changeProperty: {
						rerender: true,
						changeable: false
					}
		      }],
                [{
                    caption: 'YouTube Video ID'
                    , name: 'youtubeid'
                    , type: 'input'
                    , value: function (item, name) {
                        return item.youtubeid;
                    }
                    , hiddenByDefault: function (item) {
                        return !(item.videoType == 'youtube');
                    }
                    , onChange: function (item) {

                        if (item.videoType == 'youtube') {
                            //var result = item.youtubeid.match("v=([a-zA-Z0-9]+)&?");
                            //Youtube regex: credits to http://stackoverflow.com/questions/2964678/jquery-youtube-url-validation-with-regex
                            var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
                            var result = (item.youtubeid.match(p)) ? RegExp.$1 : false;
                            if (result) {
                                item.youtubeid = result;
                                return item;
                            }
                        }
                    },changeProperty: {
                        rerender: true
                    }
                }],
                [{
			    	caption: 'Vimeo Video ID'
			    	,name: 'vimeoid'
			    	,type: 'input'
			    	,value: function(item,name) {
			    		return item.vimeoid;
			    	}
			    	,hiddenByDefault: function(item) {
			    		return !(item.videoType == 'vimeo');
			    	}
                    ,onChange: function (item) {

                        if (item.videoType == 'vimeo') {
                            //Credits to http://jsbin.com/asuqic/184/edit?js,output for regex
                            var vimeo_Reg = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
                            var match = item.vimeoid.match(vimeo_Reg);
                            if (match) {
                                item.vimeoid = match[3]
                                return item;
                            }
                        }
                    },changeProperty: {
						rerender: true
					}
			    }],
		      	[{
			    	caption: 'MP4 Video file'
			    	,name: 'videoFileMP4'
			    	,type: 'asset'
					,displayValue: function(item,name) {
						if(item.videoFileMP4.fileId == '') {
							return 'No asset selected.';
						}
						return item.videoFileMP4.name;
					}
					,value: function(item,name) {
						return $.toJSON({
							allow: 'video',
							asset: item.videoFileMP4
						});
					}
			    	,hiddenByDefault: function(item) {
			    		return !(item.videoType == 'html5');
			    	}
			    	,changeProperty: {
						rerender: true
					}
			    }],
			    [{
			    	caption: 'WebM Video file'
			    	,name: 'videoFileWEBM'
			    	,type: 'asset'
					,displayValue: function(item,name) {
						if(item.videoFileWEBM.fileId == '') {
							return 'No asset selected.';
						}
						return item.videoFileWEBM.name;
					}
					,value: function(item,name) {
						return $.toJSON({
							allow: 'video',
							asset: item.videoFileWEBM
						});
					}
			    	,hiddenByDefault: function(item) {
			    		return !(item.videoType == 'html5');
			    	}
			    	,changeProperty: {
						rerender: true
					}
			    }],
			    [{
			    	caption: 'OGG Video file (.ogv)'
			    	,name: 'videoFileOGG'
			    	,type: 'asset'
					,displayValue: function(item,name) {
						if(item.videoFileOGG.fileId == '') {
							return 'No asset selected.';
						}
						return item.videoFileOGG.name;
					}
					,value: function(item,name) {
						return $.toJSON({
							allow: 'video',
							asset: item.videoFileOGG
						});
					}
			    	,hiddenByDefault: function(item) {
			    		return !(item.videoType == 'html5');
			    	}
			    	,changeProperty: {
						rerender: true
					}
			    }],
			     [{
			    	caption: 'Placeholder image'
			    	,name: 'placeholder'
			    	,type: 'combo-asset'
					,displayValue: function(item,name) {
						if(item.placeholder.fileId == '') {
							return 'No asset selected.';
						}
						return item.placeholder.name;
					}
					,value: function(item,name) {
						return $.toJSON({
							allow: 'image',
							asset: item.placeholder
						});
					}
			    	,hiddenByDefault: function(item) {
			    		return !(item.videoType == 'html5');
			    	}
			    	,changeProperty: {
						rerender: true
					}
			    }],
			    [
			    {
			    	caption: 'Preload video'
			    	,name: 'preload'
			    	,type: 'onoff'
			    	,value: function(item,name){
			    		return item.preload;
			    	}
			    	,hiddenByDefault: function(item) {
			    		return !(item.videoType == 'html5');
			    	}
			    	,changeProperty: {
						rerender: true
					}
			    },
			    {
			    	caption: 'Autoplay'
			    	,name: 'autoplay'
			    	,type: 'onoff'
			    	,value: function(item,name){
			    		return item.autoplay;
			    	}
			    	,changeProperty: {
						rerender: true
					}
			    },
			    {
			    	caption: 'Display controls'
			    	,name: 'controls'
			    	,type: 'onoff'
			    	,value: function(item,name){
			    		return item.controls;
			    	}
			    	,hiddenByDefault: function(item) {
			    		return (item.videoType == 'vimeo');
			    	}
			    	,changeProperty: {
						rerender: true
					}
			    }]
			    ]
		}
   ]
};

prx.types.animationtarget = {
	name: 'animationtarget'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item,symbol);
		var cR = '<div id="'+_id+'" class="pos box type-animationtarget '+((typeof(item.fixPositioning) != "undefined" && item.fixPositioning) ? 'type-animatiotarget-fixed-positioning' : '')+'">'
		cR += '<div class="animationtarget-circle"></div>'
		cR += '<div class="animationtarget-horizontal"></div>'
		cR += '<div class="animationtarget-vertical"></div>'
		cR += '</div>';
		return cR;
	}
}

//TYPE: tooltip
prx.types.tooltip = {
	name: "tooltip"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _height, _width, _pos, _margin;
		var _dims = prx.componentsHelper.getRealDims(item,symbol);

		var _ttBg = item.backgroundColor;
		if(_ttBg == 'none') { _ttBg = item.borderColor; }

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		switch (item.ttDirection) {
		case 'top':
		case 'bottom':
			_width = '100%';
			_height = parseInt(_dims.height) - (12*prx.componentsHelper.getScale(item.lib)) + 'px';
			_margin = (9*prx.componentsHelper.getScale(item.lib))+'px 0 '+(9*prx.componentsHelper.getScale(item.lib))+'px -'+(7*prx.componentsHelper.getScale(item.lib))+'px'
			_pos = 'width: '+(25*prx.componentsHelper.getScale(item.lib))+'px; height: '+((12*prx.componentsHelper.getScale(item.lib)) + parseInt(item.borderWidth))+'px; left: '+eval((_dims.width * item.ttPosition/100) - ((25*prx.componentsHelper.getScale(item.lib)) * item.ttPosition/100))+'px;';
			break;
		case 'left':
		case 'right':
			_height = '100%';
			_width = parseInt(_dims.width) - (12*prx.componentsHelper.getScale(item.lib)) + 'px';
			_margin = '-'+(7*prx.componentsHelper.getScale(item.lib))+'px '+(9*prx.componentsHelper.getScale(item.lib))+'px 0';
			_pos = 'width: '+((12*prx.componentsHelper.getScale(item.lib)) + parseInt(item.borderWidth))+'px; height: '+(25*prx.componentsHelper.getScale(item.lib))+'px; top: '+eval((_dims.width * item.ttPosition/100) - ((25*prx.componentsHelper.getScale(item.lib)) * item.ttPosition/100))+'px;';
			break;
		case 'none':
			_height = '100%';
			_width = '100%';
			_margin: '0';
			_pos = 'width: 0px; height: 0px';
			break;
		}


		var cR = '<div id="'+_id+'" class="box pos type-tooltip">'

		cR += '<style>'
		cR += '#'+_id+' .tooltip-content-outer { padding-'+item.ttDirection+': '+(12*prx.componentsHelper.getScale(item.lib))+'px; }'
		cR += '#'+_id+' .tooltip-content { border-radius: '+item.borderRadius+'px; border: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; background-color: '+prx.utils.getColor(item.backgroundColor)+'; }'
		cR += '#'+_id+' .tooltip-text { '+_props+' '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; text-align: '+item.textAlign+'; color: '+prx.utils.getColor(item.textColor)+'; }'
		cR += '#'+_id+' .tooltip-outer { '+item.ttDirection+': 0; '+_pos+' }'
		cR += '#'+_id+' .tooltip { background: '+prx.utils.getColor(_ttBg)+'; '+item.ttDirection+': 0; border: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; margin: '+_margin+'; }'
		cR += '</style>'

		cR += '<div class="tooltip-content-outer">';
		cR += '<div class="tooltip-content liveUpdate-borderColor liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius">';
		cR += '<div class="tooltip-text liveUpdate-textColor changeProperty-textColor changeProperty-textFont"> <span data-editableproperty="text">'+item.text+'</span></div>'
		cR += '</div>';
		cR += '</div>';
		cR += '<div class="tooltip-outer">';
		cR += '<div class="tooltip liveUpdate-borderColor liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-borderColor"></div>'
		cR += '</div>'
		cR += '</div>';

		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var _height, _height2, _width;
		var _dims = prx.componentsHelper.getRealDims(item);

		switch (item.ttDirection) {
		case 'top':
		case 'bottom':
			_width = '100%';
			_height = eval(_dims.height - (12*prx.componentsHelper.getScale(item.lib))) + 'px';
			$("#" + _id + " .tooltip-outer").first().css("left", eval((_dims.width * item.ttPosition/100) - ((25*prx.componentsHelper.getScale(item.lib)) * item.ttPosition/100)) + 'px')
			break;
		case 'left':
		case 'right':
			_height = '100%';
			_width = eval(_dims.width - (12*prx.componentsHelper.getScale(item.lib))) + 'px';
			$("#" + _id + " .tooltip-outer").first().css("top", eval((_dims.height * item.ttPosition/100) - ((25*prx.componentsHelper.getScale(item.lib)) * item.ttPosition/100)) + 'px')
			break;
		case 'none':
			_height = '100%';
			_width = '100%';
			break;
		}
	}
	,interactions: [
		prx.commonproperties.actions
	]
	,editableProperties: [
		{
			caption: 'Text',
			name: 'text',
			type: 'textarea',
			value: function(item,name) { return item.text; },
			changeProperty: {
				property: 'text',
				selector: '.tooltip-text',
				transitionable: false
			}
		 }
	]
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					{
						caption: 'Tooltip '
						,name: 'ttDirection'
						,type: 'select'
						,value: function(item,name) {
							return item.ttDirection;
						}
						,values: [{ value: 'top', displayValue: 'Top' }, { value: 'bottom', displayValue: 'Bottom' }, { value: 'left', displayValue: 'Left' }, { value: 'right', displayValue: 'Right' }, { value: 'none', displayValue: 'No tooltip' }]
						,changeProperty: {
							caption: 'Tooltip direction',
							rerender: true
						}
					},
			       	{
			  			caption: false
			  			,name: 'ttPosition'
			  			,type: 'combo-select'
			  			,value: function(item,name) {
			    			return item.ttPosition;
			    		}
						,values: { min: 0, max: 100, step: 5 }
						,changeProperty: {
							caption: 'Tooltip position',
							rerender: true
						}
					}
				]
				,[
					prx.commonproperties.backgroundColor
				]
				,[
					{
						caption: 'Border',
						name: 'borderWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) { return item.borderWidth; },
						values: { min: 0, max: 10, step: 1 }
						,changeProperty: {
							caption: 'BorderWidth',
							rerender: true
						}
					}
			     	,prx.commonproperties.borderColor
			       	,prx.commonproperties.borderRadius
			    ]
			]
		},
		{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.textColor
				],[
					prx.commonproperties.textProperties
					,prx.commonproperties.textAlign
				]
			]
		}
    ]

};


/***** /BASIC COMPONENTS *****/

/***** TOOLBAR COMPONENTS *****/
//TYPE: BASIC TABBAR
prx.types.basic_tabbar = {
	name: 'basic_tabbar'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item,symbol);
		if(typeof(item.overlay) == "undefined") { item.overlay = false; }
		if(typeof(item.changeActive) == "undefined") { item.changeActive = true; }

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var activebg = item.activeBackgroundColor
		if(activebg == 'as-inactive') { activebg = "rgba(0,0,0,0)"; } // patenta gia ios7

		var cR = '<div id="'+_id+'" class="pos box type-basic-tabbar type-basic-tabbar-icon-'+item.iconpos+'" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';
		var _tabWidth = Math.floor((_dims.width - item.borderWidth*(item.tabs.length-1))/item.tabs.length);

		cR += '<style>';
		cR += '#'+_id+' ul { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }'
		cR += '#'+_id+' li { width: '+_tabWidth+'px; border-left: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; }'
		cR += '#'+_id+' label .caption { color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' '+_props+'; font-size: '+item.textSize+'px; }'
		cR += '#'+_id+' input:checked + label { background-color: '+prx.utils.getColor(activebg)+'; }'
		cR += '#'+_id+' input:checked + label .caption { color: '+prx.utils.getColor(item.activeTextColor)+'; }'
		if(item.maskEnabled && $.browser.webkit) {
			cR += '#'+_id+' .icon { background-color: '+prx.utils.getColor(item.maskInactive)+'; -webkit-mask-size: auto '+(item.iconSize * 20)+'%; }'
			cR += '#'+_id+' input:checked + label .icon { background-color: '+prx.utils.getColor(item.maskActive)+' }'
		}
		switch (item.iconpos) {
			case 'top':
				cR += '#'+_id+' .caption { line-height: '+parseInt(_dims.height*0.25)+'px; }';
				break;
			case '':
				cR += '#'+_id+' .caption { line-height: '+_dims.height+'px; }';
				break;
			default: break;
		}
		cR += '</style>';

		cR += '<ul class="liveUpdate-backgroundColor changeProperty-backgroundColor">';
		$.each(item.tabs, function(i,elm){
			if(typeof(elm.linkedscreen) == "undefined") { elm.linkedscreen = -1; }
			cR += '<li id="'+_id+'-tabs-'+i+'" class="dynamic-property liveUpdate-borderColor changeProperty-borderColor" data-dynamic-property-index="'+i+'" '+((elm.linkedscreen != -1) ? 'data-linked-screen="'+elm.linkedscreen+'"' : '')+'>'
			cR += '<input type="radio" name="'+_id+'-radio-input" id="'+_id+'-radio-'+i+'" '+((item.activeTab == i) ? 'checked' : '')+((!item.changeActive) ? ' disabled ' : '')+' data-role="none">'
			cR += '<label for="'+_id+'-radio-'+i+'" '+((item.activeTab == i) ? 'class="liveUpdate-activeBackgroundColor"' : '')+' >'
			if(item.iconpos != "") {
				cR += '<style>'
				if(item.maskEnabled && $.browser.webkit) {
					cR += '#'+_id+' label[for='+_id+'-radio-'+i+'] .icon, #'+_id+' label[for='+_id+'-radio-'+i+'-overlay] .icon { -webkit-mask-image: url('+prx.componentsHelper.getAssetUrl(elm.icon)+'); }'
				} else {
					cR += '#'+_id+' label[for='+_id+'-radio-'+i+'] .icon, #'+_id+' label[for='+_id+'-radio-'+i+'-overlay] .icon { background-image: url('+prx.componentsHelper.getAssetUrl(elm.icon)+'); background-size: auto '+(item.iconSize * 20)+'%; }'
					if(!item.maskEnabled && elm.activeicon.fileId != '' && prx.componentsHelper.getAssetUrl(elm.activeicon) != prx.componentsHelper.getAssetUrl(elm.icon) &&  prx.componentsHelper.getAssetUrl(elm.activeicon) != '') {
						cR += '#'+_id+' input:checked + label[for='+_id+'-radio-'+i+'] .icon, #'+_id+' input:checked + label[for='+_id+'-radio-'+i+'-overlay] .icon { background-image: url('+prx.componentsHelper.getAssetUrl(elm.activeicon)+'); background-size: auto '+(item.iconSize * 20)+'%; }'
					}
				}
				cR += '</style>'
				cR += '<div class="icon '+ ((item.maskEnabled && $.browser.webkit) ? ((item.activeTab == i) ? 'liveUpdate-maskActive' : 'liveUpdate-maskInactive') : '') +'"></div>';
			}
			if(item.iconpos != "notext") {
				cR += '<span class="caption '+((item.activeTab == i) ? 'liveUpdate-activeTextColor' : 'liveUpdate-textColor') + '"><span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+elm.text+'</span></span>'
			}
			cR += '</li>'
		});
		cR += '</ul></div>'
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item);
		var _tabWidth = Math.floor((_dims.width - item.borderWidth*(item.tabs.length-(1*prx.componentsHelper.getScale(item.lib))))/item.tabs.length);
		switch (item.iconpos) {
			case 'top':
				$('#'+_id+' .caption').css('line-height', parseInt(_dims.height*0.25)+'px')
				break;
			case '':
				$('#'+_id+' .caption').css('line-height', _dims.height+'px')
				break;
			default: break;
		}

		$('#'+_id+' li').width(_tabWidth);
	}
	,afterDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		if(!prx.editor) {
			$('#' + _id + ' [data-linked-screen]').each(function(){
				var screenId = $(this).attr('data-linked-screen');

				if(prx.stc.screens.getIndexFromId(screenId) != -1) {
					var guid = prx.utils.getGuid();
					var action = {
						title: 'Go to screen "'+prx.pages[prx.stc.screens.getIndexFromId(screenId)].title+'"',
						type: "tap",
						actionId: "go-to-page",
						pageId: screenId,
						animation: "none",
						delay: "0",
						callback: false,
						guid: guid,
						bindTo: '#' + $(this).attr('id')

					};

					action = prx.actions.recursivelyAddInfo(action, action.bindTo, containerid, containerid+ '', '.protoio-actions-afterdisplay')
					prx.actions.build(action);

				}
			});
		}
	}
	,propertyGroups: [
					{
						caption: 'Style',
						properties: [[
              				prx.commonproperties.backgroundColor
              				,{
			      				caption: 'Active'
			      				,name: 'activeBackgroundColor'
			      				,proptype: 'background-color-2-active'
			      				,type: 'colorpicker'
			      				,value: function(item, name){
			      					return item.activeBackgroundColor;
			      				}
              				 	,liveUpdate: 'background-color'
              				 	,changeProperty: {
		      						caption: 'Active background color',
		      						selector: 'input:checked + label',
		      						property: 'background-color',
		      						transitionable: true
		      					 }
			      			}],
			      			[
              					{
              						caption: 'Border',
              						name: 'borderWidth',
              						proptype: 'border-width',
              						type: 'combo-select',
              						value: function(item,name) { return item.borderWidth; },
              						values: { min: 0, max: 20, step: 1 },
              						changeProperty: {
              							caption: 'Border width',
              							rerender: true
									}
              					}
              					,prx.commonproperties.borderColor
              				]
              			]
              		},
              		{
              			caption: 'Text',
              			properties: [[
			              {
			            	  caption: false,
			            	  name: 'textFont',
			            	  proptype: 'font-family',
			            	  type: 'select',
			            	  value: function(item,name) { return item.textFont; },
			            	  values:function() { return prx.comps.fonts; },
			            	  hiddenByDefault: function(item) { return (item.iconpos == "notext"); }
			            	  ,changeProperty: {
	      						caption: 'Text font',
	      						selector: 'label .caption',
	      						property: 'font-family',
	      						transitionable: false
	      					  }
			              }
			              ,{
			            	  caption: false,
			            	  name: 'textSize',
			            	  proptype: 'font-size',
			            	  type: 'combo-select',
			            	  value: function(item,name) { return item.textSize; },
			            	  values: prx.comps.textsize,
			            	  hiddenByDefault: function(item) { return (item.iconpos == "notext"); }
			            	  ,changeProperty: {
	      						caption: 'Text size',
	      						selector: 'label .caption',
	      						property: 'font-size',
	      						transitionable: true
	      					  }
			              }
			              ,{
			            	  caption: false,
			            	  name: 'textColor',
			            	  proptype: 'font-color',
			            	  type: 'colorpicker',
			            	  value: function(item,name) { return item.textColor; } ,
			                  hiddenByDefault: function(item) { return (item.iconpos == "notext"); }
			            	  ,liveUpdate: 'color'
			            	  ,changeProperty: {
	      						caption: 'Text color',
	      						selector: 'input:not(:checked) + label .caption',
	      						property: 'color',
	      						transitionable: true
	      					  }
			              }]
			              ,[{
			            	  caption: false,
			            	  name: 'textProperties',
			            	  proptype: 'text-properties',
			            	  type: 'checkbox',
			            	  value: function(item,name) { if(typeof(item.textProperties) == "undefined") {item.textProperties = [];} return item.textProperties; },
			            	  values: [{ value: 'bold', displayValue: '<b style="font-family: Georgia">B</b>'}, { value: 'italic', displayValue: '<i style="font-family: Georgia">I</i>'}, { value: 'underline', displayValue: '<u style="font-family: Georgia">U</u>'}],
			     	          hiddenByDefault: function(item) { return (item.iconpos == "notext"); }
			     	          ,changeProperty: {
	      						caption: 'Text properties',
	      						rerender: true
	      					  }
			   	           }
			      			,{
			      				caption: 'Active'
			      				,name: 'activeTextColor'
			      				,proptype: 'font-color-2-active'
			      				,type: 'colorpicker'
			      				,value: function(item, name){
			      					return item.activeTextColor;
			      				}
			      				,hiddenByDefault: function(item) { return (item.iconpos == "notext"); }
			      				,liveUpdate: 'color'
			      				,changeProperty: {
		      						caption: 'Active text color',
		      						selector: 'input:checked + label .caption',
		      						property: 'color',
		      						transitionable: true
		      					  }
			      			}]
			      		]
			      	},
			      	{
			      		caption: 'Icons',
			      		properties: [[
			            	{
			        			caption: false
			        			,name: 'iconpos'
			        			,type: 'select'
			        			,value: function(item,name) {
				      				return item.iconpos;
				            		}
				      			,values: [{value: '',displayValue: 'No icon'},{value: 'top',displayValue: 'Top'},{value: 'notext',displayValue: 'Icon only (no text)'}]
				      		    ,onChange: function(item){
				      				if(item.iconpos == '') {
				      					$('[id=property-icon], [id=property-activeicon], #property-iconSize, #property-maskEnabled, #property-maskInactive, #property-maskActive').hide();
				      				} else {
				      					$('[id=property-icon], [id=property-activeicon], #property-iconSize, #property-maskEnabled, #property-maskInactive, #property-maskActive').show();
				      				}
				      				if(item.iconpos == 'notext') {
				      					$('[id=property-text], #property-textSize, #property-textFont, #property-textColor, #property-textProperties, #property-activeTextColor').hide();
				      				} else {
				      					$('[id=property-text], #property-textSize, #property-textFont, #property-textColor, #property-textProperties, #property-activeTextColor').show();
				      				}
				      				return false;
				      			}
				      			,changeProperty: {
		      						caption: 'Icon position',
		      						rerender: true
		      					}
			            	}
				      		,
				      		{
				      			caption: false
				      			,name: 'iconSize'
				      			,proptype: 'icon-size'
				      			,type: 'select'
				      			,value: function(item,name) {
				      				return item.iconSize;
				      			}
				      			,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
				      			,hiddenByDefault: function(item,name){
				      				return (item.iconpos == '');
				      			}
				      			,changeProperty: {
		      						caption: 'Icon size',
		      						rerender: true
		      					}
				      		}]
				      		,
				      		[{
				      			caption: 'Mask'
				      			,name: 'maskEnabled'
				      			,type: 'onoff'
				      			,value: function(item,name) { return item.maskEnabled; }
					      		,hiddenByDefault: function(item,name){
				      				return (item.iconpos == '');
				      			}
					      		,onChange: function(item) {
				      				if(item.maskEnabled) {
				      					$('#property-maskInactive, #property-maskActive').show();
				      					$('[id=property-activeicon]').hide();
				      				} else {
				      					$('#property-maskInactive, #property-maskActive').hide();
				      					$('[id=property-activeicon]').show();
				      				}
				      			}
				      			,changeProperty: {
		      						caption: 'Mask icons',
		      						rerender: true
		      					}
				      		}
				      		,
				      		{
				      			caption: 'Inactive'
				      			,name: 'maskInactive'
				      			,type: 'colorpicker'
				      			,value: function(item,name) { return item.maskInactive; }
					      		,hiddenByDefault: function(item,name){
				      				return (item.iconpos == '' || !item.maskEnabled);
				      			}
					      		,liveUpdate: 'background-color'
				      			,changeProperty: {
		      						caption: 'Inactive icon mask',
		      						rerender: true
		      					}
				      		}
				      		,
				      		{
				      			caption: 'Active'
				      			,name: 'maskActive'
				      			,type: 'colorpicker'
				      			,value: function(item,name) { return item.maskActive; }
					      		,hiddenByDefault: function(item,name){
				      				return (item.iconpos == '' || !item.maskEnabled);
				      			}
					      		,liveUpdate: 'background-color'
				      			,changeProperty: {
		      						caption: 'Active icon mask',
		      						rerender: true
		      					}
				      		}
				      		]]
				      	}
	      				,
	      				{
	      					caption: 'Advanced',
	      					properties: [[

	  			{
	  	  			caption: 'Active tab'
	  	  			,name: 'activeTab'
	  	  			,type: 'select'
	  	  			,value: function(item,name) {
	  	      			return item.activeTab;
	  	      		}
	  	      		,values: function(item,name) {
	  	      			//var _rA = [];
	  	      			var _rA = [{value: '999',displayValue: 'None'}];
	  	      			for (var n = 0; n < item.tabs.length; n++) {
	  	      				_rA.push({value: n,displayValue: item.tabs[n].text});
	  	      			}
	  	      			return _rA;
	  	      		}

	      			,changeProperty: {
  						caption: 'Active tab',
  						rerender: true
  					}
	  			}]
	      		,
	      		[
	      			{
		  	  			caption: 'Change active state on click'
		  	  			,name: 'changeActive'
		  	  			,type: 'onoff'
		  	  			,value: function(item,name) {
		  	      			return item.changeActive;
		  	      		}
		      			,changeProperty: {
	  						caption: 'Change active state on click',
	  						rerender: true
	  					}
	  				}
	      		]
	  	      	,[{
	  					caption: 'Position fixed on transitions'
	  					,name: 'overlay'
	  					,type: 'onoff'
	  					,value: function(item,name) {
	  						if(typeof(item.overlay)=="undefined") {
	  							return false;
	  						}
	  						return item.overlay;
	  					}

		      			,changeProperty: {
	  						caption: 'Position fixed',
	  						rerender: true
	  					}
	  	      	}]
	  	      	]
	  	      	}
           ]
           ,dynamicProperties: {
       		data: 'tabs'
       		,propertyCaption: 'Tabs'
        	,propertyName: 'Tab'
       		,addCaption: 'Add tab'
       		,deleteCaption: 'Delete'
       		,blankItem: {
       			text: 'Label',
       			icon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/94a90bf9a645dba63ad7a41d18f82ea7_333333.svg","color":"383838"},
				activeicon: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/94a90bf9a645dba63ad7a41d18f82ea7_ffffff.svg","color":"ffffff"},
       			actions: []
       		}
       		,captionProperty: 'text'
       		,interactions: [
       			{
      				caption: 'Interactions'
      				,name: 'actions'
      				,type: 'action'
      				,value: function(item,name,index) {
      					if (typeof(item.tabs[index].actions) == "undefined") {
      						item.tabs[index].actions = [];
      					}

      					return item.tabs[index].actions.length;
      				}
      			}
       		]
       		,editableProperties: [
       			{
      				caption: 'Text'
      				,name: 'text'
      				,type: 'input'
      				,value: function(item,name,index) {
      					return item.tabs[index].text;
      				}
      				,hiddenByDefault: function(item,name){
      					return (item.iconpos == 'notext');
      				}
      				,changeProperty: {
  						caption: 'Text',
  						selector: '.caption',
  						property: 'text',
  						transitionable: false
  					 }
      			}
       		]
      		,propertyGroups: [
      			{
      				caption: 'Icon',
      				properties: [[
		      			{
		      				caption: false
		      				,name: 'icon'
		      				,type: 'combo-asset'
		      				,displayValue: function(item,name,index) {
		      					if(item.tabs[index].icon.fileId == '') {
		      						return 'No icon selected';
		      					}
		      					return item.tabs[index].icon.name;
		      				}
		      				,value: function(item,name,index) {
		      					return $.toJSON({
		      						allow: 'image',
		      						asset: item.tabs[index].icon
		      					});
		      				}
		    				,hiddenByDefault: function(item,name,index){
		    					return (item.iconpos == '');
		    				}
			      			,changeProperty: {
		  						caption: 'Icon',
		  						rerender: true
		  					 }
		      			}
		      		]]
		      	},
		      	{
		      		caption: 'Active icon (optional)',
		      		properties: [[
		      			{
		      				caption: false
		      				,name: 'activeicon'
		      				,type: 'combo-asset'
		      				,displayValue: function(item,name,index) {
		      					if(item.tabs[index].activeicon.fileId == '') {
		      						return 'No icon selected';
		      					}
		      					return item.tabs[index].activeicon.name;
		      				}
		      				,value: function(item,name,index) {
		      					return $.toJSON({
		      						allow: 'image',
		      						asset: item.tabs[index].activeicon
		      					});
		      				}
		    				,hiddenByDefault: function(item,name,index){
		    					if(item.iconpos == '') {
		    						return true;
		    					}
		    					return (item.maskEnabled);
		    				}
			      			,changeProperty: {
		  						caption: 'Active icon',
		  						rerender: true
		  					 }
		      			}
		      		]]
		      	},
		      	{
		      		caption: '<span class="property-icon property-quick-interaction"></span>&nbsp;&nbsp;Linked screen (optional)',
		      		properties: [[
		      			{
		      				caption: false
		      				,name: 'linkedscreen'
		      				,type: 'select'
		      				,help: 'Will trigger a "Go to screen" action on Tap, and force active state to this tab when the selected screen is active'
		      				,value: function(item,name,index) {
		      					return item.tabs[index].linkedscreen
		      				}
		      				,values: function(item,name,index) {
		      					var options = [{ displayValue: 'None', value: -1}]
		      					for(var i=0; i<prx.pages.length ; i++) {
		      						options.push({ displayValue: prx.pages[i].title, value: prx.pages[i].id })
		      					}
		      					return options;
		      				}
		    				,changeProperty: {
		  						caption: 'Linked Screen',
		  						rerender: true
		  					 }
		      			}
		      		]]
		      	}
              ]
	}
}

/***** /TOOLBAR COMPONENTS *****/


/***** /FORM COMPONENTS *****/
//TYPE: GENERIC ONOFF SWITCH
prx.types.generic_onoffswitch = {
	name: 'generic_onoffswitch'
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var _active = ''
		if(item.active) {
			_active = 'checked="checked"';
		}

		var cR = '<div id="' + _id + '" class="box pos type-generic-onoffswitch">'

		cR += '<style>';
		cR += '#'+_id+' label { border-radius: '+item.borderRadius+'px;}'
		cR += '#'+_id+' .onoffswitch-inner div { line-height: '+(item.height-(4*prx.componentsHelper.getScale(item.lib)))+'px; }'
		cR += '#'+_id+' .onoffswitch-inner .active { background-color: '+prx.utils.getColor(item.activeLabelColor)+'; color: '+prx.utils.getColor(item.activeLabelTextColor)+'; }'
		cR += '#'+_id+' .onoffswitch-inner .inactive { background-color: '+prx.utils.getColor(item.inactiveLabelColor)+'; color: '+prx.utils.getColor(item.inactiveLabelTextColor)+'; }'
		cR += '#'+_id+' .onoffswitch-switch { background-color: '+prx.utils.getColor(item.switchColor)+'; width: '+item.switchSize+'px; border-radius: '+item.borderRadius+'px; margin: '+((item.height - item.switchSize)/2)+'px; right: '+(item.width-(Number(item.switchSize) + 4 + (item.height - Number(item.switchSize))))+'px; }'
		cR += '</style>'

		cR += '<input type="checkbox" '+_active+ ' id="'+_id+'-onoffswitch" data-role="none" >'
		cR += '<label for="'+_id+'-onoffswitch">'
		cR += '<div class="onoffswitch-inner">'
		cR += '<div class="active">'+item.activeLabelText+'</div>'
		cR += '<div class="inactive">'+item.inactiveLabelText+'</div>'
		cR += '</div>'
		cR += '<div class="onoffswitch-switch"></div>'
		cR += '</label>'
		cR += '</div>'

		return cR;
	}
	,properties: [
	        {
	        	caption: 'Border Radius (px)',
	        	name: 'borderRadius',
	        	proptype: 'border-radius',
	        	type: 'combo-select', value: function(item,name) { return item.borderRadius; },
	        	values: { min: 0, max: 50, step: 1 }
	        },
      		{
      			caption: 'Switch color'
      			,name: 'switchColor'
      			,proptype: 'background-color-3-switch'
      			,type: 'colorpicker'
      			,value: function(item,name) {
      				return item.switchColor;
      			}
      		},
	        {
	        	caption: 'Switch size',
	        	name: 'switchSize',
	        	proptype: 'switch-size',
	        	type: 'combo-select', value: function(item,name) { return item.switchSize; },
	        	values: { min: 5, max: 60, step: 1 }
	        }
      		,
      		{
      			caption: 'Active Label Text'
      			,name: 'activeLabelText'
      			,type: 'input'
      			,value: function(item,name) {
      				return item.activeLabelText;
      			}
      		}
      		,
      		{
      			caption: 'Active Label Color'
      			,name: 'activeLabelColor'
      			,proptype: 'background-color-2-active'
      			,type: 'colorpicker'
      			,value: function(item,name) {
      				return item.activeLabelColor;
      			}
      		}
      		,
      		{
      			caption: 'Active Label Text Color'
      			,name: 'activeLabelTextColor'
      			,proptype: 'font-color-2-active'
      			,type: 'colorpicker'
      			,value: function(item,name) {
      				return item.activeLabelTextColor;
      			}
      		}
      		,
      		{
      			caption: 'Inactive Label Text'
      			,name: 'inactiveLabelText'
      			,type: 'input'
      			,value: function(item,name) {
      				return item.inactiveLabelText;
      			}
      		}
      		,
      		{
      			caption: 'Inactive Label Color'
      			,name: 'inactiveLabelColor'
      			,proptype: 'background-color'
      			,type: 'colorpicker'
      			,value: function(item,name) {
      				return item.inactiveLabelColor;
      			}
      		}
      		,
      		{
      			caption: 'Inactive Label Text Color'
      			,name: 'inactiveLabelTextColor'
      			,proptype: 'font-color'
      			,type: 'colorpicker'
      			,value: function(item,name) {
      				return item.inactiveLabelTextColor;
      			}
      		}
      		,
      		{
      			caption: 'Active'
      			,name: 'active'
      			,type: 'onoff'
      			,value: function(item,name) {
      				return item.active;
      			}
      		}
      		,{
      			caption: 'Interactions on activation',
      			name: 'flipswitchActionsOnActive',
      			type: 'action',
      			value: function(item,name) {
	      			if(typeof(item.flipswitchActionsOnActive) == "undefined") {
	      				item.flipswitchActionsOnActive = [];
	      			}
	      			return item.flipswitchActionsOnActive.length;
      			}
      		}
      		,{
      			caption: 'Interactions on deactivation',
      			name: 'flipswitchActionsOnDeactive',
      			type: 'action',
      			value: function(item,name) {
      				if(typeof(item.flipswitchActionsOnDeactive) == "undefined") {
  						item.flipswitchActionsOnDeactive = [];
      				}
      				return item.flipswitchActionsOnDeactive.length;
      			}
      		}
      	]
}
/***** /FORM COMPONENTS *****/







/************************************* COMPONENTS (OBJECTS) *************************************/

prx.components.shapes = {
	name: 'shapes'
	,type: 'shapes'
	,lib: _library
	,caption: 'Shapes'
	,icon: '-160px 0'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,helper: prx.url.devices+'/common/shapes/helper.png'
	,textFont: 'sans-serif,Helvetica Neue,Arial'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '#383838'
	,textProperties: []
	,textAlign: 'center'
	,text: ''
	,backgroundColor: 'C6C6C6'
	,borderColor: '555555'
	,borderWidth: 0
	,joinType: 'round'
	,typeName: 'star'
	,numOfNodes: 6
	,spikeDepth: 2
	,skew: 30
	,baseWidth: 50
	,actions:[]
}

/***** BASIC COMPONENTS *****/

prx.components.symbol = {
	name: 'symbol'
	,type: 'symbol'
	,lib: _library
	,caption: 'Container'
}

prx.components.text = {
	name: 'text'
	,type: 'text'
	,lib: _library
	,caption: 'Text'
	,icon: '0 0'
	,helper: prx.url.devices+'/common/text/helper.png'
	,text: 'Type something'
	,textFont: 'sans-serif,Helvetica Neue,Arial'
	,textSize: 17*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,backgroundColor:  'none'
	,width: 180*prx.componentsHelper.getScale(_library)
	,height: 40*prx.componentsHelper.getScale(_library)
	,lineHeight: parseInt(1.231*17*prx.componentsHelper.getScale(_library))
	,textProperties: []
	,textAlign: 'left'
	,enableShadow: false
	,autoResize: true
}

prx.components.richtext = {
	name: 'richtext'
	,type: 'richtext'
	,lib: _library
	,caption: 'Rich Text'
	,icon: '-80px 0'
	,helper: prx.url.devices+'/common/richtext/helper.png'
	,text: 'Sample text'
	,width: 200*prx.componentsHelper.getScale(_library)
	,height: 150*prx.componentsHelper.getScale(_library)
}

prx.components.rectangle = {
	name: 'rectangle'
	,type: 'rectangle'
	,lib: _library
	,caption: 'Rectangle'
	,icon: '-160px 0'
	,helper: prx.url.devices+'/common/rectangle/helper.png'
	,backgroundColor: 'C6C6C6'
	,borderWidth: 0
	,borderColor: '555555'
	,borderRadius: 0
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,actions:[]
	,textFont: 'sans-serif,Helvetica Neue,Arial'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '#383838'
	,textProperties: []
	,textAlign: 'center'
	,text: ''
}

prx.components.circle = {
	name: 'circle'
	,type: 'circle'
	,lib: _library
	,caption: 'Circle'
	,icon: '-240px 0'
	,helper: prx.url.devices+'/common/circle/helper.png'
	,backgroundColor: 'C6C6C6'
	,borderWidth: '0'
	,borderColor: '555555'
	,borderRadius: '50%'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,actions:[]
	,textFont: 'sans-serif,Helvetica Neue,Arial'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '#383838'
	,textProperties: []
	,textAlign: 'center'
	,text: ''
}

prx.components.horizontalline = {
	name: 'horizontalline'
	,type: 'horizontalline'
	,lib: _library
	,caption: 'Horizontal line'
	,icon: '-320px 0'
	,helper: prx.url.devices+'/common/horizontalline/helper.png'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 1*prx.componentsHelper.getScale(_library)
	,resizable : true
	,resizeHandles : "e,w"
	,color: prx.comps.defaultcolor
	,weight: 1*prx.componentsHelper.getScale(_library)
	,properties: "v,l,o,hpos,vpos,w,r"
}

prx.components.verticalline = {
	name: 'verticalline'
	,type: 'verticalline'
	,lib: _library
	,caption: 'Vertical line'
	,icon: '-400px 0'
	,helper: prx.url.devices+'/common/verticalline/helper.png'
	,width: 1*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,resizable : true
	,resizeHandles : "n,s"
	,color: prx.comps.defaultcolor
	,weight: 1*prx.componentsHelper.getScale(_library)
	,properties: "v,l,o,hpos,vpos,h,r"
}

prx.components.actionarea = {
	name: 'actionarea'
	,type: 'actionarea'
	,lib: _library
	,caption: 'Interaction Area'
	,icon: '-480px 0'
	,helper: prx.url.devices+'/common/actionarea/helper.png'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
}

prx.components.image = {
	name: 'image'
	,type: 'image'
	,lib: _library
	,caption: 'Image'
	,icon: '-640px 0'
	,helper: prx.url.devices+'/common/image/helper.png'
    , imgSrc: {
        "fileId": "d310bece0e91b91b485ed62166d1fc2e.svg",
        "assetType": "gallery",
        "bucketsource": "main",
        "name": " image_placeholder.svg"
    }
	,repeat: false
    , width: 200 * prx.componentsHelper.getScale(_library)
    , height: 200 * prx.componentsHelper.getScale(_library)
	,propagateEvents: false
	,actions:[]
  	,overlay: false
  	,autoResize: true
  	,aspectratio: true
}

prx.components.icon = {
	name: 'icon'
	,type: 'image'
	,lib: _library
	,caption: 'Icon'
	,icon: '-800px 0'
	,helper: prx.url.devices+'/common/icon/helper.png'
    ,
    imgSrc: {"fileId":"27643c5e28557c84eb62871dfe4455bd.svg","name":"circle-star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/f870b75c7ca176f7edefab7f79b0d24b.svg"}
	,repeat: false
    , width: 100 * prx.componentsHelper.getScale(_library)
    , height: 100 * prx.componentsHelper.getScale(_library)
	,propagateEvents: false
	,actions:[]
  	,overlay: false
  	,aspectratio: true
}


prx.components.placeholder = {
	name: 'placeholder'
	,type: 'placeholder'
	,lib: _library
	,caption: 'Placeholder'
	,icon: '-720px 0'
	,helper: prx.url.devices+'/common/placeholder/helper.png'
	,width: 200*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,text: 'Placeholder'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textAlign: 'center'
	,backgroundColor: 'ffffff'
	,borderColor: '555555'
	,thickness: 5*prx.componentsHelper.getScale(_library)
	,actions:[]
}

prx.components.webview = {
	name: 'webview'
	,type: 'webview'
	,lib: _library
	,caption: 'Web View'
	,icon: '0 -80px'
	,helper: prx.url.devices+'/common/webview/helper.png'
	,url: 'about:blank'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,scrollable: true
}

prx.components.html = {
	name: 'html'
	,type: 'html'
	,lib: _library
	,caption: 'HTML Code'
	,icon: '-80px -80px'
	,helper: prx.url.devices+'/common/html/helper.png'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,html: ''
}

prx.components.audio = {
	name: 'audio'
	,type: 'audio'
	,lib: _library
	,caption: 'Audio'
	,icon: '-240px -80px'
	,helper: prx.url.devices+'/common/audio/helper.png'
	,width: 300
	,height: 65
	,audioFileWAV: { fileId: '', assetType: '', name: '' }
	,audioFileMP3: { fileId: '', assetType: '', name: '' }
	,audioFileOGG: { fileId: '', assetType: '', name: '' }
	,audioFileAAC: { fileId: '', assetType: '', name: '' }
	,controls: true
	,preload: false
	,autoplay: false
}

prx.components.video = {
	name: 'video'
	,type: 'video'
	,lib: _library
	,caption: 'Video'
	,icon: '-160px -80px'
	,helper: prx.url.devices+'/common/video/helper.png'
	,width: 250*prx.componentsHelper.getScale(_library)
	,height: 180*prx.componentsHelper.getScale(_library)
	,videoType: 'html5'
	,videoFileMP4: { fileId: '', assetType: '', name: '' }
	,videoFileOGG: { fileId: '', assetType: '', name: '' }
	,videoFileWEBM: { fileId: '', assetType: '', name: '' }
	,controls: true
	,preload: false
	,autoplay: false
	,placeholder: { fileId: '', assetType: '', name: '' }
	,youtubeid: ''
	,vimeoid: ''
}

prx.components.animationtarget = {
	name: 'animationtarget'
	,type: 'animationtarget'
	,lib: _library
	,caption: 'Animation target'
	,icon: '-560px 0'
	,helper: prx.url.devices+'/common/animationtarget/helper.png'
	,width: 20
	,height: 20
	,resizable : false
	,properties: "v,l,hpos,vpos"
	,fixPositioning: true
}

prx.components.tooltip = {
	name: 'tooltip'
	,type: 'tooltip'
	,lib: _library
	,caption: 'Tooltip'
	,icon: '-320px -80px'
	,helper: prx.url.devices+ '/common/tooltip/helper.png'
	,width: 250*prx.componentsHelper.getScale(_library)
	,height: 150*prx.componentsHelper.getScale(_library)
	,resizable : true
	,borderColor: '555555'
	,backgroundColor: 'ffffff'
	,borderWidth: 3*prx.componentsHelper.getScale(_library)
	,borderRadius: 5*prx.componentsHelper.getScale(_library)
	,ttDirection: 'bottom'
	,ttPosition: '50'
	,text: ''
	,textFont: 'sans-serif,Helvetica Neue,Arial'
	,textSize: 12*prx.componentsHelper.getScale(_library)
	,textColor: '383838'
	,textProperties: []
	,textAlign: 'left'
};

/***** /BASIC COMPONENTS *****/

/***** TOOLBAR COMPONENTS *****/
prx.components.basic_tabbar = {
	name: 'basic_tabbar'
	,type: 'basic_tabbar'
	,lib: _library
	,caption: 'Basic Tabbar'
	,icon: '-560px -80px'
	,helper: prx.url.devices+ '/common/basic_tabbar/helper.png'
	,width:"full"
	,height: 50*prx.componentsHelper.getScale(_library)
	,vpos: "bottom"
	,resizable : true
	,backgroundColor: 'FFFFFF'
	,borderWidth: 0
	,borderColor: 'C6C6C6'
	,textFont: 'sans-serif,Helvetica Neue,Arial'
	,textSize: 10*prx.componentsHelper.getScale(_library)
	,textColor:  '383838'
	,textProperties: ["bold"]
	,iconpos: 'top'
	,iconSize: 3
	,activeBackgroundColor: '005fbf'
	,activeTextColor: 'FFFFFF'
	,maskEnabled: true
	,maskInactive: '383838'
	,maskActive: 'FFFFFF'
	,activeTab: 0
	,overlay: false
	,tabs: [
		{
	    	text: 'Home'
	    	,icon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e6a1ba573190139ceda51280e9fdad9c_333333.svg","color":"383838"}
			,activeicon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e6a1ba573190139ceda51280e9fdad9c_ffffff.svg","color":"ffffff"}
			,actions: []
	    },
		{
	    	text: 'Messages'
	    	,icon: {"fileId":"e55334acc02f524531f172be5348bfd2.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/1b58b288e91e6a4cb64d90433880003d_333333.svg","color":"383838"}
		    ,activeicon: {"fileId":"e55334acc02f524531f172be5348bfd2.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/1b58b288e91e6a4cb64d90433880003d_ffffff.svg","color":"ffffff"}
			,actions: []
		}
    ]
}

prx.components.basic_tabbar_retina = {
	name: 'basic_tabbar_retina'
	,type: 'basic_tabbar'
	,lib: _library
	,caption: 'Basic Tabbar'
	,icon: '-560px -80px'
	,helper: prx.url.devices+ '/common/basic_tabbar_retina/helper.png'
	,width:"full"
	,height: 96*prx.componentsHelper.getScale(_library)
	,vpos: "bottom"
	,resizable : true
	,backgroundColor: 'FFFFFF'
	,borderWidth: 0
	,borderColor: 'C6C6C6'
	,textFont: 'sans-serif,Helvetica Neue,Arial'
	,textSize: 10*prx.componentsHelper.getScale(_library)		//was 21, made 10 as basic tabbar above
	,textColor:  '383838'
	,textProperties: ["bold"]
	,iconpos: 'top'
	,iconSize: 3
	,activeBackgroundColor: '005fbf'
	,activeTextColor: 'FFFFFF'
	,maskEnabled: true
	,maskInactive: '383838'
	,maskActive: 'FFFFFF'
	,activeTab: 0
	,changeActive: true
	,overlay: false
	,tabs: [
		{
	    	text: 'Home'
	    	,icon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e6a1ba573190139ceda51280e9fdad9c_333333.svg","color":"383838"}
			,activeicon: {"fileId":"e4e7dbcddba77b96954aa3602719162c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","targetSrc":"generated/e6a1ba573190139ceda51280e9fdad9c_ffffff.svg","color":"ffffff"}
			,actions: []
	    },
		{
	    	text: 'Messages'
	    	,icon: {"fileId":"e55334acc02f524531f172be5348bfd2.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/1b58b288e91e6a4cb64d90433880003d_333333.svg","color":"383838"}
		    ,activeicon: {"fileId":"e55334acc02f524531f172be5348bfd2.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","targetSrc":"generated/1b58b288e91e6a4cb64d90433880003d_ffffff.svg","color":"ffffff"}
			,actions: []
		}
    ]
}

/***** /TOOLBAR COMPONENTS *****/

/***** FORM COMPONENTS *****/
prx.components.generic_onoffswitch = {
		name: 'generic_onoffswitch'
		,type: 'generic_onoffswitch'
		,lib: _library
		,caption: 'Generic On/Off Switch'
		,icon: '-480px -240px'
		,helper: 'flipswitch/helper.png'
		,width: 90*prx.componentsHelper.getScale(_library)
		,height: 30*prx.componentsHelper.getScale(_library)
		,resizable : true
		,borderRadius: 5*prx.componentsHelper.getScale(_library)
		,switchColor: 'FFFFFF'
		,switchSize: 17*prx.componentsHelper.getScale(_library)
		,activeLabelText: 'ON'
		,activeLabelColor: '6194FD'
		,activeLabelTextColor: 'FFFFFF'
		,inactiveLabelText: 'OFF'
		,inactiveLabelColor: 'FFFFFF'
		,inactiveLabelTextColor: '666666'
		,active: true
		,flipswitchActionsOnActive: []
		,flipswitchActionsOnDeactive: []
	}

/***** /FORM COMPONENTS *****/


/************************************ FUNCTIONS ****************************************/

