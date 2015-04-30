/********************************************************************************************/
/********************************************************************************************/
/******************************            MATERIAL           *******************************/
/********************************************************************************************/
/********************************************************************************************/


var _library = 'material';
var _path = '/material/';

prx.comps.materialColors = [{value: '#F44336',displayValue: '#F44336'},{value: '#E91E63',displayValue: '#E91E63'},{value: '#9C27B0',displayValue: '#9C27B0'},{value: '#673AB7',displayValue: '#673AB7'},{value: '#3F51B5',displayValue: '#3F51B5'},
	                        {value: '#2196F3',displayValue: '#2196F3'},{value: '#00BCD4',displayValue: '#00BCD4'},{value: '#4CAF50',displayValue: '#4CAF50'},{value: '#8BC34A',displayValue: '#8BC34A'},{value: '#CDDC39',displayValue: '#CDDC39'},
	                        {value: '#FFEB3B',displayValue: '#FFEB3B'},{value: '#FFC107',displayValue: '#FFC107'},{value: '#FF9800',displayValue: '#FF9800'},{value: '#FF5722',displayValue: '#FF5722'},{value: '#795548',displayValue: '#795548'},
	                        {value: '#607D8B',displayValue: '#607D8B'},{value: '#000000',displayValue: '#000000'},{value: '#BDBDBD',displayValue: '#BDBDBD'},                       
	                        {value: '#EF5350',displayValue: '#EF5350'},{value: '#EC407A',displayValue: '#EC407A'},{value: '#AB47BC',displayValue: '#AB47BC'},{value: '#7E57C2',displayValue: '#7E57C2'},{value: '#5C6BC0',displayValue: '#5C6BC0'},
	                        {value: '#42A5F5',displayValue: '#42A5F5'},{value: '#26C6DA',displayValue: '#26C6DA'},{value: '#66BB6A',displayValue: '#66BB6A'},{value: '#9CCC65',displayValue: '#9CCC65'},{value: '#D4E157',displayValue: '#D4E157'},
	                        {value: '#FFEE58',displayValue: '#FFEE58'},{value: '#FFCA28',displayValue: '#FFCA28'},{value: '#FFA726',displayValue: '#FFA726'},{value: '#FF7043',displayValue: '#FF7043'},{value: '#8D6E63',displayValue: '#8D6E63'},
	                        {value: '#78909C',displayValue: '#78909C'},{value: '#616161',displayValue: '#616161'},{value: '#EEEEEE',displayValue: '#EEEEEE'},	                        
	                        {value: '#EF9A9A',displayValue: '#EF9A9A'},{value: '#F48FB1',displayValue: '#F48FB1'},{value: '#CE93D8',displayValue: '#CE93D8'},{value: '#B39DDB',displayValue: '#B39DDB'},{value: '#9FA8DA',displayValue: '#9FA8DA'},
	                        {value: '#90CAF9',displayValue: '#90CAF9'},{value: '#80DEEA',displayValue: '#80DEEA'},{value: '#A5D6A7',displayValue: '#A5D6A7'},{value: '#C5E1A5',displayValue: '#C5E1A5'},{value: '#E6EE9C',displayValue: '#E6EE9C'},
	                        {value: '#FFF59D',displayValue: '#FFF59D'},{value: '#FFE082',displayValue: '#FFE082'},{value: '#FFCC80',displayValue: '#FFCC80'},{value: '#FFAB91',displayValue: '#FFAB91'},{value: '#BCAAA4',displayValue: '#BCAAA4'},
	                        {value: '#B0BEC5',displayValue: '#B0BEC5'},{value: '#9E9E9E',displayValue: '#9E9E9E'},{value: '#FFFFFF',displayValue: '#FFFFFF'}]; 

prx.commonproperties.materialBackgroundColor = { caption: 'Background', name: 'backgroundColor', proptype: 'background-color', type: 'combo-colorpicker', value: function(item,name) { return item.backgroundColor; }, values: prx.comps.materialColors, liveUpdate: 'background-color', changeProperty: {caption: 'Background color', selector: '.changeProperty-backgroundColor', property: 'background-color', transitionable: true } }
prx.commonproperties.materialBackgroundColorActive = { caption: 'Active', name: 'backgroundColor', proptype: 'background-color-2-active', type: 'combo-colorpicker', value: function(item,name) { return item.backgroundColorActive; }, values: prx.comps.materialColors, liveUpdate: 'background-color', changeProperty: {caption: 'Active Background color', selector: '.changeProperty-backgroundColorActive', property: 'background-color', transitionable: true } }
prx.commonproperties.materialTextColor = { caption: false, name: 'textColor', proptype: 'font-color', type: 'combo-colorpicker', value: function(item,name) { return item.textColor; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Text color', selector: '.changeProperty-textColor', property: 'color', transitionable: true } }
prx.commonproperties.materialTextColorActive = { caption: false, name: 'textColorActive', proptype: 'font-color-2-active', type: 'combo-colorpicker', value: function(item,name) { return item.textColorActive; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Active Text color', selector: '.changeProperty-textColorActive', property: 'color', transitionable: true } }
prx.commonproperties.materialTextColorSubtitle = { caption: false, name: 'subtitleColor', proptype: 'font-color-3-subtitle', type: 'combo-colorpicker', value: function(item,name) { return item.subtitleColor; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Subtitle color', selector: '.changeProperty-subtitleColor', property: 'color', transitionable: true } }
prx.commonproperties.materialBorderColor = { caption: false, name: 'borderColor', proptype: 'border-color', type: 'combo-colorpicker', value: function(item,name) { return item.borderColor; }, values: prx.comps.materialColors, liveUpdate: 'border-color', changeProperty: { caption: 'Border Color', selector: '.changeProperty-borderColor', property: 'border-color', transitionable: true } }
prx.commonproperties.materialBorderColorActive = { caption: 'Active', name: 'borderColorActive', proptype: 'border-color-2-active', type: 'combo-colorpicker', value: function(item,name) { return item.borderColorActive; }, values: prx.comps.materialColors, liveUpdate: 'border-color', changeProperty: { caption: 'Active Border Color', selector: '.changeProperty-borderColorActive', property: 'border-color', transitionable: true } }
prx.commonproperties.materialIconActiveMask = { caption: 'Active', name: 'iconColorActive', proptype: 'icon-color-active', type: 'combo-colorpicker', value: function(item,name) { return item.iconColorActive; }, values: prx.comps.materialColors, liveUpdate: 'background-color', changeProperty: { caption: 'Active icon color', rerender: true } }
prx.commonproperties.materialShadowColor = { caption: 'Shadow', name: 'shadowColor', proptype: 'shadow-color', type: 'combo-colorpicker', value: function(item,name) { return item.shadowColor; }, values: prx.comps.materialColors, changeProperty: { caption: 'Shadow', rerender: true, changeable: false} }
prx.commonproperties.materialPlaceholderColor = { caption: 'Placeholder Color', name: 'placeholderColor', proptype: 'placeholder-color', type: 'combo-colorpicker', value: function(item,name) { if(typeof(item.placeholderColor)=='undefined') { return '999999'; } return item.placeholderColor; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Placeholder color', selector: '.changeProperty-placeholderColor', property: 'color', transitionable: true } }
prx.commonproperties.materialTextColorLabel = { caption: false, name: 'labelColor', proptype: 'font-color-4-label', type: 'combo-colorpicker', value: function(item,name) { return item.labelColor; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Label color', selector: '.changeProperty-labelColor', property: 'color', transitionable: true } }

prx.commonproperties.materialRipple = {
	caption: "Ripple effect",
	properties: [
         [
				{
					caption: false
					,name: 'rippleEffectType'
					,proptype: 'ripple-effect'
					,type: 'select'
					,value: function(item,name,index) {
						if(item.rippleEffectType === undefined) {
							if(item.rippleEffect == false) { return 'none';}
							
							if(item.rippleEffectColor == 'rgba(0,0,0,0.1)') { return 'dark';}
							if(item.rippleEffectColor == 'rgba(255,255,255,0.1)') { return 'light';}
							return 'custom';
						}
						return item.rippleEffectType;
					}
					,values: [
				          {value: 'dark',displayValue: 'Dark'},
				          {value: 'light',displayValue: 'Light'},
				          {value: 'custom',displayValue: 'Custom'},
				          {value: 'none',displayValue: 'None'}
			        ]
					,onChange: function (item, name) {
						if(item.rippleEffectType == 'none') { item.rippleEffect = false;}
						else { item.rippleEffect = true;}
						
						if(item.rippleEffectType == 'custom') { 
							$('#property-rippleEffectColor').show();
						}
						else { $('#property-rippleEffectColor').hide();}
						
						if(item.rippleEffectType == 'dark') { item.rippleEffectColor = 'rgba(0,0,0,0.1)';}
						else if(item.rippleEffectType == 'light') { item.rippleEffectColor = 'rgba(255,255,255,0.1)';}
					}
					,changeProperty: {  
						caption: 'Ripple Effect type',
						rerender: true,
						changeable: false
					}  
				
				},	
				{
					caption: false,
					name: 'rippleEffectColor',
					type: 'colorpicker',
					value: function (item, name) {
						return item.rippleEffectColor;
					},
					hiddenByDefault: function (item, name) {
						return item.rippleEffectType != 'custom';
					},
					changeProperty: {
						caption: 'Ripple effect color',
						rerender: true
					}
				}
	]]
}

/******************************/
/***** TOOLBAR COMPONENTS *****/
/******************************/

//TYPE: FIXED TABBAR
prx.types.material_tabbar_fixed = {
	name: "material_tabbar_fixed"
	,onDisplay: function(item,containerid,pageid,symbol) {	
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var width = Math.floor(dims.width/item.tabs.length);
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-material-tabbar-fixed" '+((item.overlay) ? 'data-mpoverlay="1"' : '')+'>';
		
		cR += '<style>';	
		if(item.shadowEnabled) {
			cR += '#'+_id+' .material-tabbar-fixed-list { box-shadow: 0 '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(3*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px '+ prx.utils.getColor(item.shadowColor) + '; } ';
		}
		cR += '#' + _id + ' .material-tabbar-fixed-list-item { width: '+width+'px; background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#' + _id + ' .material-tabbar-fixed-list-item label { font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' '+_props+' }';
		cR += '#' + _id + ' .material-tabbar-fixed-list-item-input:checked + label { color: '+prx.utils.getColor(item.textColorActive)+';}';
		if(!prx.editor) {
		cR += '#' + _id + ' .material-tabbar-fixed-indicator { width: '+width+'px; height: '+item.tabIndicatorWidth+'px; left: '+(width * item.selected)+'px; background-color: '+prx.utils.getColor(item.tabIndicatorColor)+ '; }';
		}
		else {
			cR += '#' + _id + ' .material-tabbar-fixed-list-item-input + label { border-bottom: '+item.tabIndicatorWidth+'px solid transparent; }';
			cR += '#' + _id + ' .material-tabbar-fixed-list-item-input:checked + label { border-bottom-color: '+prx.utils.getColor(item.tabIndicatorColor)+'; }';
		}
		cR += '</style>';		
		
		cR += '<ul class="material-tabbar-fixed-list liveUpdate-shadowColor changeProperty-shadowColor">';
		
		$.each(item.tabs, function(i,elm){			
			if(typeof(elm.linkedscreen) == "undefined") { elm.linkedscreen = -1; }
			var cChecked = '';
			
			if (i==item.selected) {
				cChecked = ' checked="checked"';
			}
			
			cR += '<li class="material-tabbar-fixed-list-item liveUpdate-backgroundColor changeProperty-backgroundColor dynamic-property '+((item.rippleEffect) ? 'prx-material-ripple' : '' )+'" data-dynamic-property-index="'+i+'" id="'+_id+'-tabs-'+i+'" '+((elm.linkedscreen != -1) ? 'data-linked-screen="'+elm.linkedscreen+'"' : '')+'>';
			cR += '<input class="material-tabbar-fixed-list-item-input" type="radio" name="'+_id+'-radio" id="'+_id+'-radio-'+i+'"'+cChecked+' data-role="none" '+((!item.changeActive) ? 'disabled' : '')+'/>';
			cR += '<label class="material-tabbar-fixed-list-item-label '+((i==item.selected && prx.editor) ? 'liveUpdate-tabIndicatorColor-border-color changeProperty-tabIndicatorColor-border-color changeProperty-tabIndicatorWidth-border-width ' : '')+''+((i==item.selected) ? 'liveUpdate-textColorActive changeProperty-textColorActive' : 'liveUpdate-textColor changeProperty-textColor')+' changeProperty-textSize changeProperty-textFont" for="'+_id+'-radio-'+i+'"><span data-editableproperty="caption" data-dynamic-property-index="'+i+'">'+elm.caption+'</span></label>';
			cR += '</li>'; 			
		});
		
		cR += '</ul>';
		if(!prx.editor) {
			cR += '<div class="material-tabbar-fixed-indicator liveUpdate-tabIndicatorColor-background-color changeProperty-tabIndicatorColor-background-color changeProperty-tabIndicatorWidth-height"></div>';
		}
		cR += '</div>';		
		return cR;
	}
	,onResize: function(item, containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);
		
		var width = Math.floor(dims.width/item.tabs.length);
		
		$('#'+_id).find('.material-tabbar-fixed-list-item').width(width);
	}
	,afterDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);
		
		var tabs_width = Math.floor(dims.width/item.tabs.length);
		
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
			
			//indicator animation	
			$('#' + _id + ' .material-tabbar-fixed-list-item-input').change( function() {
				var $this = $('#' + _id + ' .material-tabbar-fixed-list-item-input:checked + label');
				var offset = $this.offset().left;
				var width = $this.width();
				var containerOffset = $('#' + _id + ' .material-tabbar-fixed-list').offset().left;
				var centerX = (offset + width / 2) - containerOffset - width/2;
				
				var timeline = new TimelineMax();
				var element = $('#' + _id + ' .material-tabbar-fixed-indicator');
				var elementPos = element.position().left;
				var distance = Math.max(elementPos,centerX) - Math.min(elementPos,centerX);
				
				if( centerX != element.position().left ) {
					
					if( centerX > element.position().left ) {
						timeline.add(TweenLite.to(element, 0.3, {left: parseInt(elementPos), width: parseInt(tabs_width)+parseInt(distance)/2, ease:Expo.easeIn}), 0);
						timeline.add(TweenLite.to(element, 0.2, {left: centerX, width: tabs_width, ease:Expo.easeOut}), 0.4);
					}
					if( centerX < element.position().left ) {
						timeline.add(TweenLite.to(element, 0.3, {left: parseInt(elementPos)-parseInt(tabs_width), width: parseInt(tabs_width)+parseInt(distance)/2, ease:Expo.easeIn}), 0);
						timeline.add(TweenLite.to(element, 0.2, {left: centerX, width: parseInt(tabs_width), ease:Expo.easeOut}), 0.4);
					}
				}
			});
				
		}
	}
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor
				],
				[
					{	
						caption: 'Tab Indicator',
						name: 'tabIndicatorWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) { return item.tabIndicatorWidth; },
						values: { min: 1, max: 15, step: 1 }
						,changeProperty: {
	                		caption: 'Tab indicator thickness',
	                		selector: '.changeProperty-tabIndicatorWidth',
	                		property: 'height,border-width',
	                		transitionable: true
	                	}
					},
					{ 	
						caption: false, 
						name: 'tabIndicatorColor',
						proptype: 'divider-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.tabIndicatorColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'border-color,background-color', 
						changeProperty: { 
							caption: 'Tab indicator color', 
							selector: '.changeProperty-tabIndicatorColor', 
							property: 'border-color,background-color', 
							transitionable: true 
						} 
					}
				],
				[
					{
						caption: 'Shadow?'
						,name: 'shadowEnabled'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.shadowEnabled)=="undefined") {
								return false;
							}
							return item.shadowEnabled;
						}
						,onChange: function(item){
							if(item.shadowEnabled) {
								$('#property-shadowColor').show();
							} else {
								$('#property-shadowColor').hide();
							}	
						}				
						,changeProperty: {
							caption: 'Shadow toggle',
							rerender: true
						}
					},
					{ 
						caption: false, 
						name: 'shadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker',
						value: function(item,name) { 
							return item.shadowColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.shadowEnabled);
						},
						changeProperty: { 
							caption: 'Shadow', 
							rerender: true, 
							changeable: false
						} 
					}
	      		]
			]
		},
		{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
					prx.commonproperties.materialTextColor
				],
				[
					prx.commonproperties.textProperties,
					{ 
						caption: 'Active', 
						name: 'textColorActive', 
						proptype: 'font-color-2-active', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.textColorActive; }, 
						values: prx.comps.materialColors, 
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Active Text color', 
							selector: 'input:checked + label', 
							property: 'color', 
							transitionable: true 
						} 
					}						
				]
			]
		},
		{
			caption: 'Advanced',
			properties: [
			    [
			     	{
					  caption: 'Active tab'
					  ,name: 'selected'
					  ,type: 'select'
					  ,value: function(item,name) {
						  return item.selected;
					  }
					  ,values: function(item,name) {
						  var _rA = [{value: '999',displayValue: 'None'}];
						  for (var n = 0; n < item.tabs.length; n++) {
							  _rA.push({value: n,displayValue: item.tabs[n].caption});
						  }	
						  return _rA;
					  } 
					  ,changeProperty: {
	                		caption: 'Active tab',
	                		rerender: true
	                	}
					}
			    ],
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
		   		],
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
		},
		prx.commonproperties.materialRipple
	]	
	,dynamicProperties: {
		data: 'tabs'
		,propertyCaption: 'Tabs'
  		,propertyName: 'Tab'
		,addCaption: 'Add tab'
		,deleteCaption: 'Delete'
		,blankItem: {
			caption: "TAB TITLE"
			,actions: []
		}
		,captionProperty: 'caption'
		,editableProperties: [
          	{
      			caption: 'Title'
      			,name: 'caption'
      			,type: 'input'
      			,value: function(item,name,index) {
          			return item.tabs[index].caption;
          		}
	          	,changeProperty: {
	        		caption: 'Title',
	        		selector: 'label',
	        		property: 'text',
	        		transitionable: false
	        	}
  			}
         ]
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
		,propertyGroups: [
	      	{
	      		caption: '<span class="property-icon property-quick-interaction"></span>&nbsp;&nbsp;Linked screen (optional)',
	      		properties: [
	      		    [
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
		      		]
	      	    ]
	      	}
	    ]
	}
}

//TYPE: SCROLLABLE TABBAR
prx.types.material_tabbar_scrollable = {
	name: "material_tabbar_scrollable"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var tabs = item.tabs.split("<br />");

		var cR = '';		
		cR += '<div id="'+_id+'" class="box pos type-material-tabbar-scrollable" '+((item.overlay) ? 'data-mpoverlay="1"' : '')+'>';		
		
		cR += '<style>';
		if(item.shadowEnabled) {
			cR += '#'+_id+' .material-tabbar-scrollable-inner { box-shadow: 0 '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(3*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px '+ prx.utils.getColor(item.shadowColor) + '; } ';
		}
		cR += '#' + _id + ' .material-tabbar-scrollable-inner { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#' + _id + ' .material-tabbar-scrollable-list-item { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#' + _id + ' .material-tabbar-scrollable-list-item label { font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' '+_props+' }';
		cR += '#' + _id + ' .material-tabbar-scrollable-list-item-input:checked + label { color: '+prx.utils.getColor(item.textColorActive)+';}';
		if(!prx.editor) {
			cR += '#' + _id + ' .material-tabbar-scrollable-indicator { height: '+item.tabIndicatorWidth+'px; background-color: '+prx.utils.getColor(item.tabIndicatorColor)+ '; }';
		} else {
			cR += '#' + _id + ' .material-tabbar-scrollable-list-item-input + label { border-bottom: '+item.tabIndicatorWidth+'px solid transparent; }';
			cR += '#' + _id + ' .material-tabbar-scrollable-list-item-input:checked + label { border-bottom-color: '+prx.utils.getColor(item.tabIndicatorColor)+ '; }';
		}
		cR += '</style>';	
			
			
		cR += '<div class="material-tabbar-scrollable-inner liveUpdate-backgroundColor changeProperty-backgroundColor" id="' + _id + '-inner">';
		cR += '<ul class="material-tabbar-scrollable-list liveUpdate-shadowColor changeProperty-shadowColor">';
		
		$.each(tabs, function(i,elm){
			var cChecked = '';			
			if (i==item.selected) {
				cChecked = ' checked="checked"';
			}
			
			cR += '<li class="material-tabbar-scrollable-list-item liveUpdate-backgroundColor changeProperty-backgroundColor" dynamic-property '+((item.rippleEffect) ? 'prx-material-ripple' : '' )+'" data-dynamic-property-index="'+i+'" id="'+_id+'-tabs-'+i+'">';
			cR += '<input class="material-tabbar-scrollable-list-item-input" type="radio" name="'+_id+'-radio" id="'+_id+'-radio-'+i+'"'+cChecked+' data-role="none" value="'+i+'"/>';
			cR += '<label class="material-tabbar-scrollable-list-item-label '+((i==item.selected) ? 'liveUpdate-tabIndicatorColor-border-color changeProperty-tabIndicatorColor-border-color changeProperty-tabIndicatorWidth-border-width ' : '')+''+((i==item.selected) ? 'liveUpdate-textColorActive changeProperty-textColorActive' : 'liveUpdate-textColor changeProperty-textColor')+' changeProperty-textSize changeProperty-textFont" for="'+_id+'-radio-'+i+'"><span data-editableproperty="caption" data-dynamic-property-index="'+i+'">'+elm+'</span></label>';
			cR += '</li>'; 		
		});
		
		cR += '</ul>';
		if(!prx.editor) {
			cR += '<div class="material-tabbar-scrollable-indicator liveUpdate-tabIndicatorColor-background-color changeProperty-tabIndicatorColor-background-color changeProperty-tabIndicatorWidth-height"></div>';
		}
		cR += '</div>';
		cR += '</div>';
		return cR;
	
	}
	,afterDisplay: function(item,containerid) {

		if(!prx.editor) {
			prx.scrollable.materialIniTabbar(item, containerid)
		} else {
			var _id = (!containerid) ? item.id : containerid+'-'+item.id;
			var dims = prx.componentsHelper.getRealDims(item);

			var pos = $('#'+_id+'-tabs-' + item.selected).position().left / prx.zoom._zoom;
			var width = $('#'+_id+'-tabs-' + item.selected).width();
			var outerwidth = dims.width;
			var targetpos = (outerwidth-width)/2;
			var targetleft = pos - targetpos;
			if(targetleft < 0) {
				return;
			}

			if(targetleft - 60*prx.componentsHelper.getScale(item.lib) > $('#' + _id + ' ul').width() - outerwidth) {
				targetleft = $('#' + _id + ' ul').width() - outerwidth + 60*prx.componentsHelper.getScale(item.lib);
			}

			$('#'+_id+' ul').css({
				'left': '-' +targetleft + 'px',
				'position': 'absolute'
			})
		}
	}
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor
				],
				[
					{	
						caption: 'Tab Indicator',
						name: 'tabIndicatorWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) { return item.tabIndicatorWidth; },
						values: { min: 1, max: 15, step: 1 }
						,changeProperty: {
							caption: 'Tab indicator thickness',
							selector: '.changeProperty-tabIndicatorWidth',
							property: 'height,border-width',
							transitionable: true
						}
					},
					{ 	
						caption: false, 
						name: 'tabIndicatorColor',
						proptype: 'divider-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.tabIndicatorColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'border-color,background-color', 
						changeProperty: { 
							caption: 'Tab indicator color', 
							selector: '.changeProperty-tabIndicatorColor', 
							property: 'border-color,background-color', 
							transitionable: true 
						} 
					}					
				],
				[
					{
						caption: 'Shadow?'
						,name: 'shadowEnabled'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.shadowEnabled)=="undefined") {
								return false;
							}
							return item.shadowEnabled;
						}
						,onChange: function(item){
							if(item.shadowEnabled) {
								$('#property-shadowColor').show();
							} else {
								$('#property-shadowColor').hide();
							}	
						}				
						,changeProperty: {
							caption: 'Shadow toggle',
							rerender: true
						}
					},
					{ 
						caption: false, 
						name: 'shadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker',
						value: function(item,name) { 
							return item.shadowColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.shadowEnabled);
						},
						changeProperty: { 
							caption: 'Shadow', 
							rerender: true, 
							changeable: false
						} 
					}
	      		]
			]
		}
		,{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
					prx.commonproperties.materialTextColor
				],
				[
					prx.commonproperties.textProperties,
					{ 
						caption: 'Active', 
						name: 'textColorActive', 
						proptype: 'font-color-2-active', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.textColorActive; }, 
						values: prx.comps.materialColors, 
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Active Text color', 
							selector: 'input:checked + label', 
							property: 'color', 
							transitionable: true 
						} 
					}							
				]
			]
		},{
			caption: 'Data',
			properties: [
				[
					{
						caption: 'Tabs (Separated by line breaks)'
						,name: 'tabs'
						,type: 'textarea'
						,value: function(item,name) {
							return item.tabs;
						}
						,onChange: function(item,name) {
							var _options = item.tabs.split("<br />");

							var cR = '';

							var _values = [{displayValue: 'None', value: -1}];
							for(var i = 0; i < _options.length; i++) {
								cR += '<option value="'+i+'" '+((item.selectedValue == i) ? 'selected' : '')+'>'+_options[i]+'</option>'
							}

							$('#property-selected select').html(cR);
						}
						,changeProperty: {
							caption: 'Tabs',
							rerender: true
						}
					}
				],[
					{
						caption: 'Linked container'
						,name: 'linkedContainer'
						,type: 'select'
						,value: function(item,name) {
							//debugger;
							return item.linkedContainer;
						}
						,values: function(){
							var _rA = [{value: -1, displayValue: 'Select a container'}];
							for(var i=0; i<prx.data.items.length; i++) {
								if(prx.data.items[i].type == "symbol") {
									_rA.push({value: prx.data.items[i].id,displayValue: prx.data.items[i].caption});
								}
							}

							return _rA;
						}
						,changeProperty: {
							caption: 'Linked container',
							rerender: true
						}
					}
				]
			]
		},
		{
			caption: 'Advanced',
			properties: [
			    [
			     	{
					  caption: 'Active tab'
					  ,name: 'selected'
					  ,type: 'select'
					  ,value: function(item,name) {
						  return item.selected;
					  }
					  ,values: function(item,name) {
				        var _values = [];
				        var _options = item.tabs.split("<br />");
				        for(var i = 0; i < _options.length; i++) {
					        _values.push({
						        displayValue: _options[i],
						        value: i
					        });
				        }
				        return _values;
					  } 
					  ,changeProperty: {
	                		caption: 'Active tab',
	                		rerender: true
	                	}
					}
			    ],
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
		},
		prx.commonproperties.materialRipple
	]
}


//TYPE: SEGMENTED BUTTON TABBAR
prx.types.material_tabbar_segmented_button = {
	name: "material_tabbar_segmented_button"
	,onDisplay: function(item,containerid,pageid,symbol) {	
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var width = Math.floor(dims.width/item.tabs.length);
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-material-tabbar-button" '+((item.overlay) ? 'data-mpoverlay="1"' : '')+'>';
		
		cR += '<style>';	
		if(item.shadowEnabled) {
			cR += '#'+_id+' .material-tabbar-button-list { box-shadow: 0 '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(3*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px '+ prx.utils.getColor(item.shadowColor) + '; } ';
		}
		cR += '#' + _id + ' .material-tabbar-button-list-item { width: '+width+'px; height: '+dims.height+'px; background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#' + _id + ' input:checked + label { background-color: '+prx.utils.getColor(item.backgroundColorActive)+'; }';
		cR += '</style>';		
		
		cR += '<ul class="material-tabbar-button-list liveUpdate-shadowColor changeProperty-shadowColor">';
		
		$.each(item.tabs, function(i,elm){			
			if(typeof(elm.linkedscreen) == "undefined") { elm.linkedscreen = -1; }
			var cChecked = '';
			
			if (i==item.selected) {
				cChecked = ' checked="checked"';
			}
			
			cR += '<style>';
			if( elm.imgSrc.url != '' ) {
				cR += '#' + _id + '-tabs-'+i+' .material-tabbar-button-list-item-icon { width: '+dims.height+'px; height: '+dims.height+'px; background-image: url('+prx.componentsHelper.getAssetUrl(elm.imgSrc)+'); background-size: '+(item.iconSize*20)+'% auto; -webkit-mask-size: '+(item.iconSize*20)+'% auto; }';
				if( $.browser.webkit ) {
					cR += '#' + _id + '-tabs-'+i+' .material-tabbar-button-list-item-input:checked + label .material-tabbar-button-list-item-icon { background-image: none; -webkit-mask-image: url('+prx.componentsHelper.getAssetUrl(elm.imgSrc)+'); background-color: '+prx.utils.getColor(item.iconColorActive)+'; }';
				}
			}
			cR += '</style>';
			
			cR += '<li class="material-tabbar-button-list-item liveUpdate-backgroundColor liveUpdate-backgroundColorActive changeProperty-backgroundColor changeProperty-backgroundColorActive dynamic-property '+((item.rippleEffect) ? 'prx-material-ripple' : '' )+'" data-dynamic-property-index="'+i+'" id="'+_id+'-tabs-'+i+'" '+((elm.linkedscreen != -1) ? 'data-linked-screen="'+elm.linkedscreen+'"' : '')+'>';
			cR += '<input class="material-tabbar-button-list-item-input" type="radio" name="'+_id+'-radio" id="'+_id+'-radio-'+i+'"'+cChecked+' data-role="none" '+((!item.changeActive) ? 'disabled' : '')+'/>';
			cR += '<label class="material-tabbar-button-list-item-icon-wrapper" for="'+_id+'-radio-'+i+'"><span class="material-tabbar-button-list-item-icon liveUpdate-iconActiveMask"></span></label>';
			cR += '</li>'; 			
		});
		
		cR += '</ul>';
		cR += '</div>';		
		return cR;
	}
	,onResize: function(item, containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);
		
		var width = Math.floor(dims.width/item.tabs.length);
		
		$('#'+_id).find('.material-tabbar-button-list-item').width(width);
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
			properties: [
				[
					prx.commonproperties.materialBackgroundColor,
					{ 
						caption: 'Active', 
						name: 'backgroundColorActive', 
						proptype: 'background-color-2-active', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.backgroundColorActive; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Active Background color', 
							selector: 'input:checked + label', 
							property: 'background-color', 
							transitionable: true 							
						} 
					}
				],
				[
					{
						caption: 'Shadow?'
						,name: 'shadowEnabled'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.shadowEnabled)=="undefined") {
								return false;
							}
							return item.shadowEnabled;
						}
						,onChange: function(item){
							if(item.shadowEnabled) {
								$('#property-shadowColor').show();
							} else {
								$('#property-shadowColor').hide();
							}	
						}				
						,changeProperty: {
							caption: 'Shadow toggle',
							rerender: true
						}
					},
					{ 
						caption: false, 
						name: 'shadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker',
						value: function(item,name) { 
							return item.shadowColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.shadowEnabled);
						},
						changeProperty: { 
							caption: 'Shadow', 
							rerender: true, 
							changeable: false
						} 
					}
	      		]
			]
		},
		{
			caption: 'Advanced',
			properties: [
			    [
			     	{
					  caption: 'Active tab'
					  ,name: 'selected'
					  ,type: 'select'
					  ,value: function(item,name) {
						  return item.selected;
					  }
					  ,values: function(item,name) {
						  var _rA = [{value: '999',displayValue: 'None'}];
						  for (var n = 0; n < item.tabs.length; n++) {
							  _rA.push({value: n,displayValue: item.tabs[n].caption});
						  }	
						  return _rA;
					  } 
					  ,changeProperty: {
	                		caption: 'Active tab',
	                		rerender: true
	                	}
					}
			    ],
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
		   		],
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
		},
		{
   		    caption: 'Icon',
   		    properties: [
   		        [
   		         	prx.commonproperties.iconSize
				],
				[
				 	{ 
				 		caption: 'Active', 
				 		name: 'iconColorActive', 
				 		proptype: 'icon-color-active', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.iconColorActive; 
				 		}, 
				 		values: prx.comps.materialColors,
				 		liveUpdate: 'background-color', 
				 		changeProperty: { 
				 			caption: 'Active icon color', 
				 			rerender: true 
				 		}
				 	}
				]
   			]
   		},
		prx.commonproperties.materialRipple
	]	
	,dynamicProperties: {
		data: 'tabs'
		,propertyCaption: 'Tabs'
  		,propertyName: 'Tab'
		,addCaption: 'Add tab'
		,deleteCaption: 'Delete'
		,blankItem: {
			caption: false
			,imgSrc: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
			,actions: []
		}
		,captionProperty: 'caption'
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
		,propertyGroups: [
  			{ 
  				caption: 'Icon',
  				properties: [
  				    [
  				         prx.commonproperties.iconSourceTabs
  				    ]
  				]
  			},
	      	{
	      		caption: '<span class="property-icon property-quick-interaction"></span>&nbsp;&nbsp;Linked screen (optional)',
	      		properties: [
	      		    [
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
		      		]
	      	    ]
	      	}
	    ]
	}
}


/*****************************/
/***** BUTTON COMPONENTS *****/
/*****************************/

// TYPE: BUTTON
prx.types.material_button_raised = {
	name: "material_button_raised"
	,onDisplay: function(item,containerid,pageid,symbol) {		

		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var isround = (item.name == 'material_button_action') || (item.name == 'material_button_icon');
		var hasshadow = (item.name == 'material_button_action') || (item.name == 'material_button_raised');
		var hastext = (item.name == 'material_button_flat') || (item.name == 'material_button_raised');
				
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		var cR = '';		
		cR += '<div id="'+_id+'" class="box pos type-material-button '+((isround) ? 'button-round' : '') +'">';
		
		cR += '<style>';
		cR += '#' + _id + ' .material-button-container { background: '+prx.utils.getColor(item.backgroundColor)+'; }';
		if( hastext ) {
		cR += '#' + _id + ' .material-button-container { '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' '+_props+' color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px; }';
		}
		else {
			if(item.imgSrc.url != '') {
			cR += '#' + _id + ' .material-button-icon { background-image: url('+prx.componentsHelper.getAssetUrl(item.imgSrc)+'); }';
			}
		}
		cR += '</style>';
		
		cR += '<div class="material-button-container '+((hasshadow)? 'waves-float ' : '')+'liveUpdate-backgroundColor liveUpdate-textColor changeProperty-backgroundColor changeProperty-textColor changeProperty-textFont changeProperty-textSize">';

		if( hastext ) {
			cR += '<span data-editableproperty="text" class="changeProperty-text">' + item.text + '</span>';
		} else {
			if(item.imgSrc.url != '') {
				cR += '<div class="material-button-icon"></div>';
			}
		}
		if(item.rippleEffect) {
			cR += '<div class="material-button-ripple-container prx-material-ripple"></div>';
		}
		cR += '</div>'
		cR += '</div>';
		return cR;
	}
	,interactions:[
		prx.commonproperties.actions
	]
	,editableProperties: [
	    prx.commonproperties.text       
	]
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor,
					{ 
				 		caption: 'Shadow', 
				 		name: 'shadowColor', 
				 		proptype: 'shadow-color',
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.shadowColor; 
				 		}, 
				 		values: prx.comps.materialColors,
				 		hiddenByDefault: function(item) {
							return !(item.name == 'material_button_action' && item.name == 'material_button_raised') || (item.name == 'material_button_icon');
						},
				 		changeProperty: { 
	                		caption: 'Shadow',
	                		rerender: true,
	                		changeable: false
				 		} 
				 	}
				]
			]
		},
		{
			caption: 'Text',
			properties: [
				[
					{ 
						caption: false, 
						name: 'textFont', 
						proptype: 'font-family',
						type: 'select', 
						value: function(item,name) { return item.textFont; }, 
						values: function(){ return prx.comps.fonts }
						,hiddenByDefault: function(item) {
							return (item.name == 'material_button_action') || (item.name == 'material_button_icon');
						}
						,changeProperty: {
	                		caption: 'Text Font',
	                		selector: '.changeProperty-textFont',
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
						values: prx.comps.textsize
						,hiddenByDefault: function(item) {
							return (item.name == 'material_button_action') || (item.name == 'material_button_icon');
						}
						,changeProperty: {
	                		caption: 'Text size',
	                		selector: '.changeProperty-textSize',
	                		property: 'font-size',
	                		transitionable: true
	                	}
					}
					,{ 
						caption: false, 
						name: 'textColor', 
						proptype: 'font-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.textColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (item.name == 'material_button_action') || (item.name == 'material_button_icon');
						},
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Text color', 
							selector: '.changeProperty-textColor', 
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
				   		values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}] 
				   		,hiddenByDefault: function(item) {
							return (item.name == 'material_button_action') || (item.name == 'material_button_icon');
						}
				   		,changeProperty: {
	                		caption: 'Text properties',
	                		rerender: true
	                	}
				   	}
				]
			]
		},
		{
   		    caption: 'Icon',
   		    properties: [
   		        [
   					{ 
 						caption: false,
 						name: 'imgSrc', 
 						proptype: 'icon-source',
 						type: 'combo-asset', 
 						displayValue: function(item,name) {
 							if(item.imgSrc.url == '') {
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
 						,hiddenByDefault: function(item) {
							return !(item.name == 'material_button_action' || item.name == 'material_button_icon');
						}
 						,changeProperty: {
 	                		caption: 'Icon',
 	                		rerender: true
 	                	}
 					}
   				]
   			]
   		},
		prx.commonproperties.materialRipple
	]
	
};

//TYPE: ACTION OVERFLOW
prx.types.material_actionoverflow = {
	name: "material_actionoverflow"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var cR = '<div id="' + _id + '" class="pos box type-material-actionoverflow prx-material-ripple">';

		cR += '<style>'
		cR += '#'+_id+' .actionOverflow .AO { width: '+Math.round(dims.height * 0.075)+'px; height: '+Math.round(dims.height * 0.075)+'px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+'; }';	
		cR += '</style>'

		if(item.rippleEffect) {
			cR += '<div class="prx-material-ripple-roundoverflow" />';
		}

		cR += '<div class="actionOverflow">'
		cR += '<div class="AO AO1 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor"></div>'
		cR += '<div class="AO AO2 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor"></div>'
		cR += '<div class="AO AO3 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor"></div>'
		cR += '</div>'

		cR += '</div>'
		return cR;
	}
	,onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		$('#'+_id).find('.AO').width(Math.round(dims.height * 0.075)).height(Math.round(dims.height * 0.075));
	}
	,interactions:
		[
			prx.commonproperties.actions
		]
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					{
						caption: 'Color'
						,name: 'actionOverflowColor'
						,proptype: 'background-color'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.actionOverflowColor;
						}
						,values: prx.comps.materialColors 
						,liveUpdate: 'background-color'
						,changeProperty: {
							caption: 'Action Overflow color',
							property: 'background-color',
							selector: '.changeProperty-actionOverflowColor',
							transitionable: true
						}
					}
				]
			]
		},
		prx.commonproperties.materialRipple
	]
}

//TYPE: MORPHING ICONS
prx.types.material_morphing_lines = {
	name: "material_morphing_lines"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);	

		var _check = '';
		var _active = "";

		if(typeof(item.initialState) != "undefined" && item.initialState == 'icon') { item.active = true; }
		if(item.active === true || item.active == "true") { _active = 'checked="checked"';}

		var morphClass = '';
		if(item.itemtype == "lines-close") morphClass= 'x';
		else if(item.itemtype == "lines-arrow") morphClass= 'arrow-left';
				
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-material-morphing-lines">';
				
		cR += '<style>'
		if(prx.editor) { 
			cR += '#' + _id + ' label, #' + _id + ' .lines {  transition: none; }';
		}
		cR += '#' + _id + ' .lines:not(.lines-before):not(.lines-after) { width: '+Math.round(dims.width*0.33)+'px; height: '+Math.round(dims.height/22)+'px; }';
		cR += '#' + _id + ' .lines  { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#' + _id + ' input:checked + label .lines { background-color: '+prx.utils.getColor(item.backgroundColorActive)+'; }';
		cR += '</style>'


		if(item.rippleEffect) {
			cR += '<div class="prx-material-ripple-roundoverflow" />';
		}

		cR += '<input type="checkbox" id="'+_id+'-checkbox" '+_active+' style="display: none;" data-role="none" />';
		cR += '<label for="'+_id+'-checkbox" class="morph-label lines-button '+morphClass+'">';
		cR += '<span class="lines liveUpdate-backgroundColor'+((item.active === true || item.active == "true") ? 'Active' : '') +' changeProperty-backgroundColor">';
		cR += '<span class="lines lines-before liveUpdate-backgroundColor'+((item.active === true || item.active == "true") ? 'Active' : '') +' changeProperty-backgroundColor"></span>';
		cR += '<span class="lines lines-after liveUpdate-backgroundColor'+((item.active === true || item.active == "true") ? 'Active' : '') +' changeProperty-backgroundColor"></span>';
		cR += '</span>';
		cR += '</label>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);	
				
		$('#' + _id + ' .lines').not('.lines-before').not('.lines-after').css({
			'width': Math.round(dims.width*0.33)+'px',
			'height': Math.round(dims.height/22)+'px'
		});
	}
	,afterDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+'-checkbox').change(function(){
				if(typeof(prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']) == "undefined") { prx.variables._triggerData['input:checked[id='+_id+'-checkbox]'] = {}; }        					
		        prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']['checkboxchange'] = { state: $(this).is(':checked') };
		        if(typeof(prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']) == "undefined") { prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {}; }        					
		        prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})
		}
	}
	,interactions: [
		{
			caption: 'Interactions on change',
			name: 'actions',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			changeProperty: {
				caption: 'Interactions on change',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{
			caption: 'Interactions on Hamburger',
			name: 'checkboxActionsOnActive', 
			type: 'action',
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnActive) == "undefined") {
					item.checkboxActionsOnActive = [];
				}
				return item.checkboxActionsOnActive.length; 
			}, 
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		},
		{
			caption: 'Interactions on Action icon',
			name: 'checkboxActionsOnDeactive',
			type: 'action',
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnDeactive) == "undefined") {
					item.checkboxActionsOnDeactive = [];
				}
				return item.checkboxActionsOnDeactive.length;
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange']
	}
	,propertyGroups: [			
		{
			caption: 'Style',
	    	properties: [
				[
				 	{ 
						caption: 'Hamburger Menu', 
						name: 'backgroundColor', 
						proptype: 'background-color', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.backgroundColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Lines color', 
							selector: 'input:not(:checked) + label .changeProperty-backgroundColor',
							property: 'background-color',
							transitionable: true
						} 
					}
				],
				[
				 	{ 
				 		caption: 'Action Icon', 
				 		name: 'backgroundColorActive', 
				 		proptype: 'background-color-2-active', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.backgroundColorActive; 
				 		}, 
				 		values: prx.comps.materialColors, 
				 		liveUpdate: 'background-color', 
				 		changeProperty: {
				 			caption: 'Icon color', 
				 			selector: 'input:checked + label .changeProperty-backgroundColor',
				 			property: 'background-color',
				 			transitionable: true
				 		} 
				 	}
				]				
			]
		},
		{
			caption: 'Initial state',
			properties: [
				[
					{
						caption: false
						,name: 'active'
						,type: 'select'
						,value: function(item,name,index) {
							if(typeof(item.initialState) != "undefined") {
								item.active = item.initialState == 'lines' ? false : true;
							}
							if(typeof(item.active) == "undefined") {
								item.active = false
							}
							return item.active;
						}
						,values: [
								  { value: "false", displayValue: 'Hamburger Menu'}
								  ,{ value: "true", displayValue: 'Action Icon'}
						]
						,changeProperty: {
							caption: 'Initial State',
							selector: 'input',
							property: 'checkbox-state',
							transitionable: false
						}
					}
				]
			]
		},
		prx.commonproperties.materialRipple
	]
	
}


/*****************************/
/****** FORM COMPONENTS ******/
/*****************************/

//TYPE: TEXTFIELD
prx.types.material_textfield = {
	name: 'material_textfield'
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		if(typeof(item.hasIcon) == "undefined") { item.hasIcon = false; }
		if(typeof(item.isFull) == "undefined") { item.isFull = false; }
		if(typeof(item.imgSrc) == "undefined") { item.imgSrc = {"fileId":"","name":"","assetType":"","bucketsource":"","url":"","folderId":"","targetSrc":"","color":""} };

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-material-textfield '+((item.isFull) ? 'full ' : '')+'type-material-textfield-'+item.inputtype+' liveUpdate-backgroundColor changeProperty-backgroundColor">';
		
		cR += '<style>';
		cR += '#'+_id+' { background-color: '+prx.utils.getColor(item.backgroundColor)+';}';
		cR += '#'+_id+' input, #'+_id+' .faux-input { color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; text-align: '+item.textAlign+'; '+ _props + ' width: '+dims.width+'px; }';
		if(item.isFull) { 
		cR += '#'+_id+' input, #'+_id+' .faux-input { border-top: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; padding: 0 '+(15*prx.componentsHelper.getScale(item.lib))+'px 0 '+(18*prx.componentsHelper.getScale(item.lib))+'px; }';
		cR += '#'+_id+' input, #'+_id+' .material-textfield-field-wrapper { padding-bottom: 0;}';
		}
		if(!item.isFull) {
		cR += '#'+_id+' input:focus, #'+_id+' .faux-input:focus { border-bottom: '+(item.borderWidth*2)+'px solid '+prx.utils.getColor(item.borderColorActive)+'; }';
		}
		cR += '#'+_id+' .faux-input.placeholder-input { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		cR += '#'+_id+' .faux-input { '+prx.css.flexJustifyContent(item.textAlign)+'; }';
		cR += '#'+_id+' input:-moz-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		cR += '#'+_id+' input::-moz-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		cR += '#'+_id+' input::-webkit-input-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		if(item.hasIcon && item.imgSrc.url != '') {
			cR += '#' + _id + ' .material-textfield-icon-wrapper { width: '+dims.height+'px; height: '+dims.height+'px;}';
			cR += '#' + _id + ' .material-textfield-icon { background-image: url('+prx.componentsHelper.getAssetUrl(item.imgSrc)+'); }';
			if( $.browser.webkit ) {
				cR += '#' + _id + ' .material-textfield-icon.checked { background-image: none; -webkit-mask-image: url('+prx.componentsHelper.getAssetUrl(item.imgSrc)+'); background-color: '+prx.utils.getColor(item.borderColorActive)+'; }';
			}
		}
		cR += '</style>'

		if(prx.editor) {
			if(item.hasIcon && item.imgSrc.url != '') {
			cR += '<div class="material-textfield-icon-wrapper">';
			cR += '<div class="material-textfield-icon"></div>';
			cR += '</div>';
			}
			cR += '<div class="material-textfield-field-wrapper">';
			cR += '<div class="faux-input liveUpdate-textColor liveUpdate-borderColor changeProperty-textColor changeProperty-borderColor" data-editableproperty="value">'+item.value+'</div>';
			cR += '<div class="faux-input placeholder-input changeProperty-textColor changeProperty-borderColor">'+item.placeholder+'</div>'
			cR += '</div>';
		}
		else {
			if(item.hasIcon && item.imgSrc.url != '') {
			cR += '<div class="material-textfield-icon-wrapper">';
			cR += '<div class="material-textfield-icon"></div>';
			cR += '</div>';
			}
			cR += '<div class="material-textfield-field-wrapper">';
			cR += '<input type="'+item.inputtype+'" value="'+item.value+'" placeholder="'+item.placeholder+'" data-role="none" class="real-input liveUpdate-backgroundColor liveUpdate-textColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textAlign" />'
			cR += '</div>';
		}
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		if(item.hasIcon && item.imgSrc.url != '') {
			$('#' + _id).find('.material-textfield-icon-wrapper').css({ 
				'width': dims.height+'px',
				'height': dims.height+'px'	
			});
		}		
	}
	,afterDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+' .real-input').focus(function(){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
				prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
				$('#'+_id).trigger('inputfocus');
			});
			
			$('#'+_id+' .real-input').blur(function(){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
		        prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputblur');
			});
			
			$('#'+_id+' .real-input').keyup(function(){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
		        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputkeyup');
			});
			
			$('#'+_id+' input')
			.focus(function(){				
				$(this).parent().siblings().find('.material-textfield-icon').addClass('checked');
			})
			.blur(function(){	
				$(this).parent().siblings().find('.material-textfield-icon').removeClass('checked');
			});
		}
	}
	,interactions:
		[
			prx.commonproperties.actions
		]
	,mpactions: {
		specialEvents: ['inputfocus','inputblur','inputkeyup']
	}
	,editableProperties: [
		{
			caption: 'Value'
			,name: 'value'
			,type: 'input'
			,value: function(item,name) {
				return item.value;
			}
			,changeProperty: {  
				caption: 'Value',
				property: 'input-value',
				selector: 'input.real-input',
				transitionable: false
			} 
		}
	                      ]
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
				 	prx.commonproperties.materialBackgroundColor,
					prx.commonproperties.borderWidth,
					prx.commonproperties.materialBorderColor,
					prx.commonproperties.materialBorderColorActive
				]
			]
		},{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
					prx.commonproperties.materialTextColor
				],	
				[
					prx.commonproperties.textProperties,
					prx.commonproperties.textAlign
				]
			]
		},
		{
			caption: 'Placeholder (If field is empty)',
	    	properties: [
				[
				 	prx.commonproperties.placeholderInput
				],
				[
				 	prx.commonproperties.materialPlaceholderColor
				]
			]
		},
		{
   		    caption: 'Icon',
   		    properties: [
   		        [
   					{ 
 						caption: false,
 						name: 'imgSrc', 
 						proptype: 'icon-source',
 						type: 'combo-asset', 
 						displayValue: function(item,name) {
 							if(item.imgSrc.url == '') {
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
 						,hiddenByDefault: function(item) {
							return !item.hasIcon;
						}
 						,changeProperty: {
 	                		caption: 'Icon',
 	                		rerender: true
 	                	}
 					}
   				],[
					{
						caption: 'Size'
						,name: 'iconSize'							
						,proptype: 'icon-size'
						,type: 'select'
						,value: function(item,name) {
							return item.iconSize;
						}
						,values: [{ value: '3', displayValue: 'Small'}, { value: '4', displayValue: 'Medium'}, { value: '5', displayValue: 'Large'}]
						,hiddenByDefault: function(item) {
							return !item.hasIcon;
						}
						,changeProperty: {
	                		caption: 'Icon size',
	                		rerender: true,
	                		changeable: false
						}
					}
				]
   			]
   		},
		{	
			caption: 'Input type',
			properties: [				
				[
					{
						caption: false,
						name: 'inputtype',
						type: 'select',
						value: function(item,name) {
							return item.inputtype;
						}
						,values: [{ value: 'text', displayValue: 'Text' }, { value: 'number', displayValue: 'Numeric' }, { value: 'email', displayValue: 'Email' }, { value: 'password', displayValue: 'Password' }, { value: 'tel', displayValue: 'Telephone' }] 
						,changeProperty: {  
							caption: 'Input type',
							rerender: true
						} 
						,hiddenByDefault: function(item) {
							return (item.name=="material_passwordfield")
						}
					}
				]
			]
		}
	]	
}

//TYPE: TEXTAREA
prx.types.material_textarea = {
	name: 'material_textarea'
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);

		if(typeof(item.isFull) == "undefined") { item.isFull = false; }
		if(typeof(item.backgroundColor)=="undefined") { item.backgroundColor = 'none' }
		if(typeof(item.textAlign) == "undefined") { item.textAlign = 'left'; }
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var _labelprops = (jQuery.inArray("bold",item.labelProperties)>-1) ? " font-weight: bold;" : "";
			_labelprops += (jQuery.inArray("italic",item.labelProperties)>-1) ? " font-style: italic;" : "";
			_labelprops += (jQuery.inArray("underline",item.labelProperties)>-1) ? " text-decoration: underline;" : "";
		
		var cR = '';		
		cR += '<div id="' + _id + '" class="box pos type-material-textarea'+((item.isFull) ? ' full' : '')+' liveUpdate-backgroundColor changeProperty-backgroundColor">';
		
		cR += '<style>';
		cR += '#'+_id+' { background-color: '+prx.utils.getColor(item.backgroundColor)+';}';
		cR += '#'+_id+' > textarea, #'+_id+' .faux-input { padding-top: '+(16*prx.componentsHelper.getScale(item.lib))+'px; background-color: '+prx.utils.getColor(item.backgroundColor)+'; color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; text-align: '+item.textAlign+'; '+prx.css.borderRadius(item.borderRadius + 'px')+ _props + '}';
		if(item.isFull) { 
		cR += '#'+_id+' > textarea, #'+_id+' .faux-input { border-top: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; padding: '+(17*prx.componentsHelper.getScale(item.lib))+'px '+(15*prx.componentsHelper.getScale(item.lib))+'px '+(17*prx.componentsHelper.getScale(item.lib))+'px '+(18*prx.componentsHelper.getScale(item.lib))+'px; }';
		cR += '#'+_id+' { padding-bottom: 0;}';
		}
		if(!item.isFull) { 
		cR += '#'+_id+' > textarea:focus { border-bottom: '+item.borderWidth*2+'px solid '+prx.utils.getColor(item.borderColorActive)+'; }'
		}
		cR += '#'+_id+' .faux-input { '+prx.css.flexJustifyContent(item.textAlign)+'; }'
		cR += '#'+_id+' .faux-input.placeholder-input { color: '+prx.utils.getColor(item.placeholderColor)+'; }'
		cR += '#'+_id+' textarea:-moz-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }'
		cR += '#'+_id+' textarea::-webkit-input-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }'
		cR += '#'+_id+' textarea::-moz-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }'
		if(item.hasLabel) {
		cR += '#'+_id+' .label { color: '+prx.utils.getColor(item.labelColor)+'; font-size: '+item.labelSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; text-align: '+item.labelAlign+';  '+ _labelprops +' }';
		cR += '#'+_id+' > textarea, #'+_id+' .faux-input { padding-top: '+(8*prx.componentsHelper.getScale(item.lib))+'px; }';		
		}
		cR += '</style>'
			
		if(prx.editor) {
			if(item.hasLabel) {
			cR += '<div class="label liveUpdate-labelColor changeProperty-labelColor changeProperty-labelSize changeProperty-labelAlign" data-editableproperty="label">'+item.label+'</div>';
			}
			cR += '<div class="faux-input liveUpdate-textColor liveUpdate-borderColor" data-editableproperty="value">'+item.value+'</div>';
			cR += '<div class="faux-input placeholder-input liveUpdate-placeholderColor liveUpdate-borderColor">'+item.placeholder+'</div>'
		} else {
			if(item.hasLabel) {
			cR += '<div class="label liveUpdate-labelColor changeProperty-labelColor changeProperty-labelSize changeProperty-labelAlign" data-editableproperty="label">'+item.label+'</div>';
			}
			cR += '<textarea class="real-input liveUpdate-placeholderColor liveUpdate-textColor liveUpdate-borderColor changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textSize changeProperty-textFont changeProperty-textColor changeProperty-textAlign" placeholder="'+item.placeholder+'" data-role="none">'+item.value.replace(/<br \/>/g, "\n")+'</textarea>'
		}
		cR += '</div>'
		return cR;
	}
	,afterDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);
		
		if(!prx.editor) {
			$('#'+_id+' .real-input').focus(function(){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
		        prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
				$('#'+_id).trigger('inputfocus');
			});
			
			$('#'+_id+' .real-input').blur(function(){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
		        prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputblur');
			});
			
			$('#'+_id+' .real-input').keyup(function(){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
		        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputkeyup');
			});
		}
	}
	,interactions:
		[
			prx.commonproperties.actions
		]
	,mpactions: {
    	specialEvents: ['inputfocus','inputblur','inputkeyup']
    }
	,editableProperties: [
		{
			caption: 'Value'
			,name: 'value'
			,type: 'textarea'
			,value: function(item,name) {
				return item.value;
			}
			,changeProperty: {  
				caption: 'Value',
				property: 'textarea-value',
				selector: 'textarea.real-input',
				transitionable: false
			} 
		},
		{
			caption: 'Label'
			,name: 'label'
			,type: 'textarea'
			,value: function(item,name) {
				return item.label;
			}
			,changeProperty: {  
				caption: 'Value',
				property: 'textarea-label',
				selector: '.label',
				transitionable: false
			} 
		}
	                      ]
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
				 	prx.commonproperties.materialBackgroundColor,
					prx.commonproperties.borderWidth,
					prx.commonproperties.materialBorderColor,
					prx.commonproperties.materialBorderColorActive
				]
			]
		},{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
					prx.commonproperties.materialTextColor
				],	
				[
					prx.commonproperties.textProperties,
					prx.commonproperties.textAlign
				]
			]
		},
		{
			caption: 'Label',
			properties: [
			    [
					{
						caption: 'Show label?',
						name: 'hasLabel',
						proptype: 'field-label-visibility',
						type: 'onoff',
						value: function(item,name) {
							return item.hasLabel
						}
						,onChange: function(item) {
							if(item.hasLabel) {
								$('#property-labelSize, #property-labelColor, #property-labelProperties, #property-labelAlign').show();
							} else {
								$('#property-labelSize, #property-labelColor, #property-labelProperties, #property-labelAlign').hide();
							}
						},
						hiddenByDefault: function(item) {
							return item.isFull;
						}
						,changeProperty: {  
							caption: 'Label',
							rerender: true
						} 
					}
			    ],
				[
				 	{ 
				 		caption: false, 
				 		name: 'labelSize', 
				 		proptype: 'font-size-4-label', 
				 		type: 'combo-select', 
				 		value: function(item,name) { 
				 			return item.labelSize; 
				 		}, 
				 		values: prx.comps.textsize,
				 		hiddenByDefault: function(item) {
							return (!item.hasLabel || item.isFull);
						},
				 		changeProperty: { 
				 			caption: 'Label size', 
				 			selector: '.changeProperty-labelSize', 
				 			property: 'font-size', 
				 			transitionable: true 
				 		} 
				 	},
					{ 
						caption: false, 
						name: 'labelColor',
						proptype: 'font-color-4-label',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.labelColor; 
						}, 
						values: prx.comps.materialColors,
						hiddenByDefault: function(item) {
							return (!item.hasLabel || item.isFull);
						},
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Label color', 
							selector: '.changeProperty-labelColor', 
							property: 'color', 
							transitionable: true 
						} 
					},
					{ 
						caption: false, 
						name: 'labelProperties', 
						proptype: 'text-properties-3-label', 
						type: 'checkbox', 
						value: function(item,name) { 
							if(typeof(item.textProperties) == "undefined") {
								item.textProperties = [];
							}
							return item.labelProperties; 
						}, 
						values: 
						[
							{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'},
							{ value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'},
							{ value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}
						],
						hiddenByDefault: function(item) {
							return (!item.hasLabel || item.isFull);
						},
						changeProperty: { 
							caption: 'Label properties', 
							rerender: true 
						} 
					},
					{ 
						caption: false, 
						name: 'labelAlign', 
						proptype: 'text-properties-3-label',
						type: 'radio', 
						value: function(item,name) { 
							return item.labelAlign; 
						},
						values: 
						[
						    { value: 'left', displayValue: '<span class="property-icon property-align-left" title="Align left"></span>'}, 
						    { value: 'center', displayValue: '<span class="property-icon property-align-center" title="Align center"></span>'}, 
						    { value: 'right', displayValue: '<span class="property-icon property-align-right" title="Align right"></span>'}
						],
						hiddenByDefault: function(item) {
							return (!item.hasLabel || item.isFull);
						},
						changeProperty: { 
							caption: 'Label text align', 
							selector: '.changeProperty-labelAlign', 
							property: 'text-align', 
							transitionable: false 
						} 
					}
				]
			]
		},
		{
			caption: 'Placeholder (If field is empty)',
	    	properties: [
				[
				 	prx.commonproperties.placeholderInput
				],
				[
				 	prx.commonproperties.placeholderColor
				]
			]
		}
	]	
}

//TYPE: FLOATING LABEL FIELD
prx.types.material_textfield_floating_label = {
	name: 'material_textfield_floating_label'
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var _labelprops = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_labelprops += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_labelprops += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-material-floating-label type-material-textfield-'+item.inputtype+' liveUpdate-backgroundColor changeProperty-backgroundColor">';
		
		cR += '<style>';

		cR += '#'+_id+' { background-color: '+prx.utils.getColor(item.backgroundColor)+';}';
		cR += '#'+_id+' input, #'+_id+' textarea, #'+_id+' .faux-input { font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; text-align: '+item.textAlign+'; '+ _props + ' width: '+dims.width+'px; }';
		cR += '#'+_id+' .label { font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; '+ _labelprops + ' }';
		cR += '#'+_id+' .faux-input { '+prx.css.flexJustifyContent(item.textAlign)+'; }';
		cR += '#'+_id+' .label { color: '+prx.utils.getColor(item.labelColor)+'; text-align: '+item.labelAlign+'; '+ _props + ' }';
		if(!prx.editor) {
		cR += '#'+_id+' input:focus, #'+_id+' textarea:focus { border-bottom: '+item.borderWidth*2+'px solid '+prx.utils.getColor(item.borderColorActive)+'; }';
		cR += '#'+_id+' input:focus + .label, #'+_id+' textarea:focus + .label { color: '+prx.utils.getColor(item.borderColorActive)+'; }';
		}
		cR += '</style>'

		if(prx.editor) {
			cR += '<div class="material-floating-label-field-wrapper">';
			cR += '<div class="faux-input '+((item.fieldtype == 'textarea') ? 'textarea ' : '')+'liveUpdate-textColor liveUpdate-borderColor liveUpdate-backgroundColor" data-editableproperty="value">'+item.value+'</div>';
			cR += '<div class="label '+((item.fieldtype == 'textarea') ? 'textarea ' : '')+'liveUpdate-labelColor changeProperty-labelAlign">'+item.label+'</div>'
			cR += '</div>';
		}
		else {
			cR += '<div class="material-floating-label-field-wrapper">';
			if(item.fieldtype == 'input') {
			cR += '<input type="'+item.inputtype+'" value="'+item.value+'" data-role="none" class="real-input changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textAlign" />'
			}
			else if(item.fieldtype == 'textarea') {
			cR += '<textarea data-role="none" class="real-input liveUpdate-textColor liveUpdate-borderColor changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textSize changeProperty-textFont changeProperty-textColor changeProperty-textAlign">'+item.value.replace(/<br \/>/g, "\n")+'</textarea>'
			}
			cR += '<div class="label '+((item.fieldtype == 'textarea') ? 'textarea ' : '')+'liveUpdate-labelColor changeProperty-labelAlign">'+item.label+'</div>'
			cR += '</div>';
		}
		cR += '</div>';
		return cR;
	}
	,afterDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
				
		if(!prx.editor) {

			if($.trim($('#'+_id+' .real-input').val()) == "") {
				if(item.fieldtype == 'input') {
					$('#'+_id+' input + .label').addClass('empty');					
				}
				else if(item.fieldtype == 'textarea') {
					$('#'+_id+' textarea + .label').addClass('empty');	
				}
			}
			else {
				if(item.fieldtype == 'input') {
					$('#'+_id+' input + .label').removeClass('empty');					
				}
				else if(item.fieldtype == 'textarea') {
					$('#'+_id+' textarea + .label').removeClass('empty');	
				}
			}			
			
			$('#'+_id+' .real-input').focus(function(){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
				prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
				$('#'+_id).trigger('inputfocus');
				
				if($.trim($(this).val()) == "") {
					if(item.fieldtype == 'input') {
						$('#'+_id+' input + .label').removeClass('empty');					
					}
					else if(item.fieldtype == 'textarea') {
						$('#'+_id+' textarea + .label').removeClass('empty');	
					}
				}
			});
			
			$('#'+_id+' .real-input').blur(function(){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
		        prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputblur');
		        
		        if($.trim($(this).val()) == "") {
					if(item.fieldtype == 'input') {
						$('#'+_id+' input + .label').addClass('empty');					
					}
					else if(item.fieldtype == 'textarea') {
						$('#'+_id+' textarea + .label').addClass('empty');	
					}
				}
			});
			
			$('#'+_id+' .real-input').keyup(function(){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
		        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputkeyup');
			});
			
			
		}
	}
	,interactions:
		[
			prx.commonproperties.actions
		]
	,mpactions: {
		specialEvents: ['inputfocus','inputblur','inputkeyup']
	}
	,editableProperties: [
		{
			caption: 'Value'
			,name: 'value'
			,type: 'input'
			,value: function(item,name) {
				return item.value;
			}
			,changeProperty: {  
				caption: 'Value',
				property: 'input-value',
				selector: 'input.real-input',
				transitionable: false
			} 
		}
	                      ]
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
				 	prx.commonproperties.materialBackgroundColor,
					prx.commonproperties.borderWidth,
					prx.commonproperties.materialBorderColor,
					prx.commonproperties.materialBorderColorActive
				]
			]
		},{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
					prx.commonproperties.materialTextColor
				],	
				[
					prx.commonproperties.textProperties,
					prx.commonproperties.textAlign
				]
			]
		},{
			caption: 'Label',
	    	properties: [
				[
				 	prx.commonproperties.labelInput
				],
				[
				 	prx.commonproperties.textColorLabel,
				 	prx.commonproperties.textAlignLabel
				]
			]
		},
		{
			caption: 'Input type',
			properties: [				
				[
					{	
						caption: false,
						name: 'inputtype',
						type: 'select',
						value: function(item,name) {
							return item.inputtype;
						}
						,values: [{ value: 'text', displayValue: 'Text' }, { value: 'number', displayValue: 'Numeric' }, { value: 'email', displayValue: 'Email' }, { value: 'password', displayValue: 'Password' }, { value: 'tel', displayValue: 'Telephone' }] 
						,changeProperty: {  
							caption: 'Input type',
							rerender: true
						} 
						,hiddenByDefault: function(item) {
							return (item.name=="material_textarea_floating_label")
						}
					}
				]
			]
		}
	]	
}

//TYPE: CHECKBOX
prx.types.material_checkbox = {
	name: "material_checkbox"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);	

		var _check = '';
		var _active = "";
		
		if(item.active) { _active = 'checked="checked"';}
		
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-material-checkbox">';
		
		cR += '<style>'
		cR += '#' + _id + ' label { background-color: '+prx.utils.getColor(item.backgroundColor)+'; border-color: '+prx.utils.getColor(item.borderColor)+'; }'
		cR += '#' + _id + ' label .check { background-color: '+prx.utils.getColor(item.checkColor)+';}'
		cR += '#' + _id + ' input:checked + label { background-color: '+prx.utils.getColor(item.activeColor)+'; border-color: '+prx.utils.getColor(item.activeColor)+'; }';
		cR += '#' + _id + ' input + label:active .radial { width: '+(dims.width*1.7)+'px; height: '+(dims.width*1.7)+'px; left: -'+Math.round(((dims.width*1.7)-dims.width)/2)+'px; top: -'+Math.round(((dims.width*1.7)-dims.width)/2)+'px; }';
		cR += '#' + _id + ' input:checked + label:active .radial { background-color: '+prx.utils.getColor(item.activeColor)+';}';
		cR += '</style>'
		
		cR += '<input type="checkbox" id="'+_id+'-checkbox" '+_active+' style="display: none;" data-role="none" />';
		cR += '<label for="'+_id+'-checkbox" class="liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor">';
		cR += '<span class="radial"></span>';
		cR += '<span class="check-container liveUpdate-activeColor changeProperty-activeColor" data-clickable="true"><span class="check short"></span><span class="check long"></span></span>';
		cR += '</label>';
		cR += '</div>';
		return cR;
	}
	,afterDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+'-checkbox').change(function(){
				if(typeof(prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']) == "undefined") { prx.variables._triggerData['input:checked[id='+_id+'-checkbox]'] = {}; }        					
		        prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']['checkboxchange'] = { state: $(this).is(':checked') };
		        if(typeof(prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']) == "undefined") { prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {}; }        					
		        prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})
		}
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
	}
	,interactions: [
		{
			caption: 'Interactions on change',
			name: 'actions',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			changeProperty: {
				caption: 'Interactions on change',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{
			caption: 'Interactions on activation', 
			name: 'checkboxActionsOnActive', 
			type: 'action',
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnActive) == "undefined") {
					item.checkboxActionsOnActive = [];
				}
				return item.checkboxActionsOnActive.length; 
			}, 
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		},
		{
			caption: 'Interactions on deactivation', 
			name: 'checkboxActionsOnDeactive', 
			type: 'action', 
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnDeactive) == "undefined") {
					item.checkboxActionsOnDeactive = [];
				}
				return item.checkboxActionsOnDeactive.length; 
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange']
	}
	,propertyGroups: [			
		{
			caption: 'Inactive state',
	    	properties: [
				[
					prx.commonproperties.materialBackgroundColor,
					{ 
						caption: 'Border', 
						name: 'borderColor', 
						proptype: 'border-color', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.borderColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'border-color', 
						changeProperty: { 
							caption: 'Border Color', 
							selector: '.changeProperty-borderColor', 
							property: 'border-color', 
							transitionable: true 
						} 
					}
				]				
			]
		},
		{
			caption: 'Active state',
	    	properties: [
				[
				 	{ 
				 		caption: 'Background', 
				 		name: 'activeColor', 
				 		proptype: 'background-color-2-active', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.activeColor; 
				 		}, 
				 		values: prx.comps.materialColors, 
				 		liveUpdate: 'background-color', 
				 		changeProperty: {
				 			caption: 'Active color', 
				 			selector: '.changeProperty-activeColor', 
				 			property: 'background-color', 
				 			transitionable: true 
				 		} 
				 	},
				 	{ 
				 		caption: 'Checkmark', 
				 		name: 'checkColor', 
				 		proptype: 'font-color', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.checkColor; 
				 		}, 
				 		values: prx.comps.materialColors, 
				 		liveUpdate: 'color', 
				 		changeProperty: { 
				 			caption: 'Checkmark color', 
				 			selector: '.changeProperty-checkColor', 
				 			property: 'color', 
				 			transitionable: true 
				 		} 
				 	}
				 ]
			]			
		},
		{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,proptype: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active',
							selector: 'input',
							property: 'checkbox-state',
							transitionable: false
						}
					}
				]
			]
		}
	]
	
}

//TYPE: RADIOBUTTON
prx.types.material_radiobutton = {
	name: "material_radiobutton"
	,onDisplay: function(item,containerid) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);	
		
		var _check = '';
		var _active = "";
		var _type = (item.actAsCheckbox) ? 'checkbox' : 'radio';
		
		if(item.active) { _active = 'checked="checked"';}
		
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-material-radiobutton">';		
		
		cR += '<style>'
		cR += '#'+_id+' label { background-color: '+prx.utils.getColor(item.backgroundColor)+'; border-color: '+prx.utils.getColor(item.borderColor)+'; }'
		cR += '#'+_id+' label .circle { background-color: '+prx.utils.getColor(item.activeColor)+'; border-width: '+(item.height-2*prx.componentsHelper.getScale('material'))*0.16+'px '+(item.width-2*prx.componentsHelper.getScale('material'))*0.16+'px;}'
		cR += '#'+_id+' input:checked + label { border-color: '+prx.utils.getColor(item.activeColor)+'; }';
		cR += '#'+_id+' input:checked + label .circle { background-color: '+prx.utils.getColor(item.activeColor)+';}';
		cR += '#'+_id+' input + label:active .radial { width: '+(dims.width*1.7)+'px; height: '+(dims.width*1.7)+'px; left: -'+((dims.width*1.7)-dims.width)/2+'px; top: -'+((dims.width*1.7)-dims.width)/2+'px; }';
		cR += '#'+_id+' input:checked + label:active .radial { background-color: '+prx.utils.getColor(item.activeColor)+';}';
		cR += '</style>'

		cR += '<input type="'+_type+'" id="'+_id+'-checkbox" '+_active+' style="display: none;" data-role="none" />';
		cR += '<label class="liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor" for="'+_id+'-checkbox">';
		cR += '<span class="radial"></span>';
		cR += '<span class="circle liveUpdate-activeColor changeProperty-activeColor"></span>';
		cR += '</label>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);	
		
		$('#'+_id+' label .circle').css('margin', Math.round(dims.height*0.16)+'px 0 0 '+Math.round(dims.height*0.16)+'px')
	}
	,afterDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+'-checkbox').change(function(){
				if(typeof(prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']) == "undefined") { prx.variables._triggerData['input:checked[id='+_id+'-checkbox]'] = {}; }
				prx.variables._triggerData['input:checked[id='+_id+'-checkbox]'] = {};        					
		        prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']['checkboxchange'] = { state: $(this).is(':checked') };
		        if(typeof(prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']) == "undefined") { prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {}; }
		        prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {};        					
		        prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})
		}
	}	
	,interactions: [
		{
			caption: 'Interactions on change',
			name: 'actions',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			changeProperty: {
				caption: 'Interactions on change',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{ 
			caption: 'Interactions on activation', 
			name: 'checkboxActionsOnActive', 
			type: 'action',
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnActive) == "undefined") {
					item.checkboxActionsOnActive = [];
				}
				return item.checkboxActionsOnActive.length; 
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }

		},
		{
			caption: 'Interactions on deactivation', 
			name: 'checkboxActionsOnDeactive', 
			type: 'action', 
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnDeactive) == "undefined") {
					item.checkboxActionsOnDeactive = [];
				}
				return item.checkboxActionsOnDeactive.length; 
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange']
	}
	,propertyGroups: [			
		{
			caption: 'Style',
	    	properties: [
				[
					prx.commonproperties.materialBackgroundColor
				],
				[
					{
						caption: 'Active'
						,name: 'activeColor'
						,proptype: 'background-color-2-active' 
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.activeColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate: 'background-color'
						,changeProperty: {  
							caption: 'Active color',
							selector: '.changeProperty-activeColor',
							property: 'background-color',
							transitionable: true
						} 
					}
				 ]
			]
		},{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,proptype: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active',
							selector: 'input',
							property: 'checkbox-state',
							transitionable: false
						}
					}
				],[
					{
						caption: 'Act as checkbox'
						,name: 'actAsCheckbox'
						,proptype: 'radio-as-checkbox'
						,type: 'onoff'
						,value: function(item,name) {
							return item.actAsCheckbox;
						}
						,changeProperty: {  
							caption: 'Act as checkbox',
							rerender: true,
							changeable: false
						} 
					}
				]
			]
		}
	]
}

//TYPE: ONOFF SWITCH
prx.types.material_onoffswitch = {
	name: "material_onoffswitch"
	,onDisplay: function(item,containerid,pageid,symbol) {

		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);	
		
		var _active = "";		
		if(item.active) { _active = 'checked="checked"';}		
		
		var buttonDims = dims.height;

		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-material-onoffswitch">';		
				
		cR += '<style>';
		cR += '#'+_id+' .material-onoff-inner { border-radius: '+Math.round(dims.height/2)+'px }';
		cR += '#'+_id+' .material-onoff-inner:before { background-color: '+prx.utils.getColor(item.activeLabelColor)+'; }';
		cR += '#'+_id+' .material-onoff-inner:after { background-color: '+prx.utils.getColor(item.inactiveLabelColor)+'; }';
		cR += '#'+_id+' .material-onoff-switch { width: '+dims.height+'px; box-shadow: 0 '+(2*prx.componentsHelper.getScale(item.lib))+'px '+(4*prx.componentsHelper.getScale(item.lib))+'px 0px '+prx.utils.getColor(item.inactiveShadowColor)+'; background-color: '+prx.utils.getColor(item.inactiveSwitchColor)+'; }';
		cR += '#'+_id+' input:checked + label .material-onoff-switch { box-shadow: '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(2*prx.componentsHelper.getScale(item.lib))+'px '+(6*prx.componentsHelper.getScale(item.lib))+'px 0px '+prx.utils.getColor(item.activeShadowColor)+'; background-color: '+prx.utils.getColor(item.activeSwitchColor)+'; }';
		cR += '#'+_id+' input + label:active .radial { width: '+(buttonDims*1.5)+'px; height: '+(buttonDims*1.5)+'px; left: -'+Math.round(((buttonDims*1.5)-buttonDims)/2)+'px; top: -'+Math.round(((buttonDims*1.5)-buttonDims)/2)+'px; }';
		cR += '#'+_id+' input:checked + label:active .radial { background-color: '+prx.utils.getColor(item.activeSwitchColor)+';}';
		cR += '</style>';
		
		// checkbox needs to stay "id-flipswitch" for player compatibility!
		cR += '<input class="material-onoff-checkbox" type="checkbox" '+_active+ ' id="'+_id+'-flipswitch" data-role="none">';
		cR += '<label class="material-onoff-label" for="'+_id+'-flipswitch"  data-clickable="true">';
		cR += '<span class="material-onoff-inner '+((item.active) ? 'liveUpdate-activeLabelColor changeProperty-activeLabelColor' : 'liveUpdate-inactiveLabelColor changeProperty-inactiveLabelColor')+'"></span>';
		cR += '<span class="material-onoff-switch '+((item.active) ? 'liveUpdate-activeSwitchColor changePropetry-activeSwitchColor' : 'liveUpdate-inactiveSwitchColor changePropetry-inactiveSwitchColor')+'">';
		cR += '<span class="radial"></span>';
		cR += '</span>';
		cR += '</label>';
		
		cR += '</div>';
		
		return cR;
	}
	,onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);	
		
		$('#'+_id).find('.material-onoff-inner').css('border-radius', Math.round(dims.height/2)+'px');
		$('#'+_id).find('.material-onoff-switch').css({
			'width': dims.height+'px'
		});
	}
	,interactions: [
		{
			caption: 'Interactions on change',
			name: 'actions',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			changeProperty: {
				caption: 'Interactions on change',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{
			caption: 'Interactions on activation',
			name: 'flipswitchActionsOnActive',
			type: 'action',
			value: function(item,name) {
				if(typeof(item.flipswitchActionsOnActive) == "undefined") {
					if (typeof(item.actionsOnActive) == "undefined") {
						item.flipswitchActionsOnActive = [];
					} else {
						item.flipswitchActionsOnActive = item.actionsOnActive;
					}
				}
				return item.flipswitchActionsOnActive.length;
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		},
		{
			caption: 'Interactions on deactivation',
			name: 'flipswitchActionsOnDeactive',
			type: 'action',
			value: function(item,name) {
				if(typeof(item.flipswitchActionsOnDeactive) == "undefined") {
					if (typeof(item.actionsOnDeactive) == "undefined") {
						item.flipswitchActionsOnDeactive = [];
					} else {
						item.flipswitchActionsOnDeactive = item.actionsOnDeactive;
					}
				}
				return item.flipswitchActionsOnDeactive.length;
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange'],
	}
	,propertyGroups: [	
		{
			caption: 'Active State',
			properties: [
				[
					{ 
						caption: 'Background', 
						name: 'activeLabelColor', 
						proptype: 'background-color-label-2-active', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.activeLabelColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Active state color', 
							selector: '.changeProperty-activeLabelColor', 
							property: 'background-color', 
							transitionable: true 
						} 
					},
					{
						caption: 'Switch'
						,name: 'activeSwitchColor'
						,proptype: 'background-color-switch-2-active'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.activeSwitchColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate: 'background-color'
						,changeProperty: {  
							caption: 'Active switch color', 
							selector: '.changeProperty-activeSwitchColor', 
							property: 'background-color', 
							transitionable: true
						} 
					}
				],
				[
				 	{ 
				 		caption: 'Shadow', 
				 		name: 'activeShadowColor', 
				 		proptype: 'shadow-color-2-active', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.activeShadowColor; 
				 		}, 
						values: prx.comps.materialColors,
				 		changeProperty: { 
				 			caption: 'Active shadow color', 
				 			rerender: true, 
				 			changeable: false
				 		} 
				 	}
				 ]
			]
		},
		{
			caption: 'Inactive State',
			properties: [
				[
					{ 
						caption: 'Background', 
						name: 'inactiveLabelColor', 
						proptype: 'background-color-label', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.inactiveLabelColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Inactive state color', 
							selector: '.changeProperty-inactiveLabelColor', 
							property: 'background-color', 
							transitionable: true 
						} 
					},
					{
						caption: 'Switch'
						,name: 'inactiveSwitchColor'
						,proptype: 'background-color-switch'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.inactiveSwitchColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate: 'background-color'
						,changeProperty: {  
							caption: 'Inactive switch color', 
							selector: '.changeProperty-inactiveSwitchColor', 
							property: 'background-color', 
							transitionable: true
						} 
					}
				],
				[
					{ 
						caption: 'Shadow', 
						name: 'inactiveShadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.inactiveShadowColor; 
						}, 
						values: prx.comps.materialColors,
						changeProperty: { 
							caption: 'Inactive shadow color', 
							rerender: true, 
							changeable: false
						} 
					}
				]
			]
		},
		{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,proptype: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active',
							selector: 'input',
							property: 'checkbox-state',
							transitionable: false
						}
					} 
				 ]
				
			]
		}
	]
	
}

/***** LIST COMPONENTS *****/
//TYPE: BOTTOM SHEET COMPLEX
prx.types.material_bottomsheet_complex = {
	name: "material_bottomsheet_complex"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;		
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var listH = Math.round((dims.height - 1 - item.listitems.length) / item.listitems.length);
		var listItemH = (dims.height - (item.listitems.length + 1))/item.listitems.length;		

		var hasThumbs = false;
		for(var i=0; i<item.listitems.length; i++)
			if(typeof(item.listitems[i].thumbnail) != "undefined" && item.listitems[i].thumbnail.url != '') {
				hasThumbs = true;
				break;
			}
		var hasLeftIcon = false;
		for(var i=0; i<item.listitems.length; i++)
			if(typeof(item.listitems[i].iconLeft) != "undefined" && item.listitems[i].iconLeft.url != '') {
				hasLeftIcon = true;
				break;
			}
		var hasRightIcon = false;
		for(var i=0; i<item.listitems.length; i++)
			if(typeof(item.listitems[i].iconRight) != "undefined" && item.listitems[i].iconRight.url != '') {
				hasLeftIcon = true;
				break;
			}
			
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		var _subprops = (jQuery.inArray("bold",item.subProperties)>-1) ? " font-weight: bold;" : "";
			_subprops += (jQuery.inArray("italic",item.subProperties)>-1) ? " font-style: italic;" : "";
			_subprops += (jQuery.inArray("underline",item.subProperties)>-1) ? " text-decoration: underline;" : "";	
		
		
		var cR = '<div id="'+_id+'" class="pos box type-material-bottomsheet">';
		
		cR += '<style>';
		cR += '#' + _id + ' .material-bottomsheet-inner { '+prx.css.flexJustifyContent(item.textAlign)+' background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#' + _id + ' .material-bottomsheet-icon-wrapper { width: '+Math.round((parseInt(listItemH)/2)-(5*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)-(5*prx.componentsHelper.getScale(item.lib)))+'px; }';
		cR += '#' + _id + ' .material-bottomsheet-listitem-type-infoTitle .material-bottomsheet-icon-wrapper { width: '+Math.round((parseInt(listItemH)/2)+(10*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)+(10*prx.componentsHelper.getScale(item.lib)))+'px; }';
		cR += '#' + _id + ' .material-bottomsheet-text-wrapper { height: '+Math.round(listItemH)+'px; }';
		cR += '#' + _id + ' .material-bottomsheet-text { '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; '+_props+' }';
		cR += '#' + _id + ' .material-bottomsheet-subtitle { '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.subtitleSize+'px; color: '+prx.utils.getColor(item.subtitleColor)+'; '+_subprops+' }';
		cR += '#' + _id + ' .material-bottomsheet-listitem-type-infoTitle .material-bottomsheet-text { color: '+prx.utils.getColor(item.infoTitleColor)+'; }';
		cR += '#' + _id + ' .material-bottomsheet-listitem-type-actionTitle .material-bottomsheet-text { color: '+prx.utils.getColor(item.actionTitleColor)+'; }';
		if(item.name == 'material_bottomsheet_info') {
			cR += '#' + _id + ' .material-bottomsheet-separator { width: '+Math.round(dims.width-((parseInt(listItemH)/2)+(22*prx.componentsHelper.getScale(item.lib))+(26*prx.componentsHelper.getScale(item.lib))))+'px; background-color: '+prx.utils.getColor(item.dividerColor)+'; }';
		}
		else {
			cR += '#' + _id + ' .material-bottomsheet-separator { width: '+dims.width+'px; background-color: '+prx.utils.getColor(item.dividerColor)+'; }';
		}
		cR += '</style>';
		
		cR += '<div class="material-bottomsheet-inner liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-textAlign changeProperty-textFont changeProperty-textSize">';
				
		$.each(item.listitems, function(i,elm){	
			
			if(elm.itemtype == 'separator') {
				cR += '<div id="'+_id+'-listitems-'+i+'" class="material-bottomsheet-separator liveUpdate-borderColor-background-color dynamic-property" data-dynamic-property-index="'+i+'"></div>'
			}
			else {
				if(typeof(elm.thumbnail) == "undefined") { elm.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""} };
				if(typeof(elm.leftIcon) == "undefined") { elm.leftIcon = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""} };
				if(typeof(elm.rightIcon) == "undefined") { elm.rightIcon = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}};
							
				cR += '<style>';
				if(elm.leftIcon.url != '') {
					cR += '#' + _id + '-listitems-'+i+' .material-bottomsheet-icon-left { background-image: url('+prx.componentsHelper.getAssetUrl(elm.leftIcon)+'); }';
				}	
				if(elm.rightIcon.url != '') {
					cR += '#' + _id + '-listitems-'+i+' .material-bottomsheet-icon-right { background-image: url('+prx.componentsHelper.getAssetUrl(elm.rightIcon)+'); }';
				}	
				if(elm.thumbnail.url != '') {
					cR += '#' + _id + '-listitems-'+i+' .material-bottomsheet-thumb { background-image: url('+prx.componentsHelper.getAssetUrl(elm.thumbnail)+'); }';
				}
				if(elm.itemtype == 'infoTitle' || elm.itemtype == 'actionTitle' ) {
					cR += '#' + _id + '-listitems-'+i+' { -webkit-flex-basis: 9px; -ms-flex-basis: 9px; flex-basis: 9px; }';
				}
				if( elm.itemtype == 'actionTitle' ) {
					cR += '#' + _id + '-listitems-'+i+' .material-bottomsheet-text-wrapper { padding: 0; }';
				}
				cR += '</style>';
				
				var iconL = '';
				var iconR = '';
				var thumb = '';
				if(((elm.leftIcon.url != '') && (elm.itemtype == 'actionItem' || elm.itemtype == 'infoItem')) || (hasLeftIcon && (!elm.itemtype == 'actionTitle'))) {
					iconL += '<div class="material-bottomsheet-icon-wrapper"><div class="material-bottomsheet-icon material-bottomsheet-icon-left"></div></div>';
				}
				else if(((elm.thumbnail.url != '') && (elm.itemtype == 'infoTitle')) || (hasThumbs && (!elm.itemtype == 'actionTitle'))) {
					thumb += '<div class="material-bottomsheet-icon-wrapper"><div class="material-bottomsheet-thumb"></div></div>';
				}
				if(((elm.rightIcon.url != '') && (elm.itemtype == 'infoItem')) || (hasRightIcon && (!elm.itemtype == 'actionTitle'))) {
					iconR += '<div class="material-bottomsheet-icon-wrapper right"><div class="material-bottomsheet-icon material-bottomsheet-icon-right"></div></div>';
				}
				
				cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property material-bottomsheet-listitem material-bottomsheet-listitem-type-'+elm.itemtype+'" data-dynamic-property-index="'+i+'">';
									
				cR += '<div class="bordered-container '+((item.rippleEffect && !(elm.itemtype == 'separator' || elm.itemtype == 'actionTitle' || elm.itemtype == 'infoTitle')) ? 'prx-material-ripple ' : '' )+'liveUpdate-dividerColor changeProperty-dividerColor">';
	
				if( iconL == '' && thumb == '' && (hasThumbs || hasLeftIcon) && (elm.itemtype == 'actionItem' || elm.itemtype == 'infoItem') ) {
					cR += '<div class="material-bottomsheet-icon-wrapper"><div class="material-bottomsheet-icon material-bottomsheet-icon-left"></div></div>';
				}
				else {
				cR += iconL;
				cR += thumb;
				}
				
				cR += '<div class="material-bottomsheet-text-wrapper">';
				cR += '<div class="material-bottomsheet-text '+((elm.itemtype == 'infoTitle' || elm.itemtype == 'actionTitle') ? 'title' : 'liveUpdate-textColor changeProperty-textColor')+' '+((elm.itemtype == 'infoTitle') ? 'info liveUpdate-infoTitleColor changeProperty-infoTitleColor' : '')+' '+((elm.itemtype == 'actionTitle') ? 'action liveUpdate-actionTitleColor changePropery-actionTitleColor' : '')+'">';
				cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+elm.text+'</span>';
				cR += '</div>';
				if(elm.itemtype == 'infoItem') {
				cR += '<div class="material-bottomsheet-subtitle liveUpdate-subtitleColor changeProperty-subtitleColor changeProperty-subtitleFont changeProperty-subtitleSize">';
				cR += '<span data-editableproperty="subtitle" data-dynamic-property-index="'+i+'">'+elm.subtitle+'</span>';
				cR += '</div>';
				}
				cR += '</div>';
	
				cR += iconR;
				
				cR += '</div>';
				cR += '</div>';
			}
		});
		cR += '</div></div>';	
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var dims = prx.componentsHelper.getRealDims(item);
		var listItemH = (dims.height - (item.listitems.length + 1))/item.listitems.length;
		
		$('#' + _id).find('.material-bottomsheet-icon-wrapper').css({
			'width': Math.round(listItemH/2)+'px',
			'height': Math.round(listItemH/2)+'px'
		});
		$('#' + _id).find('.material-bottomsheet-listitem-type-infoTitle .material-bottomsheet-icon-wrapper').css({
			'width': Math.round((parseInt(listItemH)/2)+(10*prx.componentsHelper.getScale(item.lib)))+'px',
			'height': Math.round((parseInt(listItemH)/2)+(10*prx.componentsHelper.getScale(item.lib)))+'px'
		});
		$('#' + _id).find('.material-bottomsheet-text-wrapper').css({
			'height': Math.round(listItemH)+'px'
		});
		if(item.name == "material_bottomsheet_info") {
		$('#' + _id).find('.material-bottomsheet-separator').css({ 
			width: Math.round(dims.width-((parseInt(listItemH)/2)+(22*prx.componentsHelper.getScale(item.lib))+(25*prx.componentsHelper.getScale(item.lib))))+'px' 
		});
		}
		else{
		$('#' + _id).find('.material-bottomsheet-separator').css({ 
			width: dims.width+'px' 
		});
		}
	}
	,propertyGroups: [
		{
			caption: 'List',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor
				],
				[
					{ 
						caption: 'Separator', 
						name: 'dividerColor', 
						proptype: 'divider-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.dividerColor; 
						}, 
						liveUpdate: 'border-color,background-color', 
						values: prx.comps.materialColors,
						changeProperty: { 
							caption: 'Separator color', 
							rerender: true 
						} 
					}
				]
			]
		},
		{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.materialTextColor
				],	
				[
					prx.commonproperties.textProperties
				]
			]
		},
		{
			caption: 'Titles',
			properties: [[
				{ 
					caption: 'Action title', 
					name: 'actionTitleColor', 
					proptype: 'title-color',
					type: 'combo-colorpicker', 
					value: function(item,name) {
						return item.actionTitleColor; 
					}
					,liveUpdate: 'color' 
					,values: prx.comps.materialColors
					,changeProperty: {  
						caption: 'Action title color',
						property: 'color',
						selector: '.changeProperty-actionTitleColor',
						transitionable: true
					} 		
				},
				{ 
					caption: 'Info title', 
					name: 'infoTitleColor', 
					proptype: 'title-color',
					type: 'combo-colorpicker', 
					value: function(item,name) {
						return item.infoTitleColor; 
					}
					,liveUpdate: 'color' 
					,values: prx.comps.materialColors
					,changeProperty: {  
						caption: 'Info title color',
						property: 'color',
						selector: '.changeProperty-infoTitleColor',
						transitionable: true
					} 		
				}
			]]
		},
		{
			caption: 'Subtitle',
			properties: [				
				[
					prx.commonproperties.textSizeSubtitle,
					prx.commonproperties.textColorSubtitle,
					prx.commonproperties.textPropertiesSubtitle
				]
			]
		},		
		prx.commonproperties.materialRipple
	]
	,dynamicProperties: {
		data: 'listitems'
		,propertyCaption: 'Bottom Sheet items'
  		,propertyName: 'Bottom Sheet item'
		,addCaption: 'Add Bottom Sheet item'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Label'
			,itemtype: 'actionItem'
			,subtitle: ''
			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
			,leftIcon: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
			,actions: []
		}
		,captionProperty: 'text' 
		,editableProperties: [
			{
				caption: 'Label'
				,name: 'text'
				,type: 'input'
				,value: function(item,name,index) {
					return item.listitems[index].text;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype == 'separator');
				}
				,changeProperty: {  
					caption: 'Label',
					property: 'text',
					selector: '.material-bottomsheet-text',
					transitionable: false
				}  

			},
			{
				caption: 'Subtitle'
				,name: 'subtitle'
				,type: 'textarea'
				,value: function(item,name,index) {
					if(typeof(item.listitems[index].subtitle) == 'undefined') { return ''; }
					return item.listitems[index].subtitle;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype != 'infoItem');
				}
				,changeProperty: {  
					caption: 'Subtitle Text',
					property: 'text',
					selector: '.material-bottomsheet-subtitle',
					transitionable: false
				}  
			}
		]
		,interactions: [
			{
				caption: 'Interactions'
				,name: 'actions'
				,type: 'action'
				,value: function(item,name,index) {
					if (typeof(item.listitems[index].actions) == "undefined") {
						item.listitems[index].actions = [];
					}		
				
					return item.listitems[index].actions.length;
				}
			}
		                ]
		                
		,propertyGroups: [
			{
				caption:  'Style',
				properties: [[
					{
						caption: false //'List item Type'
						,name: 'itemtype'
						,type: 'select'
						,value: function(item,name,index) {
							if(typeof(item.listitems[index].itemtype) == "undefined") {
								item.listitems[index].itemtype = 'actionItem'
							}
							return item.listitems[index].itemtype;
						}
						,values: [
								  { value: 'actionTitle', displayValue: 'Action Title'}
								  ,{ value: 'actionItem', displayValue: 'Action Item'}
								  ,{ value: 'infoTitle', displayValue: 'Info Title' }
								  ,{ value: 'infoItem', displayValue: 'Info Item'}
								  ,{ value: 'separator', displayValue: 'Separator'}
						],
						onChange: function(item, index) {
							switch(item.itemtype) {
							case 'actionTitle':
								$('#property-subtitle, #property-thumbnail, #property-lefticon, #property-righticon').hide();
								break;
							case 'infoTitle':
								item.thumbnail = {"fileId":"56f6ac46a0eb9f024735e3007529b884.svg","name":"account_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/56f6ac46a0eb9f024735e3007529b884.svg","folderId":"f1424091456673","targetSrc":"generated/56f6ac46a0eb9f024735e3007529b884_7d7d7d.svg","color":"757575"};
								$('#property-subtitle, #property-thumbnail, #property-lefticon, #property-righticon').hide();
								return item;
								break;
							case 'actionItem':
								item.leftIcon = {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
								$('#property-subtitle, #property-thumbnail, #property-righticon').hide();
								return item;
								break;
							case 'infoItem':
								item.leftIcon = {"fileId":"3bfcda2308acf98adb9d2ffd25991048.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","folderId":"f1424091903407","targetSrc":"generated/3bfcda2308acf98adb9d2ffd25991048_2196f3.svg","color":"2196F3"}
								item.rightIcon = {"fileId":"124ae0d28445f3f091c420e879dd6793.svg","name":"google__x2B_.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/124ae0d28445f3f091c420e879dd6793.svg","folderId":"f1352971179296"};
								$('#property-thumbnail').hide();
								return item;
								break;	
							case 'separator':
								$('#property-text, #property-subtitle, #property-thumbnail, #property-lefticon, #property-righticon, #property-actions').hide();
								break;								
							default: break;
							}
							return false;
						}
						,changeProperty: {  
							caption: 'Listitem type',
							rerender: true
						} 
					}
				]]
			},					
			{
				caption: 'Thumbnail',
				properties: [[
		  			{ 
		  				caption: false, 
		  				name: 'thumbnail', 
		  				proptype: 'thumbnail-source-list', 
		  				type: 'combo-asset', 
		  				displayValue: function(item,name,index) { 
		  				if(typeof(item.listitems[index].thumbnail) == 'undefined' || item.listitems[index].thumbnail.url == '') { return 'No thumbnail selected'; } 
		  				return item.listitems[index].thumbnail.name; }, 
		  				value: function(item,name,index) { 
		  					return $.toJSON({ allow: 'image', asset: item.listitems[index].thumbnail }); 
		  				}, 
						hiddenByDefault: function(item,name,index){
							return (item.listitems[index].itemtype != 'infoTitle');
						},
		  				changeProperty: { 
		  					caption: 'Thumbnail', 
		  					rerender: true 
		  				} 
		  			}
				]]
			},
			{ 
				caption: 'Left Icon',
				properties: [
				    [
			  			{ 
			  				caption: false, 
			  				name: 'leftIcon', 
			  				proptype: 'icon-source-2-secondary', 
			  				type: 'combo-asset', 
			  				displayValue: function(item,name,index) { 
			  					if(item.listitems[index].leftIcon.url == '') { return 'No asset selected.'; } 
			  					return item.listitems[index].leftIcon.name; 
			  				},
			  				value: function(item,name,index) { 
			  					return $.toJSON({ allow: 'image', asset: item.listitems[index].leftIcon }); 
			  				},
	
							hiddenByDefault: function(item,name,index){
								return (item.listitems[index].itemtype != 'actionItem' && item.listitems[index].itemtype != 'infoItem');
							},
			  				changeProperty: { 
			  					caption: 'Secondary Icon', 
			  					rerender: true 
			  				} 
			  			}
		  			]
				]
			},
			{ 
				caption: 'Right Icon',
				properties: [
				    [
			  			{ 
			  				caption: false, 
			  				name: 'rightIcon', 
			  				proptype: 'icon-source', 
			  				type: 'combo-asset', 
			  				displayValue: function(item,name,index) { 
			  					if(item.listitems[index].rightIcon.url == '') { return 'No asset selected.'; } 
			  					return item.listitems[index].rightIcon.name; 
			  				},
			  				value: function(item,name,index) { 
			  					return $.toJSON({ allow: 'image', asset: item.listitems[index].rightIcon }); 
			  				},
							hiddenByDefault: function(item,name,index){
								return (item.listitems[index].itemtype != 'infoItem');
							},
			  				changeProperty: { 
			  					caption: 'Icon', 
			  					rerender: true 
			  				} 
			  			}
		  			]
				]
			}
		]
	}
}

//TYPE = ACTION BOTTOM SHEET
prx.types.material_bottomsheet_action = prx.componentsHelper.cloneobject(prx.types.material_bottomsheet_complex);
prx.types.material_bottomsheet_action.name = 'material_bottomsheet_action';
prx.componentsHelper.removeProperties(prx.types.material_bottomsheet_action.propertyGroups, ['thumbnailSize', 'infoTitleColor', 'subSize', 'subColor', 'subProperties'])
prx.componentsHelper.removeProperties(prx.types.material_bottomsheet_action.dynamicProperties.propertyGroups, ['thumbnail','rightIcon']);
prx.types.material_bottomsheet_action.dynamicProperties.blankItem.itemtype = 'actionItem';
prx.types.material_bottomsheet_action.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_bottomsheet_action.dynamicProperties.propertyGroups, 'itemtype', 'values', [{ value: 'actionTitle', displayValue: 'Action Title'},{ value: 'actionItem', displayValue: 'Action Item'},{ value: 'separator', displayValue: 'Separator'}]);


//TYPE = INFO BOTTOM SHEET
prx.types.material_bottomsheet_info = prx.componentsHelper.cloneobject(prx.types.material_bottomsheet_complex);
prx.types.material_bottomsheet_info.name = 'material_bottomsheet_info';
prx.componentsHelper.removeProperties(prx.types.material_bottomsheet_info.propertyGroups, ['actionTitleColor'])
prx.types.material_bottomsheet_info.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_bottomsheet_info.dynamicProperties.blankItem, ['imgSrc','checked']);
prx.types.material_bottomsheet_info.dynamicProperties.blankItem.itemtype = 'infoItem';
prx.types.material_bottomsheet_info.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_bottomsheet_info.dynamicProperties.propertyGroups, 'itemtype', 'values', [{ value: 'infoTitle', displayValue: 'Info Title' },{ value: 'infoItem', displayValue: 'Info Item'},{ value: 'separator', displayValue: 'Separator'}]);


//TYPE: LIST COMPLEX
prx.types.material_list_complex = {
	name: "material_list_complex"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;		
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var listH = Math.round((dims.height - 1 - item.listitems.length) / item.listitems.length);
		var listItemH = (dims.height - (item.listitems.length + 1))/item.listitems.length;
		
		if(typeof(item.switchBackgroundColor) == 'undefined') { item.switchBackgroundColor = 'none'};
		if(typeof(item.switchBorderColor) == 'undefined') { item.switchBorderColor = '999999'};
		if(typeof(item.checkColor) == 'undefined') { item.checkColor = 'ffffff'};
		if(typeof(item.switchActiveColor) == 'undefined') { item.switchActiveColor = '2E7D32'};
		
		var hasIconLeft = false;
		var hasIconRight = false;
		var hasThumbLeft = false;
		var hasThumbRight = false;
		for(var i=0; i<item.listitems.length; i++) {
			if(typeof(item.listitems[i].thumbnail) != "undefined" && item.listitems[i].thumbnail.url != '' && item.thumbpos == 'left') {
				hasThumbLeft = true;
				break;
			}
		}
		for(var i=0; i<item.listitems.length; i++) {
			if(typeof(item.listitems[i].imgSrc) != "undefined" && item.listitems[i].imgSrc.url != '' && item.iconpos == 'left') {
				hasIconLeft = true;
				break;
			}
		}
		for(var i=0; i<item.listitems.length; i++) {
			if(typeof(item.listitems[i].imgSrc) != "undefined" && item.listitems[i].imgSrc.url != '' && item.iconpos == 'right') {
				hasIconRight = true;
				break;
			}
		}
		for(var i=0; i<item.listitems.length; i++) {
			if(typeof(item.listitems[i].thumbnail) != "undefined" && item.listitems[i].thumbnail.url != '' && item.thumbpos == 'right') {
				hasThumbRight = true;
				break;
			}
		}
			
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		var _subprops = (jQuery.inArray("bold",item.subtitleProperties)>-1) ? " font-weight: bold;" : "";
			_subprops += (jQuery.inArray("italic",item.subtitleProperties)>-1) ? " font-style: italic;" : "";
			_subprops += (jQuery.inArray("underline",item.subtitleProperties)>-1) ? " text-decoration: underline;" : "";	

		var cR = '<div id="'+_id+'" class="pos box type-material-list">';
		
		cR += '<style>';
		cR += '#' + _id + ' .material-list-inner { background-color: '+prx.utils.getColor(item.backgroundColor)+'; border: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; }';
		cR += '#' + _id + ' .material-list-icon-wrapper { width: '+Math.round((parseInt(listItemH)/2)-(7*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)-(7*prx.componentsHelper.getScale(item.lib)))+'px; }';
		cR += '#' + _id + ' .material-list-icon-wrapper.thumb { width: '+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px; }';
		if((item.iconpos == 'left' && item.thumbpos == 'right') || (item.iconpos == 'right' && item.thumbpos == 'left')) {
			cR += '#' + _id + ' .material-list-icon-wrapper { padding: 0;}';
		}
		if(item.thumbFrame) {
		cR += '#' + _id + ' .material-list-thumb { border: '+(1*prx.componentsHelper.getScale(item.lib))+'px solid '+prx.utils.getColor(item.thumbFrameColor)+'; }';
		}
		cR += '#' + _id + ' .listitem-border { border-top: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; }'
		if( hasThumbRight) {
			cR += '#' + _id + ' .listitem-border { right: '+((16*prx.componentsHelper.getScale(item.lib))+(10*prx.componentsHelper.getScale(item.lib))+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib))))+'px; }';
		}
		if(hasThumbLeft) {
			cR += '#' + _id + ' .listitem-border { left: '+((16*prx.componentsHelper.getScale(item.lib))+(10*prx.componentsHelper.getScale(item.lib))+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib))))+'px; }';
		}
		cR += '#' + _id + ' .material-list-text-wrapper { '+prx.css.flexAlignContent(item.textAlign)+' height: '+Math.round(listItemH)+'px; }';
		if(!(hasIconLeft || hasThumbLeft)) {
			cR += '#' + _id + ' .material-list-text-wrapper { padding-left: 0; }';
		}
		if(!(hasIconRight || hasThumbRight)) {
			cR += '#' + _id + ' .material-list-text-wrapper { padding-right: 0; }';
		}
		cR += '#' + _id + ' .material-list-text { '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; '+_props+' }';
		cR += '#' + _id + ' .material-list-subtitle { '+prx.componentsHelper.getFontCssFromFontFamily(item.subtitleFont)+'; font-size: '+item.subtitleSize+'px; color: '+prx.utils.getColor(item.subtitleColor)+'; '+_subprops+' }';
		cR += '#' + _id + ' .material-list-listitem-type-infoTitle .material-list-text { color: '+prx.utils.getColor(item.infoTitleColor)+'; }';
		cR += '#' + _id + ' .material-list-listitem-type-actionTitle .material-list-text { color: '+prx.utils.getColor(item.actionTitleColor)+'; }';
		cR += '#' + _id + ' .material-list-separator { background-color: '+prx.utils.getColor(item.dividerColor)+'; }';
		cR += '</style>';
		
		cR += '<div class="material-list-inner liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor">';
				
		$.each(item.listitems, function(i,elm){	
			
			if(typeof(elm.thumbnail) == "undefined") { elm.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""} };
			if(typeof(elm.leftIcon) == "undefined") { elm.leftIcon = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""} };
			if(typeof(elm.rightIcon) == "undefined") { elm.rightIcon = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}};
			if(typeof(item.subtitleSize) == "undefined") {item.subtitleSize = 12;}
			if(typeof(item.subtitleColor) == "undefined") {item.subtitleColor = '999999';} 
			if(typeof(item.subProperties) == "undefined") {item.subProperties = [];}
			if(typeof(item.subtitleColorActive) == "undefined") {item.subtitleColorActive = 'FFFFFF';}
						
			cR += '<style>';
			cR += '#' + _id + '-listitems-0 .listitem-border { border-top: 0 none;}';
			if((hasIconRight || hasIconLeft) && elm.imgSrc.url != '') {
				cR += '#' + _id + '-listitems-'+i+' .bordered-container .material-list-icon { background-image: url('+prx.componentsHelper.getAssetUrl(elm.imgSrc)+'); }';
			}	
			if((hasThumbRight || hasThumbLeft) && elm.thumbnail.url != '') {
				cR += '#' + _id + '-listitems-'+i+' .bordered-container .material-list-thumb { background-image: url('+prx.componentsHelper.getAssetUrl(elm.thumbnail)+'); }';
			}
			
			cR += '#' + _id + ' .material-list-switch { width: '+Math.round(listItemH/2.8)+'px; height: '+Math.round(listItemH/2.8)+'px; border-color: '+prx.utils.getColor(item.switchBorderColor)+'; }'
			cR += '#' + _id + ' .material-list-switch.checkbox { background-color: '+prx.utils.getColor(item.switchBackgroundColor)+'; }';
			cR += '#' + _id + ' .material-list-switch.radio { width: '+Math.round(listItemH/2.5)+'px; height: '+Math.round(listItemH/2.5)+'px; }';
			cR += '#' + _id + ' input:checked + label .material-list-switch { border-color: '+prx.utils.getColor(item.switchActiveColor)+'; }';
			cR += '#' + _id + ' .material-list-switch.checkbox .check { background-color: '+prx.utils.getColor(item.checkColor)+'; }'
			cR += '#' + _id + ' input:checked + label .material-list-switch.checkbox { background-color: '+prx.utils.getColor(item.switchActiveColor)+'; }';
			cR += '#' + _id + ' .material-list-switch.radio .circle { background-color: '+prx.utils.getColor(item.switchActiveColor)+'; }'
			cR += '#' + _id + ' input:checked + label .material-list-switch.radio .circle { background-color: '+prx.utils.getColor(item.switchActiveColor)+';}';
			cR += '</style>';					
			
			var icon = '';
			var thumb = '';
						
			if(hasIconRight || hasIconLeft)
				icon += '<div class="material-list-icon-wrapper '+item.iconpos+'"><div class="material-list-icon"></div></div>';				
			if(hasThumbRight || hasThumbLeft)
				thumb += '<div class="material-list-icon-wrapper thumb '+item.thumbpos+'"><div class="material-list-thumb liveUpdate-thumbFrameColor changeProperty-thumbFrameColor"></div></div>';
			
			cR += '<div id="'+_id+'-listitems-'+i+'" class="'+((item.rippleEffect) ? 'prx-material-ripple ' : '' )+'dynamic-property material-list-listitem material-list-listitem-type-'+elm.itemtype+'" data-dynamic-property-index="'+i+'">';
						
			cR += '<input type="'+((elm.itemtype == 'withCheckbox') ? 'checkbox': 'radio') +'" name="'+_id+'-checkbox" id="'+_id+'-checkbox-'+i+'" data-role="none" '+ ((typeof(elm.checked) != "undefined" && elm.checked) ? 'checked' : '') +' />';
			cR +=' <label  for="'+_id+'-checkbox-'+i+'">'
			
			cR += '<div class="listitem-border liveUpdate-borderColor changeProperty-borderColor"></div>';
								
			cR += '<div class="bordered-container">';	
				
			if(item.thumbpos == "left" && elm.thumbnail.url != '') {cR += thumb; }	
			if(hasThumbLeft && (elm.thumbnail.url == '' || (item.thumbpos == "right" && elm.thumbnail.url != ''))) cR += '<div class="material-list-icon-wrapper left thumb"></div>';
			
			if(item.iconpos == "left" && elm.imgSrc.url != '') { cR += icon; }
			if(hasIconLeft && (elm.imgSrc.url == '' || (item.iconpos == "right" && elm.imgSrc.url != ''))) cR += '<div class="material-list-icon-wrapper left"></div>';
			
			cR += '<div class="material-list-text-wrapper '+((hasThumbRight || hasThumbLeft) ? 'thumb' : '')+'">';
			cR += '<div class="material-list-text liveUpdate-textColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-textAlign">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+elm.text+'</span>';
			cR += '</div>';
			cR += '<div class="material-list-subtitle liveUpdate-textColorSubtitle changeProperty-textColorSubtitle changeProperty-textFontSubtitle changeProperty-textSizeSubtitle">';
			cR += '<span data-editableproperty="subtitle" data-dynamic-property-index="'+i+'">'+elm.subtitle+'</span>';
			cR += '</div>';
			cR += '</div>';		
			
			if(elm.itemtype == 'withCheckbox' || elm.itemtype == 'withRadio') { 				
				cR += '<div class="material-list-switch '+((elm.itemtype == 'withCheckbox') ? 'checkbox' : 'radio')+' liveUpdate-switchBackgroundColor liveUpdate-switchBorderColor changeProperty-switchBackgroundColor changeProperty-switchBorderColor">';
				cR += '<span class="liveUpdate-switchActiveColor changeProperty-switchActiveColor ';
				if(elm.itemtype == 'withCheckbox') { cR += 'check-container" data-clickable="true"><span class="check short"></span><span class="check long"></span>';}
				if(elm.itemtype == 'withRadio') { cR += 'circle">';}
				cR += '</span>';
				cR += '</div>';
			}

			if(elm.itemtype != 'withCheckbox' && elm.itemtype != 'withRadio' && item.iconpos == "right" && elm.imgSrc.url != '') { cR += icon; }
			if(elm.itemtype != 'withCheckbox' && elm.itemtype != 'withRadio' && hasIconRight && (elm.imgSrc.url == '' || (item.iconpos == "left" && elm.imgSrc.url != ''))) { cR += '<div class="material-list-icon-wrapper right"></div>';}
	
			if(elm.itemtype != 'withCheckbox' && elm.itemtype != 'withRadio' && item.thumbpos == "right" && elm.thumbnail.url != '') {cR += thumb; }	
			if(elm.itemtype != 'withCheckbox' && elm.itemtype != 'withRadio' &&hasThumbRight && (elm.thumbnail.url == '' || (item.thumbpos == "left" && elm.thumbnail.url != ''))) { cR += '<div class="material-list-icon-wrapper right thumb"></div>';}

			cR += '</div>';
			cR += '</label>';
			cR += '</div>';
		});
		cR += '</div></div>';	
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var dims = prx.componentsHelper.getRealDims(item);
		var listItemH = (dims.height - (item.listitems.length + 1))/item.listitems.length;
		
		$('#' + _id).find('.material-list-icon-wrapper').css({
			'width': Math.round((listItemH/2)-(7*prx.componentsHelper.getScale(item.lib)))+'px',
			'height': Math.round((listItemH/2)-(7*prx.componentsHelper.getScale(item.lib)))+'px'
		});
		$('#' + _id).find('.material-list-icon-wrapper.thumb').css({
			'width': Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px',
			'height': Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px'
		});
		$('#' + _id).find('.material-list-text-wrapper').css({
			'height': Math.round(listItemH)+'px'
		});
		
		if(item.thumbpos == 'right') {
			$('#' + _id).find('.listitem-border').css({ 
				'right': ((16*prx.componentsHelper.getScale(item.lib))+(10*prx.componentsHelper.getScale(item.lib))+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib))))+'px' 
			});
		}
		if(item.thumbpos == 'left') {
			$('#' + _id).find('.listitem-border').css({ 
				'left': ((16*prx.componentsHelper.getScale(item.lib))+(10*prx.componentsHelper.getScale(item.lib))+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib))))+'px'
			});
		}
		
		$('#' + _id).find('.material-list-switch').css({
			'width': Math.round(listItemH/2.8)+'px',
			'height': Math.round(listItemH/2.8)+'px'
		});
		$('#' + _id).find('.material-list-switch.radio').css({
			'width': Math.round(listItemH/2.5)+'px',
			'height': Math.round(listItemH/2.5)+'px'
		});
		$('#' + _id).find('.material-list-switch .check').css({
			'font-size': Math.round(listItemH/2.8)+'px',
			'line-height': Math.round(listItemH/2.8)+'px'
		});

	}
	,propertyGroups: [
		{
			caption: 'List',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor,
					{
						caption: 'Border',
						name: 'borderWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name)
						{
							if(typeof(item.borderWidth) == "undefined") {
								return 1;
							}
							return item.borderWidth;
						},
						values: { min: 0, max: 20, step: 2 }
						,changeProperty: {
							caption: 'Border width',
							rerender: true
						}

					},
					{ 
						caption: false, 
						name: 'borderColor', 
						proptype: 'border-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.borderColor; 
						}, 
						values: prx.comps.materialColors,
						liveUpdate: 'border-color', 
						changeProperty: { 
							caption: 'Border color',
							transitionable: true 
						} 
					}
				]
			]
		},
		{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.materialTextColor
				],	
				[
					prx.commonproperties.textProperties,
					prx.commonproperties.textAlign
				]
			]
		},
		{
			caption: 'Subtitle',
			properties: [				
				[
				 	prx.commonproperties.textFontSubtitle,
					prx.commonproperties.textSizeSubtitle,
					prx.commonproperties.materialTextColorSubtitle
				],
				[
					prx.commonproperties.textPropertiesSubtitle
				]
			]
		},
		{
			caption: 'Avatar',
			properties: [
				[
					{
						caption: 'Avatar Border?'
						,name: 'thumbFrame'
						,type: 'onoff'
						,value: function(item,name,index){
							return item.thumbFrame;
						}
						,onChange: function(item){
							if(item.thumbFrame) {
								$('#property-thumbFrameColor').show();
							} else {
								$('#property-thumbFrameColor').hide();
							}	
						}
						,changeProperty: {  
							caption: 'Activate/Deactivate thumbnail frames',
							rerender: true
						}  
					
					},
					{ 
						caption: false, 
						name: 'thumbFrameColor', 
						proptype: 'border-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.thumbFrameColor; 
						}, 
						values: prx.comps.materialColors,
						hiddenByDefault: function(item,name,index){
							return !item.thumbFrame;
						},
						liveUpdate: 'border-color', 
						changeProperty: { 
							caption: 'Border color', 
							selector: '.changeProperty-thumbFrameColor',
							 property: 'border-color',
							transistionable: true 
						} 
					}
				],
				[
					{
						caption: 'Position'
						,name: 'thumbpos'
						,proptype: 'thumbnail-position'
						,type: 'select'
						,value: function(item,name,index) {
							return item.thumbpos;
						}
						,values: [{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'}]
						,changeProperty: {  
							caption: 'Thumbnail position',
							rerender: true,
							changeable: false
						}  
		
					}
				] 
			]
		},
		{
			caption: 'Icon',
			properties: [
	            [
					{
						caption: 'Position'
						,name: 'iconpos'
						,proptype: 'icon-position'
						,type: 'select'
						,value: function(item,name,index) {
							return item.iconpos;
						}
						,values: [{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'}]
						,changeProperty: {  
							caption: 'Thumbnail position',
							rerender: true,
							changeable: false
						}  
					
					}	             	
	            ]
            ]
		},
		prx.commonproperties.materialRipple
	]
	,dynamicProperties: {
		data: 'listitems'
		,propertyCaption: 'List items'
  		,propertyName: 'List item'
		,addCaption: 'Add list item'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Label'
			,itemtype: 'basic'
			,subtitle: 'Subtitle'
			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
			,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
			,actions: []
		}
		,captionProperty: 'text' 
		,editableProperties: [
			{
				caption: 'Label'
				,name: 'text'
				,type: 'input'
				,value: function(item,name,index) {
					return item.listitems[index].text;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype == 'separator');
				}
				,changeProperty: {  
					caption: 'Label',
					property: 'text',
					selector: '.material-list-text',
					transitionable: false
				}  

			},
			{
				caption: 'Subtitle'
				,name: 'subtitle'
				,type: 'textarea'
				,value: function(item,name,index) {
					if(typeof(item.listitems[index].subtitle) == 'undefined') { return ''; }
					return item.listitems[index].subtitle;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype == 'separator');
				}
				,changeProperty: {  
					caption: 'Subtitle Text',
					property: 'text',
					selector: '.material-list-subtitle',
					transitionable: false
				}  
			}
		]
		,interactions: [
			{
				caption: 'Interactions'
				,name: 'actions'
				,type: 'action'
				,value: function(item,name,index) {
					if (typeof(item.listitems[index].actions) == "undefined") {
						item.listitems[index].actions = [];
					}		
				
					return item.listitems[index].actions.length;
				}
			}
		                ]
		                
		,propertyGroups: [
			{
				caption:  'Style',
				properties: [[
					{
						caption: false //'List item Type'
						,name: 'itemtype'
						,type: 'select'
						,value: function(item,name,index) {
							if(typeof(item.listitems[index].itemtype) == "undefined") {
								item.listitems[index].itemtype = 'basic'
							}
							return item.listitems[index].itemtype;
						}
						,values: [
								  { value: 'basic', displayValue: 'Basic'}
								  ,{ value: 'withAvatar', displayValue: 'With Avatar' }
								  ,{ value: 'withIcon', displayValue: 'With Icon' }
								  ,{ value: 'withAvatarIcon', displayValue: 'With Avatar and Icon'}
								  ,{ value: 'withCheckbox', displayValue: 'Checkbox (On/off)'}
								  ,{ value: 'withRadio', displayValue: 'Radio (On/off)'}
						],
						onChange: function(item, index) {
							switch(item.itemtype) {
							case 'basic':
								item.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""};
								item.imgSrc = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""};
								$('#property-checked').hide();
								return item;
								break;
							case 'withAvatar':
								item.thumbnail = {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"};
								item.imgSrc = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""};
								$('#property-checked').hide();
								return item;
								break;
							case 'withIcon':
								item.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""};
								item.imgSrc = {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
								$('#property-checked').hide();
								return item;
								break;
							case 'withAvatarIcon':
								item.thumbnail = {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"};
								item.imgSrc = {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
								$('#property-checked').hide();
								return item;
								break;
							case 'withCheckbox':
							case 'withRadio':
								item.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""};
								item.imgSrc = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""};
								return item;
								break;							
							default: break;
							}
							return false;
						}
						,changeProperty: {  
							caption: 'Listitem type',
							rerender: true
						} 
					}
				]]
			},			
			{
				caption: 'Thumbnail',
				properties: [[
				    prx.commonproperties.thumbnailSourceList
				]]
			},
			{ 
				caption: 'Icon',
				properties: [
				    [
			  			{ 
			  				caption: false, 
			  				name: 'imgSrc', 
			  				proptype: 'icon-source', 
			  				type: 'combo-asset', 
			  				displayValue: function(item,name,index) { 
			  					if(item.listitems[index].imgSrc.url == '') { return 'No asset selected.'; } 
			  					return item.listitems[index].imgSrc.name; 
			  				},
			  				value: function(item,name,index) { 
			  					return $.toJSON({ allow: 'image', asset: item.listitems[index].imgSrc }); 
			  				},
							hiddenByDefault: function(item,name,index){
								return (item.listitems[index].itemtype == 'withCheckbox' || item.listitems[index].itemtype == 'withRadio');
							},
			  				changeProperty: { 
			  					caption: 'Icon', 
			  					rerender: true 
			  				} 
			  			}
						]
				]
			},
			{
				caption: 'Checkbox state',
				properties: [[
					{
						caption: 'Checked?'
						,name: 'checked'
						,proptype: 'checked'
						,type: 'onoff'
						,value: function(item,name,index){
							return item.listitems[index].checked;
						}
						,hiddenByDefault: function(item,name,index){
							return (item.listitems[index].itemtype != 'withCheckbox' && item.listitems[index].itemtype != 'withRadio');
						}
						,changeProperty: {  
							caption: 'Checkbox active state',
							rerender: true
						}  

					}
				]]
			}
		]
	}
}

//TYPE = BASIC LIST
prx.types.material_list_basic = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_basic.name = 'material_list_basic';
prx.componentsHelper.removeProperties(prx.types.material_list_basic.propertyGroups, ['thumbpos','thumbFrame','thumbFrameColor','iconpos']);
prx.componentsHelper.removeProperties(prx.types.material_list_basic.dynamicProperties.propertyGroups, ['itemtype','thumbnail','imgSrc']);
prx.types.material_list_basic.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_list_basic.dynamicProperties.blankItem, ['checked']);
prx.types.material_list_basic.dynamicProperties.blankItem.itemtype = 'basic';
prx.types.material_list_basic.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_basic.dynamicProperties.blankItem.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""};
prx.types.material_list_basic.dynamicProperties.blankItem.imgSrc = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""};
prx.types.material_list_basic.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_basic.dynamicProperties.propertyGroups, 'itemtype', 'value', 'basic');
prx.types.material_list_basic.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_basic.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = LIST WITH AVATAR
prx.types.material_list_avatar = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_avatar.name = 'material_list_avatar';
prx.componentsHelper.removeProperties(prx.types.material_list_avatar.propertyGroups, ['iconpos']);
prx.componentsHelper.removeProperties(prx.types.material_list_avatar.dynamicProperties.propertyGroups, ['itemtype','imgSrc']);
prx.types.material_list_avatar.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_list_avatar.dynamicProperties.blankItem, ['checked']);
prx.types.material_list_avatar.dynamicProperties.blankItem.itemtype = 'withAvatar';
prx.types.material_list_avatar.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_avatar.dynamicProperties.blankItem.thumbnail = {"fileId":"56f6ac46a0eb9f024735e3007529b884.svg","name":"account_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/56f6ac46a0eb9f024735e3007529b884.svg","folderId":"f1424091456673","targetSrc":"generated/56f6ac46a0eb9f024735e3007529b884_7d7d7d.svg","color":"757575"};
prx.types.material_list_avatar.dynamicProperties.blankItem.imgSrc = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""};
prx.types.material_list_avatar.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_avatar.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withAvatar');
prx.types.material_list_avatar.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_avatar.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = LIST WITH ICON
prx.types.material_list_icon = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_icon.name = 'material_list_icon';
prx.componentsHelper.removeProperties(prx.types.material_list_icon.propertyGroups, ['thumbpos','thumbFrame','thumbFrameColor']);
prx.componentsHelper.removeProperties(prx.types.material_list_icon.dynamicProperties.propertyGroups, ['itemtype','thumbnail']);
prx.types.material_list_icon.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_list_icon.dynamicProperties.blankItem, ['checked']);
prx.types.material_list_icon.dynamicProperties.blankItem.itemtype = 'withIcon';
prx.types.material_list_icon.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_icon.dynamicProperties.blankItem.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""};
prx.types.material_list_icon.dynamicProperties.blankItem.imgSrc = {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
prx.types.material_list_icon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_icon.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withIcon');
prx.types.material_list_icon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_icon.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = LIST WITH AVATAR AND ICON
prx.types.material_list_avatar_icon = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_avatar_icon.name = 'material_list_avatar_icon';
prx.componentsHelper.removeProperties(prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups, ['itemtype']);
prx.types.material_list_avatar_icon.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_list_avatar_icon.dynamicProperties.blankItem, ['checked']);
prx.types.material_list_avatar_icon.dynamicProperties.blankItem.itemtype = 'withAvatarIcon';
prx.types.material_list_avatar_icon.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_avatar_icon.dynamicProperties.blankItem.thumbnail = {"fileId":"56f6ac46a0eb9f024735e3007529b884.svg","name":"account_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/56f6ac46a0eb9f024735e3007529b884.svg","folderId":"f1424091456673","targetSrc":"generated/56f6ac46a0eb9f024735e3007529b884_7d7d7d.svg","color":"757575"};
prx.types.material_list_avatar_icon.dynamicProperties.blankItem.imgSrc = {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withAvatarIcon');
prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = RADIO LIST
prx.types.material_list_radio = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_radio.name = 'android_listradio';
prx.componentsHelper.removeProperties(prx.types.material_list_radio.propertyGroups, ['iconpos']);
prx.componentsHelper.removeProperties(prx.types.material_list_radio.dynamicProperties.propertyGroups, ['itemtype','imgSrc']);
prx.types.material_list_radio.dynamicProperties.blankItem.itemtype = 'withRadio';
prx.types.material_list_radio.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_radio.dynamicProperties.blankItem.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""};
prx.types.material_list_radio.dynamicProperties.blankItem.imgSrc = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""};
prx.types.material_list_radio.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_radio.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withRadio');
prx.types.material_list_radio.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_radio.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = CHECKBOX LIST
prx.types.material_list_checkbox = prx.componentsHelper.cloneobject(prx.types.material_list_radio);
prx.types.material_list_checkbox.name = 'material_list_checkbox';
prx.componentsHelper.removeProperties(prx.types.material_list_radio.propertyGroups, ['iconpos']);
prx.componentsHelper.removeProperties(prx.types.material_list_radio.dynamicProperties.propertyGroups, ['itemtype','imgSrc']);
prx.types.material_list_checkbox.dynamicProperties.blankItem.itemtype = 'withCheckbox';
prx.types.material_list_checkbox.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_checkbox.dynamicProperties.blankItem.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""};
prx.types.material_list_checkbox.dynamicProperties.blankItem.imgSrc = {"fileId":"","folderId":"","url":"","assetType":"icon","name":""};
prx.types.material_list_checkbox.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_checkbox.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withCheckbox');


/***** OTHER COMPONENTS *****/

//TYPE: ACTION AREA
prx.types.material_ripple = {
	name: "material_ripple"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(typeof(item.circ) == "undefined") { item.circ = false; }

		var cR = '';

		cR += '<div id="' + _id + '" class="box pos type-material-ripple">';

		cR += '<style>'
		cR += '#'+_id+' .inner-rec { background-color: '+prx.utils.getColor(item.rippleEffectColor)+'; }';
		cR += '</style>'

		cR += '<div class="inner-rec liveUpdate-rippleEffectColor prx-material-ripple '+((item.circ) ? 'type-material-ripple-circ' : '')+'"><div></div></div>';
		cR += '</div>';
		return cR;
	}
	,interactions: [
		prx.commonproperties.actions
	]
	,propertyGroups: [
		{
			caption: "Ripple effect",
			properties: [[
				{
					caption: false,
					name: 'rippleEffectColor',
					type: 'colorpicker',
					value: function (item, name) {
						return item.rippleEffectColor;
					},
					liveUpdate: 'background-color',
					changeProperty: {
						caption: 'Ripple effect color',
						rerender: true
					}
				}
			]]
		}
	]
};


//TYPE: TOAST
prx.types.material_toast = {
	name: "material_toast"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
				
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-material-toast">';
		
		cR += '<style>'
		cR += '#'+_id+' .material-toast-wrapper { border-radius: '+Math.round(dims.height/2)+'px; background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#'+_id+' .material-toast-inner { '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; '+_props+' }';
		cR += '</style>'
				
		cR += '<div class="material-toast-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="material-toast-inner liveUpdate-textColor changeProperty-text changeProperty-textFont changeProperty-textSize changeProperty-textColor"><span data-editableproperty="text">' + item.text + '</span></div>';
		cR += '</div>'
		cR += '</div>'
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);
		
		$('#'+_id).find('.material-toast-wrapper').css('border-radius', Math.round(dims.height/2)+'px');
	}
	,interactions:
		[
			prx.commonproperties.actions
		]
	,editableProperties: [
	        prx.commonproperties.text
	]
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor 
				],
				[
					{ 
						caption: 'Color', 
						name: 'shadowColor', 
						proptype: 'shadow-color',
						type: 'colorpicker', 
						value: function(item,name) { 
							return item.shadowColor; 
						} 
						,hiddenByDefault: function(item) {
							return (!item.enableShadow);
						}
						,changeProperty: {  
							caption: 'Shadow color',
							rerender: true
						} 
					}
				]
			]
		},
		{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.materialTextColor
				],[
					prx.commonproperties.textProperties
				]
			]
		}
	]
	
}

//TYPE: SNACKBAR WITH ACTION
prx.types.material_snackbar_action = {
	name: "material_snackbar_action"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
			
		if(item.hasAction) {
		var _actionprops = (jQuery.inArray("bold",item.actionProperties)>-1) ? " font-weight: bold;" : "";
			_actionprops += (jQuery.inArray("italic",item.actionProperties)>-1) ? " font-style: italic;" : "";
			_actionprops += (jQuery.inArray("underline",item.actionProperties)>-1) ? " text-decoration: underline;" : "";
		}
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-material-snackbar">';
		
		cR += '<style>';
		cR += '#' + _id + ' .material-snackbar-wrapper { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#' + _id + ' .material-snackbar-text { color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; '+_props+'}';
		cR += '#' + _id + ' .material-snackbar-close-separator { background-color: '+prx.utils.getColor(item.separatorColor)+';}';
		if(item.hasAction) {
		cR += '#' + _id + ' .material-snackbar-action-text { color: '+prx.utils.getColor(item.actionColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.actionFont)+' font-size: '+item.actionSize+'px; '+_actionprops+'}';
		}
		cR += '</style>';
		
		cR += '<div class="material-snackbar-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="material-snackbar-text liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont actions-actions1"><span data-editableproperty="text">'+item.text+'</span></div>';
		if(item.hasAction) {
		cR += '<div class="material-snackbar-action-text liveUpdate-actionColor changeProperty-actiontColor changeProperty-actionSize changeProperty-actionFont actions-actions2 '+((item.rippleEffect) ? 'prx-material-ripple' : '' )+'" data-editableproperty="action">'+item.action+'</div>';
		}
		cR += '</div>';
		return cR;
	}
	,interactions:[
   		{ 
			caption: 'Interactions', 
			name: 'actions1', 
			type: 'action', 
			value: function(item,name) {
				return item.actions1.length; 
			}, 
			changeProperty: { caption: 'Interactions', selector: '.actions-actions1', property: 'action', transitionable: false, changeable: false } 
		},
		{ 
			caption: 'Action interactions', 
			name: 'actions2', 
			type: 'action', 
			value: function(item,name) {
				return item.actions2.length; 
			},
			hiddenByDefault: function(item) {
				return (!item.hasAction);
			}, 
			changeProperty: { caption: 'Action interactions', selector: '.actions-actions2', property: 'action', transitionable: false, changeable: false }
		}
   	]
	,editableProperties: [
	    {
			caption: 'Text'
			,name: 'text'
			,type: 'input'
			,value: function(item,name) {
				return item.text;
			}
        	,changeProperty: {
        		caption: 'Text',
        		selector: '.material-snackbar-text',
        		property: 'text',
        		transitionable: false
        	}
		},
		{
			caption: 'Action'
			,name: 'action'
			,type: 'input'
			,value: function(item,name) {
				return item.action;
			},
			hiddenByDefault: function(item) {
				return (!item.hasAction);
			},
			changeProperty: {
				caption: 'Action',
				selector: '.material-snackbar-action-text',
				property: 'text',
				transitionable: false
			}
		}	
  	]
	,propertyGroups: [
		{
  		    caption: 'Style',
  		    properties: [
  		        [
  					prx.commonproperties.materialBackgroundColor
  				]
  			]
  		},
  		{
  		    caption: 'Text',
  		    properties: [
  		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.materialTextColor
				],
				[
					prx.commonproperties.textProperties
				]
  			]
  		},
  		{
  		    caption: 'Action',
  		    properties: [
				[
					{ 
						caption: false, 
						name: 'actionFont',
						proptype: 'font-family-3-action',
						type: 'select', 
						value: function(item,name) { 
							return item.actionFont; 
						}, 
						values: function(){ 
							return prx.comps.fonts 
						}, 
						hiddenByDefault: function(item) {
							return (!item.hasAction);
						},
						changeProperty: { 
							caption: 'Action font', 
							selector: '.changeProperty-actionFont', 
							property: 'font-family', 
							transitionable: false 
						} 
					},
					{ 
						caption: false, 
						name: 'actionSize', 
						proptype: 'font-size-5-action',
						type: 'combo-select', 
						value: function(item,name) { 
							return item.actionSize; 
						}, 
						values: prx.comps.textsize, 
						hiddenByDefault: function(item) {
							return (!item.hasAction);
						},
						changeProperty: { 
							caption: 'Action size', 
							selector: '.changeProperty-actionSize', 
							property: 'font-size', 
							transitionable: true 
						} 
					},
					{ 
						caption: false, 
						name: 'actionColor',
						proptype: 'font-color-5-action', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.actionColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.hasAction);
						},
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Action color', 
							selector: '.changeProperty-actionColor', 
							property: 'color', 
							transitionable: true 
						} 
					}
				],
				[
					{ 
						caption: false, 
						name: 'actionProperties',
						proptype: 'text-properties-4-action',
						type: 'checkbox', 
						value: function(item,name) { 
							if(typeof(item.actionProperties) == "undefined") {
								item.actionProperties = [];
							} 
							return item.actionProperties; 
						}, 
						values: 
						[
					         { value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, 
					         { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, 
					         { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}
					    ], 
					    hiddenByDefault: function(item) {
							return (!item.hasAction);
						},
						changeProperty: {
							caption: 'Action properties',
							rerender: true 
						} 
					}
				]
  			]
  		},
		prx.commonproperties.materialRipple
  		
    ]
}

//TYPE = SIMPLE SNACKBAR
prx.types.material_snackbar = prx.componentsHelper.cloneobject(prx.types.material_snackbar_action);
prx.types.material_snackbar.name = 'material_snackbar';
prx.componentsHelper.removeProperties(prx.types.material_snackbar.propertyGroups, ['actionFont', 'actionSize', 'actionColor', 'actionProperties','rippleEffect','rippleEffectColor']);


/* ALERT DIALOG */
prx.types.material_dialog_alert = {
	name: "material_dialog_alert"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		if(typeof(item.confirmDialog) == 'undefined') { item.confirmDialog = false;}
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
			
		var _titleprops = (jQuery.inArray("bold",item.titleProperties)>-1) ? " font-weight: bold;" : "";
			_titleprops += (jQuery.inArray("italic",item.titleProperties)>-1) ? " font-style: italic;" : "";
			_titleprops += (jQuery.inArray("underline",item.titleProperties)>-1) ? " text-decoration: underline;" : "";
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-material-dialog">';
		
		cR += '<style>';
		cR += '#' + _id + ' .material-dialog-wrapper { background-color: '+prx.utils.getColor(item.backgroundColor)+'; font-size: '+item.textSize+'px; }';
		cR += '#' + _id + ' .material-dialog-title { color: '+prx.utils.getColor(item.titleColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.titleSize+'px; '+_titleprops+' }';
		cR += '#' + _id + ' .material-dialog-text { color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; '+_props+' }';
		if(item.confirmDialog) {
		cR += '#' + _id + ' .material-dialog-text { border-bottom: '+(1*prx.componentsHelper.getScale(item.lib))+'px solid #ddd;}';
		}
		if(item.name == 'material_dialog_confirmation') {
			cR += '#' + _id + ' .material-dialog-buttons { padding: '+(4*prx.componentsHelper.getScale(item.lib))+'px '+(24*prx.componentsHelper.getScale(item.lib))+'px '+(8*prx.componentsHelper.getScale(item.lib))+'px 0;}';
		}
		cR += '</style>';
		
		cR += '<div class="material-dialog-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		if(item.withTitle) {
		cR += '<div class="material-dialog-title liveUpdate-titleColor changeProperty-titleColor changeProperty-titleSize changeProperty-textFont"><span data-editableproperty="title">'+item.title+'</span></div>';
		}
		cR += '<div class="material-dialog-text liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-textAlign"><span data-editableproperty="text">'+item.text+'</span></div>';
		cR += '<div class="material-dialog-buttons liveUpdate-borderColor liveUpdate-borderWidth changeProperty-borderColor changeProperty-borderWidth">'
		
		$.each(item.buttons, function(i,elm) {
			var _button_props = (jQuery.inArray("bold",elm.textProperties)>-1) ? " font-weight: bold;" : "";
			_button_props += (jQuery.inArray("italic",elm.textProperties)>-1) ? " font-style: italic;" : "";
			_button_props += (jQuery.inArray("underline",elm.textProperties)>-1) ? " text-decoration: underline;" : "";
			
			cR += '<div id="'+_id+'-buttons-'+i+'" class="material-dialog-button '+((item.rippleEffect) ? 'prx-material-ripple ' : '' )+'dynamic-property liveUpdate-buttonColor-'+i+' changeProperty-buttonColor changeProperty-buttonSize" data-dynamic-property-index="'+i+'" style="font-size: '+item.buttonSize+'px; '+_button_props+' color: '+prx.utils.getColor(elm.textColor)+';">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + elm.text + '</span>';
			cR += '</div>';
		});
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,editableProperties: [
		{
			caption: 'Title'
			,name: 'title'
			,type: 'input'
			,value: function(item,name) {
				return item.title;
			}
			,hiddenByDefault: function(item) {
				return (!item.withTitle);
			}
			,changeProperty: {
				caption: 'Title',
				selector: '.material-dialog-title',
				property: 'text',
				transitionable: false
			}
		},
	    {
			caption: 'Text'
			,name: 'text'
			,type: 'input'
			,value: function(item,name) {
				return item.text;
			}
			,hiddenByDefault: function(item) {
				return (!item.withText);
			}
        	,changeProperty: {
        		caption: 'Text',
        		selector: '.material-dialog-text',
        		property: 'text',
        		transitionable: false
        	}
		}
  	]
	,propertyGroups: [
		{
		    caption: 'Style',
		    properties: [[
				prx.commonproperties.materialBackgroundColor
			]]
		},
		{
			caption: 'Title',
		    properties: [
		        [
					{ 
						caption: false, 
						name: 'titleSize', 
						proptype: 'font-size-6-title',
						type: 'combo-select', 
						value: function(item,name) { 
							return item.titleSize;
						}, 
						values: prx.comps.textsize,	
						hiddenByDefault: function(item) {
							return (!item.withTitle);
						},					
						changeProperty: { 
							caption: 'Title size', 
							selector: '.changeProperty-titleSize', 
							property: 'font-size', 
							transitionable: true 
						} 
					},
		         	{ 
						caption: false, 
						name: 'titleColor', 
						proptype: 'font-color-6-title',
						type: 'combo-colorpicker', 
						value: function(item,name,index) { 
							return item.titleColor;
						},
						liveUpdate: 'color', 
						values: prx.comps.materialColors,	
						hiddenByDefault: function(item) {
							return (!item.withTitle);
						},			
						changeProperty: { 
							caption: 'Title color', 
							selector: '.changeProperty-titleColor', 
							property: 'color', 
							transitionable: true
						} 
					},
					{ 
		         		caption: false, 
		         		name: 'titleProperties', 
						proptype: 'text-properties-5-title',
		         		type: 'checkbox', 
		         		value: function(item,name,index) {  
		         			return item.titleProperties; 
		         		}, 		         		
		         		values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}], 
		    			hiddenByDefault: function(item) {
		    				return (!item.withTitle);
		    			},
		         		changeProperty: { 
		         			caption: 'Title properties', 
		         			rerender: true 
		         		} 
		         	}		         	
	         ]]
		},
		{
		    caption: 'Text',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.materialTextColor
				],
				[
					prx.commonproperties.textProperties
				]
		     
			]
		},
		{
			 caption: 'Buttons',
			    properties: [
			        [
						{ 
							caption: false, 
							name: 'buttonSize', 
							proptype: 'font-size',
							type: 'combo-select', 
							value: function(item,name,index) { 
								if(typeof(item.buttonSize) == 'undefined') {
									return 14*prx.componentsHelper.getScale(item.lib);
								}
								return item.buttonSize;
							}, 
							values: prx.comps.textsize,						
							changeProperty: { 
								caption: 'Button text size', 
								selector: '.changeProperty-buttonSize', 
								property: 'font-size', 
								transitionable: true 
							} 
						}
					]
			]
		},
		prx.commonproperties.materialRipple
    ]
	,dynamicProperties: {
   		data: 'buttons'
   		,propertyCaption: 'Buttons'
    	,propertyName: 'Button'
   		,addCaption: 'Add button'
   		,deleteCaption: 'Delete'
   		,captionProperty: 'text'
   		,blankItem: {
			text: 'Action',
   			actions: [],
   			textColor: '2196F3',
   			textSize: 14*prx.componentsHelper.getScale('material'),
   			textProperties: ['bold']
   		}
   		,interactions: [
   			{
  				caption: 'Interactions'
  				,name: 'actions'
  				,type: 'action'
  				,value: function(item,name,index) {
  					if (typeof(item.buttons[index].actions) == "undefined") {
  						item.buttons[index].actions = [];
  					}		
  				
  					return item.buttons[index].actions.length;
  				}
  			}    
   		]
   		,editableProperties: [
  			{
 				caption: 'Text'
 				,name: 'text'
 				,type: 'input'
 				,value: function(item,name,index) {
 					return item.buttons[index].text;
 				}
 				,changeProperty: {
					caption: 'Text',
					selector: 'label',
					property: 'text',
					transitionable: false
				 }
 			}
  		],
  		propertyGroups: [
   	   		{
   	   		    caption: 'Text',
   	   		    properties: [
   	   		        [
   	   		         	{ 
   	   		         		caption: false, 
   	   		         		name: 'textColor',
   	   		         		proptype: 'font-color',
   	   		         		type: 'combo-colorpicker', 
   	   		         		value: function(item,name,index) { 
   	   		         			return item.buttons[index].textColor; 
   	   		         		},
   	   		         		liveUpdate: 'color', 
   							values: prx.comps.materialColors,
   	   		         		changeProperty: { 
   	   		         			caption: 'Text color', 
   	   		         			selector: '.changeProperty-buttonColor', 
   	   		         			property: 'color', 
   	   		         			transitionable: true
   	   		         		} 
   	   		         	},
   	   		         	{ 
   	   		         		caption: false, 
   	   		         		name: 'textProperties', 
   	   		         		proptype: 'text-properties',
   	   		         		type: 'checkbox', 
   	   		         		value: function(item,name,index) {  return item.buttons[index].textProperties; }, 
   	   		         		values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}], 
   	   		         		changeProperty: { 
   	   		         			caption: 'Text properties', 
   	   		         			rerender: true 
   	   		         		} 
   	   		         	}
   	   				]
   	   			]
   	   		}
     	]
	}
}

//TYPE = SIMPLE ALERT DIALOG
prx.types.material_dialog_alert_simple = prx.componentsHelper.cloneobject(prx.types.material_dialog_alert);
prx.types.material_dialog_alert_simple.name = 'material_dialog_alert_simple';
prx.componentsHelper.removeProperties(prx.types.material_dialog_alert_simple.propertyGroups, ['titleSize','titleColor','titleProperties']);

//TYPE = CONFIRMATION DIALOG
prx.types.material_dialog_confirmation = prx.componentsHelper.cloneobject(prx.types.material_dialog_alert);
prx.types.material_dialog_confirmation.name = 'material_dialog_confirmation';
prx.componentsHelper.removeProperties(prx.types.material_dialog_confirmation.propertyGroups, ['textFont','textSize','textColor','textProperties']);

//TYPE: SIMPLE DIALOG
prx.types.material_dialog_simpledialog = {
	name: "material_dialog_simpledialog"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;		
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var listH = Math.round((dims.height-1-item.listitems.length) / item.listitems.length);
		var listItemH = (dims.height - (item.listitems.length+1))/item.listitems.length;		

		var hasThumbs = false;
		for(var i=0; i<item.listitems.length; i++)
			if(typeof(item.listitems[i].thumbnail) != "undefined" && item.listitems[i].thumbnail.url != '') {
				hasThumbs = true;
				break;
			}
			
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		
		var cR = '<div id="'+_id+'" class="pos box type-material-simple-dialog">';
		
		cR += '<style>';
		if(item.name == 'material_dialog_simplemenu') {
		cR += '#' + _id + ' .material-simple-dialog-inner { box-shadow: 0px 0px '+(2*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px rgba(0, 0, 0, 0.25); }';
		}
		cR += '#' + _id + ' .material-simple-dialog-inner { '+prx.css.flexJustifyContent(item.textAlign)+' background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#' + _id + ' .material-simple-dialog-icon-wrapper { width: '+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px; }';
		cR += '#' + _id + ' .material-simple-dialog-text-wrapper { height: '+Math.round(listItemH)+'px; }';
		cR += '#' + _id + ' .material-simple-dialog-text { '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; '+_props+' }';
		cR += '</style>';
		
		cR += '<div class="material-simple-dialog-inner liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-textAlign changeProperty-textFont changeProperty-textSize">';
				
		$.each(item.listitems, function(i,elm){				
			if(typeof(elm.thumbnail) == "undefined") { elm.thumbnail = {"fileId":"","folderId":"","url":"","assetType":"","name":""} };
						
			cR += '<style>';
			if(elm.thumbnail.url != '') {
				cR += '#' + _id + '-listitems-'+i+' .material-simple-dialog-thumb { background-image: url('+prx.componentsHelper.getAssetUrl(elm.thumbnail)+'); }';
			}
			cR += '</style>';
							
			cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property material-simple-dialog-listitem material-simple-dialog-listitem-type-'+elm.itemtype+'" data-dynamic-property-index="'+i+'">';
								
			cR += '<div class="bordered-container '+((item.rippleEffect) ? 'prx-material-ripple ' : '' )+'liveUpdate-dividerColor changeProperty-dividerColor">';

			if(hasThumbs) {
			cR += '<div class="material-simple-dialog-icon-wrapper"><div class="material-simple-dialog-thumb"></div></div>';
			}
			cR += '<div class="material-simple-dialog-text-wrapper">';
			cR += '<div class="material-simple-dialog-text liveUpdate-textColor changeProperty-textColor">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+elm.text+'</span>';
			cR += '</div>';
			cR += '</div>';
			cR += '</div>';
			cR += '</div>';
		});
		cR += '</div></div>';	
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var dims = prx.componentsHelper.getRealDims(item);
		var listItemH = (dims.height - (item.listitems.length+1))/item.listitems.length;
		
		$('#' + _id).find('.material-simple-dialog-icon-wrapper').css({
			'width': Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px',
			'height': Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px'
		});
		$('#' + _id).find('.material-simple-dialog-text-wrapper').css({
			'height': Math.round(listItemH)+'px'
		});
	}
	,propertyGroups: [
		{
			caption: 'List',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor
				]
			]
		},
		{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.materialTextColor
				],	
				[
					prx.commonproperties.textProperties
				]
			]
		},
		prx.commonproperties.materialRipple
	]
	,dynamicProperties: {
		data: 'listitems'
		,propertyCaption: 'Menu items'
  		,propertyName: 'Menu item'
		,addCaption: 'Add Menu item'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Menu Item'
			,itemtype: 'dialog'
			,subtitle: ''
			,thumbnail: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
			,actions: []
		}
		,captionProperty: 'text' 
		,editableProperties: [
			{
				caption: 'Label'
				,name: 'text'
				,type: 'input'
				,value: function(item,name,index) {
					return item.listitems[index].text;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype == 'separator');
				}
				,changeProperty: {  
					caption: 'Label',
					property: 'text',
					selector: '.material-simple-dialog-text',
					transitionable: false
				}  

			}
		]
		,interactions: [
			{
				caption: 'Interactions'
				,name: 'actions'
				,type: 'action'
				,value: function(item,name,index) {
					if (typeof(item.listitems[index].actions) == "undefined") {
						item.listitems[index].actions = [];
					}		
				
					return item.listitems[index].actions.length;
				}
			}
		                ]
		                
		,propertyGroups: [
			{
				caption:  'Style',
				properties: [[
					{
						caption: false //'List item Type'
						,name: 'itemtype'
						,type: 'select'
						,value: function(item,name,index) {
							if(typeof(item.listitems[index].itemtype) == "undefined") {
								item.listitems[index].itemtype = 'menu'
							}
							return item.listitems[index].itemtype;
						}
						,values: [
								  { value: 'dialog', displayValue: 'Simple Dialog'}
								  ,{ value: 'menu', displayValue: 'Simple Menu'}
						],
						onChange: function(item, index) {
							switch(item.itemtype) {
							case 'dialog':
								item.thumbnail = {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
								return item;
								break;
							case 'menu':
								item.thumbnail =  {"fileId":"","folderId":"","url":"","assetType":"","name":""};
								return item;
								break;								
							default: break;
							}
							return false;
						}
						,hiddenByDefault: function(item,name,index){
							return true;
						}
						,changeProperty: {  
							caption: 'Listitem type',
							rerender: true
						} 
					}
				]]
			},			
			{
				caption: 'Thumbnail',
				properties: [[
				    prx.commonproperties.thumbnailSourceList
				]]
			}
		]
	}
}

//TYPE = SIMPLE MENU
prx.types.material_dialog_simplemenu = prx.componentsHelper.cloneobject(prx.types.material_dialog_simpledialog);
prx.types.material_dialog_simplemenu.name = 'material_dialog_simplemenu';
prx.componentsHelper.removeProperties(prx.types.material_dialog_simplemenu.dynamicProperties.propertyGroups, ['thumbnail']);
prx.types.material_dialog_simplemenu.dynamicProperties.blankItem.itemtype = 'menu';
prx.types.material_dialog_simplemenu.dynamicProperties.blankItem.thumbnail =  {"fileId":"","folderId":"","url":"","assetType":"","name":""};
prx.types.material_dialog_simplemenu.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_dialog_simplemenu.dynamicProperties.propertyGroups, 'itemtype', 'value', 'menu');

//TYPE: DETERMINATE PROGRESS BAR */
prx.types.material_progress_determinate = {
	name: "material_progress_determinate"
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-material-progress '+((item.isDownloading) ? '' : 'estimation') +'">';
		
		cR += '<style>';
		cR += '#' + _id + ' .material-progress-bg-bar { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		if( item.isDownloading ) {
		cR += '#' + _id + ' .material-progress-downloading-bar { width: '+item.percentBarValue+'%; background-color: '+prx.utils.getColor(item.percentBarBackgroundColor)+'; }';
		}
		else {
		cR += '#' + _id + ' .material-progress-loading-bar { background-color: '+prx.utils.getColor(item.percentBarBackgroundColor)+'; }';
		}
		cR += '</style>';
		
		cR += '<div class="material-progress-bg-bar liveUpdate-bgBarBackgroundColor changeProperty-bgBarBackgroundColor">';
		
		if( item.isDownloading )
		cR += '<div class="material-progress-downloading-bar liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-percentBarValue changeProperty-percentWidth"></div>';
		else
		cR += '<div class="material-progress-loading-bar liveUpdate-percentBarBackgroundColor changeProperty-percentBarBackgroundColor"></div>';
		
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
 	,propertyGroups: [
 		{
			caption: "Main Bar",
			properties: [
				[
				 	prx.commonproperties.materialBackgroundColor
      			]
			]
   		},
   		{
			caption: "Percentage Bar",
			properties: [
				[
					{
						caption: 'Progress (%)'
						,name: 'percentBarValue'
						,proptype: 'initial-value-percent'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.percentBarValue;
						}
						,values: { min: 0, max: 100, step: 10 }
						,hiddenByDefault: function(item) {
							return (!item.isDownloading);
						}
						,changeProperty: {
							caption: 'Progress',
							selector: '.changeProperty-percentWidth',
							property: 'width',
							transitionable: true
						 } 
					},
	      			{
	      				caption: 'Color'
	      				,name: 'percentBarBackgroundColor'
	      				,proptype: 'background-color-2'
	      				,type: 'combo-colorpicker'
	      				,value: function(item,name) {
	      					return item.percentBarBackgroundColor;
	      				}
	      				,liveUpdate: 'background-color'
						,values: prx.comps.materialColors
	      				,changeProperty: {
							caption: 'Percentage Bar color',
							selector: '.changeProperty-percentBarBackgroundColor',
							property: 'background-color',
							transitionable: true
						} 
	      			}
      			]
			]
   		}
	]
}

//TYPE: INDETERMINATE PROGRESS BAR
prx.types.material_progress_indeterminate = prx.componentsHelper.cloneobject(prx.types.material_progress_determinate);
prx.types.material_progress_indeterminate.name = 'material_progress_indeterminate';
prx.componentsHelper.removeProperties(prx.types.material_progress_indeterminate.propertyGroups, ['percentBarValue']);

//TYPE: SLIDER
prx.types.material_slider_continuous = {
	name: 'material_slider_continuous'
	,onDisplay: function(item,containerid,pageid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		if(typeof(item.badgeSize) == 'undefined') { item.badgeSize = 0;}
		
		var cR = '';			
		cR += '<div id="' + _id + '" class="box pos type-material-slider">';
		
		cR += '<style>'
		cR += '#'+_id+' .material-slider-bar-wrapper { height: '+dims.height+'px; }';
		cR += '#'+_id+' .material-slider-bar { height: '+item.barThickness+'px; background-color: '+prx.utils.getColor(item.barColor)+'; margin-top: -'+(item.barThickness/2)+'px; }'
		cR += '#'+_id+' .material-slider-bar-filled { width: '+item.sliderPosition+'%; background-color: '+prx.utils.getColor(item.fillBarColor)+' }'
		cR += '#'+_id+' .material-slider-button-wrapper { width: '+Math.round(dims.height/2)+'px; height: '+Math.round(dims.height/2)+'px; margin-left: -'+Math.round(dims.height/4)+'px; margin-right: -'+Math.round(dims.height/4)+'px; margin-top: -'+Math.round(parseInt(dims.height/2)+parseInt(dims.height/4)-(item.barThickness/2))+'px; }';
		cR += '#'+_id+' .material-slider-button { background-color: '+prx.utils.getColor(item.sliderColor)+'; }';
		if(item.sliderPosition == 0) {
		cR += '#'+_id+' .material-slider-button:not(.discrete) { background-color : #eee; border : '+(2*prx.componentsHelper.getScale(item.lib))+'px solid ' + prx.utils.getColor(item.barColor) +'; }';
		if(!prx.editor) {		
			cR += '#'+_id+' .material-slider-button.discrete { background-color : #333 }';	
			cR += '#'+_id+' .material-slider-button.discrete:active { background-color : '+prx.utils.getColor(item.barColor)+' }';
		}
		else {
			cR += '#'+_id+' .material-slider-button.discrete { background-color : '+prx.utils.getColor(item.barColor)+' }';
		}
		}
		if(item.isDiscrete) {
			
		cR += '#'+_id+' .material-slider-badge { line-height: '+item.badgeSize+'px; color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px; }';
		if(!prx.editor) {		
		cR += '#'+_id+' .material-slider-button.discrete.active { width: '+item.badgeSize+'px; height: '+item.badgeSize+'px; top: '+Math.round((dims.height/4)-item.badgeSize-(17*prx.componentsHelper.getScale(item.lib)))+'px; left: '+Math.round((dims.height/4)-(item.badgeSize/2))+'px; }';
		}
		else {
		cR += '#'+_id+' .material-slider-button.discrete { width: '+item.badgeSize+'px; height: '+item.badgeSize+'px; top: '+Math.round((dims.height/4)-item.badgeSize-(17*prx.componentsHelper.getScale(item.lib)))+'px; left: '+Math.round((dims.height/4)-(item.badgeSize/2))+'px; box-sizing: content-box; border: none; border-radius: 80% 0 55% 50% / 55% 0 80% 50%; font: Roboto Regular, sans-serif; text-overflow: clip; -webkit-transform: rotateZ(135deg); transform: rotateZ(135deg); }';
		cR += '#'+_id+' .material-slider-badge { display: block;}';
		}		
		
		}
		cR += '</style>'
			
		cR += '<div class="material-slider-bar-wrapper">';
		cR += '<div class="material-slider-bar liveUpdate-barColor">';
		cR += '<div class="material-slider-bar-filled liveUpdate-fillBarColor"></div>'
		cR += '</div>';
		cR += '</div>';
		cR += '<div class="material-slider-button-wrapper">';
		if(item.isDiscrete) {
		cR += '<span class="material-slider-button discrete liveUpdate-fillBarColor">';
		cR += '<span class="material-slider-badge liveUpdate-textColor changeProperty-textColor changeProperty-textSize">'+item.sliderPosition+'</span>';
		cR += '</span>';
		}
		else {
		cR += '<span class="material-slider-button liveUpdate-fillBarColor"></span>';
		}
		cR += '</div>'
		cR += '</div>';
	
		return cR;
	}
	,onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);
		
		$('#'+_id).find('.material-slider-bar-wrapper').css({ 'height': dims.height + 'px'});
		
		$('#'+_id).find('.material-slider-button-wrapper').css({
			'width': Math.round(dims.height/2) + 'px',
			'height': Math.round(dims.height/2) + 'px',
			'margin-left': '-' + Math.round(dims.height/4) + 'px',
			'margin-right': '-' + Math.round(dims.height/4) + 'px',
			'margin-top': '-' + Math.round(parseInt(dims.height/2)+parseInt(dims.height/4)-(item.barThickness/2)) + 'px'
		});

		if(!prx.editor) {
			$('#'+_id).find('.material-slider-button.discrete.active').css({
				'left': Math.round((dims.height/4)-(item.badgeSize/2))+'px',
				'top': Math.round((dims.height/4)-item.badgeSize-(17*prx.componentsHelper.getScale(item.lib)))+'px'
			});
		}		
		else {
			$('#'+_id).find(' .material-slider-button-wrapper').css({ 
				'left': ((dims.width)*(item.sliderPosition*0.01)) + 'px'
			});
			$('#'+_id).find('.material-slider-button.discrete').css({
				'left': Math.round((dims.height/4)-(item.badgeSize/2))+'px',
				'top': Math.round((dims.height/4)-item.badgeSize-(17*prx.componentsHelper.getScale(item.lib)))+'px'
			});
		}
	}
	,interactions: [prx.commonproperties.actions]
	,mpactions: {
		specialEvents: ['sliderdragstart','sliderdrag','sliderdragend']
	}
	,afterDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);
		
		var rangeLength = item.max - item.min;
		
		if(!prx.editor) {
			prx.draggable._draggables['#'+_id+' .material-slider-button-wrapper'] = Draggable.create('#'+_id+' .material-slider-button-wrapper', {
				type: 'x',
				bounds: { left:  - (dims.height/4), width: parseInt(dims.width)+parseInt(dims.height/4)+(dims.height/4), top: 0, height: 0 },
				onDragStart: function(){
					$(this.target).parents('.box').each(function() {
            			if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
							prx.scrollable._scrollables[this.id + '-inner'].disable();
            			}
            		});

            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;
					
            		var progress = Math.ceil((pos / width)*100);
    				var progressTest = (progress*0.01);
					
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
			        prx.variables._triggerData['#'+_id]['sliderdragstart'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
					$('#'+_id).trigger('sliderdragstart');
					
					// hack instead of ondrag because greensock on drag only triggers if the item has actually moved
					// so if you are at 0 or 100 it only triggers once, which results in the value not always being updated
					// because of the "actionIsRunning" check
					$(document).on('mousemove.prx-sliderdrag touchmove.prx-sliderdrag', function(){ 
						var pos = $('#' + _id + ' .material-slider-button-wrapper').position().left;
						var width = $('#' + _id).width();
						
						$('#'+_id+' .material-slider-bar-filled').width(pos);
						var progress = Math.ceil((pos / width)*100);
						var progressTest = (progress*0.01);

						if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
				        prx.variables._triggerData['#'+_id]['sliderdrag'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
						$('#'+_id).trigger('sliderdrag');
					});
				},
				onDragEnd: function(){
					
					$(document).off('mousemove.prx-sliderdrag touchmove.prx-sliderdrag');
					
					$(this.target).parents('.box').each(function() { 
            			if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
							prx.scrollable._scrollables[this.id + '-inner'].enable();
            			}
            		})
            		
            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;
					
					var progress = Math.ceil((pos / width)*100);
					var progressTest = (progress*0.01);
					
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
			        prx.variables._triggerData['#'+_id]['sliderdragend'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
					$('#'+_id).trigger('sliderdragend');
				},
				onDrag: function(){					
            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;
					
					var progress = Math.ceil((pos / width)*100);
					$('#'+_id+' .material-slider-badge').html(Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)));
					
					isZero(rangeLength, progress);
				},
				onPress: function() {					
					$('#'+_id+' .material-slider-button.discrete').addClass('active');
					$('#'+_id+' .material-slider-button:not(.discrete)').css({
						'-webkit-transform' : 'scale(1.4)',
						'transform' : 'scale(1.4)'
					});
				},
				onRelease: function() {
					$('#'+_id+' .material-slider-button.discrete').removeClass('active');
					$('#'+_id+' .material-slider-button:not(.discrete)').css({
						'-webkit-transform' : 'scale(1)',
						'transform' : 'scale(1)'
					});
				}
			});
			
			TweenLite.set('#'+_id+' .material-slider-button-wrapper',{x:((dims.width)*(item.sliderPosition*0.01))});
			$('#'+_id+' .material-slider-badge').html(Math.round((rangeLength * (item.sliderPosition*0.01)) + parseInt(item.min)));
			
			$('#'+_id+' .material-slider-bar-wrapper').click(function(e){
				var _pos = e.pageX - $(this).offset().left;
				
				var progress = Math.ceil((_pos / $('#'+_id).width())*100);
				var progressTest = (progress*0.01);
							
				var timeline = new TimelineMax({force3D: prx.greensockForce3D});
				var element1 = $('#'+_id+' .material-slider-bar-filled');
				var element2 = $('#'+_id+' .material-slider-button:not(.discrete)');
				var element3 = element2.parent(); //button wrapper for continuous slider
				var element4 = $('#'+_id+' .material-slider-button.discrete');
				var element5 = element4.parent(); //button wrapper for discrete slider
				var currentPos = prx.draggable._draggables['#'+_id+' .material-slider-button-wrapper'][0].x;
				
				timeline.add(TweenLite.to(element1, 1, {width:_pos}), 0);
				
				if(item.name == 'material_slider_continuous') {				
					timeline.add(TweenLite.to(element3, 1, {x:_pos}), 0);
					timeline.add(TweenLite.to(element2, 0.3, {transform:'scale(1.2)'}), 0);
					timeline.add(TweenLite.to(element2, 0.3, {transform:'scale(1)'}), 0.3);
				}
				else {
					timeline.add(TweenLite.to(element5, 1, {x:_pos, onUpdate:discreteUpdate}), 0);
					timeline.add(TweenLite.to(element4, 1, {onStart:discreteStart, onComplete:discreteEnd}), 0);
				}
								
				prx.draggable._draggables['#'+_id+' .material-slider-button-wrapper'][0].update();

				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
				
				prx.variables._triggerData['#'+_id]['sliderdragstart'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
				prx.variables._triggerData['#'+_id]['sliderdrag'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
				prx.variables._triggerData['#'+_id]['sliderdragend'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
				$('#'+_id).trigger('sliderdragstart');
				$('#'+_id).trigger('sliderdrag');	
				$('#'+_id).trigger('sliderdragend');
				
				$('#'+_id+' .material-slider-badge').html(Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)));
				
				isZero(rangeLength, progress);
				
			});
			
			function isZero(x,y) {
				if((x * (y*0.01)) + parseInt(item.min) == item.min) {
					$('#'+_id+' .material-slider-button:not(.discrete)').css({
						'background-color' : '#eee',
						'border' : (2*prx.componentsHelper.getScale(item.lib)) + 'px solid ' + prx.utils.getColor(item.barColor)
					});	
					
					$('#'+_id+' .material-slider-button.discrete').css({'background-color' : '#333'});	
					$('#'+_id+' .material-slider-button.discrete:active').css({'background-color' : prx.utils.getColor(item.barColor)});	
				}
				else {
					$('#'+_id+' .material-slider-button:not(.discrete)').css({
						'background-color' : prx.utils.getColor(item.sliderColor),
						'border' : '0 none'
					});	
					
					$('#'+_id+' .material-slider-button.discrete, #'+_id+' .material-slider-button.discrete:active').css({
						'background-color' : prx.utils.getColor(item.sliderColor)
					});	
				}
			}
			function discreteStart() {
				$('#'+_id+' .material-slider-button.discrete').addClass('active');
			}

			function discreteEnd() {
				$('#'+_id+' .material-slider-button.discrete').removeClass('active');
			}
			
			function discreteUpdate() {
				var element1 = $('#'+_id+' .material-slider-button.discrete');
				var element2 = element1.parent(); //button wrapper for discrete slider
				
				var draggable = prx.draggable._draggables['#'+_id+' .material-slider-button-wrapper'][0];
				var width = draggable.maxX - draggable.minX;        		
        		var progress = element2.position().left / width;
				
				var xVal = Math.round((rangeLength * progress) + parseInt(item.min));				
				element1.find('.material-slider-badge').html(xVal);
			} 
		}
		else {	
			
			$('#'+_id+' .material-slider-badge').html(Math.round((rangeLength * (item.sliderPosition*0.01)) + parseInt(item.min)));		

			$('#'+_id).find(' .material-slider-button-wrapper').css({ 
				'left': ((dims.width)*(item.sliderPosition*0.01)) + 'px'
			});
		}
	}
	,propertyGroups:	[
				
		{
			caption: 'Bar',
			properties: [
				[
					{
						caption: 'Thickness'
						,name: 'barThickness'
						,proptype: 'bar-thickness'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.barThickness;
						}
						,values: { min: 2, max: 20, step: 2 }
		      	    	,changeProperty: {  
							caption: 'Thickness',
							rerender: true,
							changeable: false
						} 
					}
				],
				[
					{
						caption: 'Color'
						,name: 'barColor'
						,proptype: 'background-color'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.barColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Color',
							property: 'background-color',
							selector: '.material-slider-bar',
							transitionable: true
						} 
						
					},
					{
						caption: 'Fill Color'
						,name: 'fillBarColor'
						,proptype: 'background-color-2'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.fillBarColor;
						}
						,values: prx.comps.materialColors 
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Fill Color',
							property: 'background-color',
							selector: '.material-slider-bar-filled',
							transitionable: true
						} 
					}
				]
			]
		},
		{
			caption: 'Slider',
	    	properties: [
				[
					{
						caption: 'Color'
						,name: 'sliderColor'
						,proptype: 'background-color-3'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.sliderColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Slider color',
							property: 'background-color',
							selector: '.material-slider-button',
							transitionable: true
						} 
					}
				]
				,[
					{
						caption: 'Original position (%)'
						,name: 'sliderPosition'
						,proptype: 'initial-value-percent'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.sliderPosition;
						}
						,values: { min: 0, max: 100, step: 10 }
						,changeProperty: {  
							caption: 'Slider position',
							rerender: true
						} 
					}
				]
				
			]
		},
		{
			caption: 'Badge',
	    	properties: [
				[
					{
						caption: 'Size'
						,name: 'badgeSize'
						,proptype: 'badge-size'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.badgeSize;
						}
						,values: { min: 20, max: 60, step: 10 }
						,hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						}
						,changeProperty: {  
							caption: 'Badge size',
							transitionable: true
						} 
					},
					{
						caption: 'Range'
						,name: 'min'
						,proptype: 'range-min'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.min;
						}
						,values: { min: 0, max: 100, step: 10 }
						,hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						}
						,changeProperty: {  
							caption: 'Range minimum',
							rerender: true
						} 
					},
					{
						caption: '-'
						,name: 'max'
						,proptype: 'range-max'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.max;
						}
						,values: { min: 0, max: 100, step: 10 }
						,hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						}
						,changeProperty: {  
							caption: 'Range maximum',
							rerender: true
						} 
					}
				],
	    	    [
					{ 
						caption: 'Font', 
						name: 'textSize',
						proptype: 'font-size',
						type: 'combo-select', 
						value: function(item,name) { 
							return item.textSize; 
						}, 
						values: prx.comps.textsize, 
						hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						},
						changeProperty: { 
							caption: 'Text size', 
							selector: '.changeProperty-textSize', 
							property: 'font-size', 
							transitionable: true 
						} 
					},
					{ 
						caption: false, 
						name: 'textColor', 
						proptype: 'font-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.textColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						},
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Text color', 
							selector: '.changeProperty-textColor', 
							property: 'color', 
							transitionable: true 
						} 
					}
	    	    ]
			]
		}
	]
}

//TYPE: Toolbar
prx.types.material_toolbar = {
	name: "material_toolbar"
	,onDisplay: function(item,containerid) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(item.borderRadius == parseInt(item.borderRadius)) { item.borderRadius += 'px'; }
		if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
		if(typeof(item.text) == "undefined") { item.text = '' }
		if(typeof(item.text) == "undefined") { item.textProperties = [] }
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
				
		var cR = '<div id="' + _id + '" class="box pos type-toolbar">';
		
		cR += '<style>'
		cR += '#'+_id+' .inner-rec { background-color: '+prx.utils.getColor(item.backgroundColor)+'; } ';
		if(item.shadowEnabled) {
			cR += '#'+_id+' .inner-rec { box-shadow: 0 '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(3*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px '+ prx.utils.getColor(item.shadowColor) + '; } ';
		}
		cR += '#'+_id+' .toolbar-text-container { '+_props+' '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; text-align: '+item.textAlign+'; color: '+prx.utils.getColor(item.textColor)+'; }';
		cR += '</style>'
		
		cR += '<div id="rec-' + _id + '" class="inner-rec liveUpdate-backgroundColor liveUpdate-borderColor liveUpdate-shadowColor changeProperty-backgroundColor changeProperty-borderColor liveUpdate-shadowColor changeProperty-borderWidth changeProperty-borderStyle">';
		cR += '<div class="toolbar-text-container liveUpdate-textColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-textProperties changeProperty-textAlign">';
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
				selector: '.toolbar-text-container span',
				transitionable: false
  			}
	    }
	]
	,propertyGroups: [
		{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
			      	prx.commonproperties.materialTextColor
		      	],
				[
					prx.commonproperties.textProperties, 
					prx.commonproperties.textAlign
		  		]
			]
		},
		{
			caption: 'Style',
			properties: [
      			[
      			 	prx.commonproperties.materialBackgroundColor
      			],
      			[
					{
						caption: 'Shadow?'
						,name: 'shadowEnabled'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.shadowEnabled)=="undefined") {
								return false;
							}
							return item.shadowEnabled;
						}
						,onChange: function(item){
							if(item.shadowEnabled) {
								$('#property-shadowColor').show();
							} else {
								$('#property-shadowColor').hide();
							}	
						}				
						,changeProperty: {
							caption: 'Shadow toggle',
							rerender: true
						}
					},
					{ 
						caption: false, 
						name: 'shadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker',
						value: function(item,name) { 
							return item.shadowColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.shadowEnabled);
						},
						changeProperty: { 
							caption: 'Shadow', 
							rerender: true, 
							changeable: false
						} 
					}
	      		]		      		
	      	]
	   }
	]
	
}

//TYPE: RECTANGLE WITH SHADOW
prx.types.material_rectangle_shadow = {
	name: "material_rectangle_shadow"
	,onDisplay: function(item,containerid) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(item.borderRadius == parseInt(item.borderRadius)) { item.borderRadius += 'px'; }
		if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
		if(typeof(item.text) == "undefined") { item.text = '' }
		if(typeof(item.text) == "undefined") { item.textProperties = [] }
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
				
		var cR = '<div id="' + _id + '" class="box pos type-rectangle-shadow">';
		
		cR += '<style>'
		cR += '#'+_id+' .inner-rec { background-color: '+prx.utils.getColor(item.backgroundColor)+'; box-shadow: 0 1px 1px 1px '+ prx.utils.getColor(item.shadowColor) + '; border: '+item.borderWidth+'px '+item.borderStyle+' ' + prx.utils.getColor(item.borderColor) + '; border-radius: '+item.borderRadius+'; } ';
		cR += '#'+_id+' .rectangle-shadow-text-container { '+_props+' '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; text-align: '+item.textAlign+'; color: '+prx.utils.getColor(item.textColor)+'; }';
		cR += '</style>'
		
		cR += '<div id="rec-' + _id + '" class="inner-rec liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderWidth changeProperty-borderStyle">';
		cR += '<div class="rectangle-shadow-text-container liveUpdate-textColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-textProperties changeProperty-textAlign">';
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
				selector: '.rectangle-shadow-text-container span',
				transitionable: false
  			}
	    }
	]
	,propertyGroups: [
		{
		caption: 'Text',
		properties: [
			[
				prx.commonproperties.textFont,
				prx.commonproperties.textSize,
		      	prx.commonproperties.materialTextColor
	      	],
			[
				prx.commonproperties.textProperties, 
				prx.commonproperties.textAlign
	  		]
		]
		},
		{
			caption: 'Style',
			properties: [
	      			[
	      			 	prx.commonproperties.materialBackgroundColor
	      			],
	      			[
	      				prx.commonproperties.borderWidth,
	      				prx.commonproperties.borderStyle,
	      				prx.commonproperties.materialBorderColor
	      			],
	      			[
	      			 	{ 
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
		      		],
		      		[
		      		 	prx.commonproperties.materialShadowColor
		      		]
		      		
	      	]
	   }
	]
	
}

/* STATUSBAR */
prx.types.material_statusbar = {
	name: "material_statusbar"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);

		var now = new Date();

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-material-statusbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';

		cR += '<style>';
		cR += '#'+_id+' .material-statusbar-inner { font-size: '+Math.round(dims.height/2)+'px; background-color: '+prx.utils.getColor(item.backgroundColor)+'; color: '+prx.utils.getColor(item.foregroundColor)+'; }';
		cR += '#'+_id+' .material-statusbar-inner>div:not(.material-statusbar-time) { width: '+dims.height+'px;}';
		cR += '#'+_id+' .material-wifi-quarter { background-color: '+prx.utils.getColor(item.foregroundColor)+';}';
		cR += '#'+_id+' .material-wifi-quarter.outer { width: '+Math.round(dims.height/2)+'px; border-radius: '+Math.round(dims.height/2)+'px 0 0 0;}';
		cR += '#'+_id+' .material-wifi-quarter.inner { width: '+Math.round(dims.height/4)+'px; border-radius: '+Math.round(dims.height/4)+'px 0 0 0;}';
		cR += '#'+_id+' .material-signal-triangle.outer { border-bottom: '+Math.round(dims.height/2)+'px solid '+prx.utils.getColor(item.foregroundColor)+'; border-left: '+Math.round(dims.height/2)+'px solid transparent;}';
		cR += '#'+_id+' .material-signal-triangle.inner { border-bottom: '+Math.round(dims.height/4)+'px solid '+prx.utils.getColor(item.foregroundColor)+'; border-left: '+Math.round(dims.height/4)+'px solid transparent;}';
		cR += '#'+_id+' .material-battery-container { width: '+Math.round(dims.height/3)+'px; background-color: '+prx.utils.getColor(item.foregroundColor)+';}';
		cR += '#'+_id+' .material-battery-tip { width: '+Math.round(dims.height/6)+'px; margin-left: -'+Math.round(dims.height/12)+'px; background-color: '+prx.utils.getColor(item.foregroundColor)+';}';
		cR += '</style>';

		cR += '<div class="material-statusbar-inner liveUpdate-backgroundColor liveUpdate-foregroundColor-color changeProperty-backgroundColor changeProperty-foregroundColor-color">';
		cR += '<div class="material-statusbar-wifi">';
		cR += '<div class="material-wifi-quarter outer liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"></div>';
		cR += '<div class="material-wifi-quarter inner liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"></div>';
		cR += '</div>';
		cR += '<div class="material-statusbar-signal">';
		cR += '<div class="material-signal-triangle outer liveUpdate-foregroundColor-border-bottom-color changeProperty-foregroundColor-border-color"></div>';
		cR += '<div class="material-signal-triangle inner liveUpdate-foregroundColor-border-bottom-color changeProperty-foregroundColor-border-color"></div>';
		cR += '</div>';		
		cR += '<div class="material-statusbar-battery-life" >';
		cR += '<div class="material-battery-container outer liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"><div class="material-battery-tip liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"></div></div>';
		cR += '<div class="material-battery-container inner liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"></div>';
		cR += '</div>';
		cR += '<div class="material-statusbar-time">'+("0" + now.getHours()).substr(-2,2)+':'+("0" + now.getMinutes()).substr(-2,2)+'</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);

		$('#'+_id).find('.material-statusbar-inner').css('font-size', Math.round(dims.height/2)+'px')
		$('#'+_id).find('.material-statusbar-inner>div:not(.material-statusbar-time)').css('width', dims.height+'px')
		
		$('#'+_id).find('.material-wifi-quarter.outer').css({
			'width': Math.round(dims.height/2)+'px',
			'border-radius': Math.round(dims.height/2)+'px 0 0 0'
		});
		$('#'+_id).find('.material-wifi-quarter.inner').css({
			'width': Math.round(dims.height/4)+'px',
			'border-radius': Math.round(dims.height/4)+'px 0 0 0'
		});
		
		$('#'+_id).find('.material-signal-triangle.outer').css({
			'border-bottom': Math.round(dims.height/2)+'px solid '+prx.utils.getColor(item.foregroundColor), 
			'border-left': Math.round(dims.height/2)+'px solid transparent'
		});
		$('#'+_id).find('.material-signal-triangle.inner').css({
			'border-bottom': Math.round(dims.height/4)+'px solid '+prx.utils.getColor(item.foregroundColor), 
			'border-left': Math.round(dims.height/4)+'px solid transparent'
		});
		
		$('#'+_id).find('.material-battery-container').css({
			'width': Math.round(dims.height/3)+'px'
		});
		$('#'+_id).find('.material-battery-tip').css({
			'width': Math.round(dims.height/9)+'px',
			'margin-left': '-'+Math.round(dims.height/18)+'px'
		});
	}
	,propertyGroups: [
  		{
  		    caption: 'Style',
  		    properties: [
  		        [
  					prx.commonproperties.materialBackgroundColor,
  					{
  						caption: 'Foreground',
  						name: 'foregroundColor',
  						proptype: 'foreground-color',
  						type: 'colorpicker',
  						value: function(item,name) { return item.foregroundColor; },
  						//help: 'Will always revert to white in native app mode',
  						liveUpdate: 'color,border-bottom-color,background-color',
  						changeProperty: {
  							caption: 'Foreground color',
  							rerender: true
  						}
  					}
  				]
  			]
  		},
  		{
  			caption: 'Advanced',
  			properties: [[
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
  			]]
  		}
  	]
}


/* NAVIGATIONBAR */
prx.types.material_navigationbar = {
	name: "material_navigationbar"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-material-navigationbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';

		cR += '<style>';
		cR += '#'+_id+' .material-navigationbar-inner { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '</style>';

		cR += '<div class="material-navigationbar-inner liveUpdate-backgroundColor">';
		cR += '<div class="material-navigationbar-button" style="background-image: url('+prx.componentsHelper.getAssetUrl(item.icon1)+')"></div>';
		cR += '<div class="material-navigationbar-button" style="background-image: url('+prx.componentsHelper.getAssetUrl(item.icon2)+')"></div>';
		cR += '<div class="material-navigationbar-button" style="background-image: url('+prx.componentsHelper.getAssetUrl(item.icon3)+')"></div>';

		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,propertyGroups: [
		{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.materialBackgroundColor
				]
			]
		},
		{
		    caption: 'Icons',
		    properties: [
		        [
					{
						caption: 'Left icon',
						name: 'icon1',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(typeof(item.icon1) == "undefined" || item.icon1.url == '') {
								return 'No icon selected';
							}
							return item.icon1.name;
						}
						,value: function(item,name) {
							return $.toJSON({
								allow: 'image',
								asset: item.icon1
							});
						}
						,changeProperty: {
	                		caption: 'Left icon',
	                		rerender: true
	                	}
					},
					{
						caption: 'Middle icon',
						name: 'icon2',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(typeof(item.icon2) == "undefined" || item.icon2.url == '') {
								return 'No icon selected';
							}
							return item.icon2.name;
						}
						,value: function(item,name) {
							return $.toJSON({
								allow: 'image',
								asset: item.icon2
							});
						}
						,changeProperty: {
	                		caption: 'Middle icon',
	                		rerender: true
	                	}
					},
					{
						caption: 'Right icon',
						name: 'icon3',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(typeof(item.icon3) == "undefined" || item.icon3.url == '') {
								return 'No icon selected';
							}
							return item.icon3.name;
						}
						,value: function(item,name) {
							return $.toJSON({
								allow: 'image',
								asset: item.icon3
							});
						}
						,changeProperty: {
	                		caption: 'Right icon',
	                		rerender: true
	                	}
					}
				]
			]
		},
		{
			caption: 'Advanced',
			properties: [[
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
			]]
		}
	]
}

/************************************************************************************************/
/************************************* COMPONENTS (OBJECTS) *************************************/
/************************************************************************************************/
/***** TOOLBAR COMPONENTS *****/
//TYPE: FIXED TABBAR
prx.components.material_tabbar_fixed = {
	name: 'material_tabbar_fixed'
	,type: 'material_tabbar_fixed'
	,lib: _library
	,caption: 'Fixed tabbar'
	,icon: '-720px -1280px'
	,helper: prx.url.devices+_path + 'tabbar_fixed/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: '2196F3'
	,shadowColor: 'rgba(0, 0, 0, 0.2)'
	,shadowEnabled: false
	,textFont: 'Roboto Medium, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor: 'rgba(255, 255, 255, 0.60)'
	,textColorActive: 'FFFFFF'
	,textProperties: ['']
	,tabIndicatorColor: '18FFFF'
	,tabIndicatorWidth: 2*prx.componentsHelper.getScale(_library)
	,selected: 0
	,tabs: [
        {
        	caption: "TAB ONE"
    		,actions: []
        },
	    {
		   caption: "TAB TWO"
		   ,actions: []
		},
	    {
			caption: "TAB THREE"
			,actions: []
		}
     ]
   	,overlay: false
   	,changeActive: true
   	,linkedscreen: '-1'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: SCROLLABLE TABBAR
prx.components.material_tabbar_scrollable = {
	name: 'material_tabbar_scrollable'
	,type: 'material_tabbar_scrollable'
	,lib: _library
	,caption: 'Scrollable tabbar'
	,icon: '0px -1360px'
	,helper: prx.url.devices+_path + 'tabbar_scrollable/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: '2196F3'
	,shadowColor: 'rgba(0, 0, 0, 0.2)'
	,shadowEnabled: false
	,textFont: 'Roboto Medium, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor: 'rgba(255, 255, 255, 0.60)'
	,textColorActive: 'FFFFFF'
	,textProperties: ['']
	,tabIndicatorColor: '18FFFF'
	,tabIndicatorWidth: 2*prx.componentsHelper.getScale(_library) 
	,selected: 0
	,tabs: "TAB ONE<br />TAB TWO<br />TAB THREE<br />TAB FOUR<br />TAB FIVE"
   	,overlay: false
	,linkedContainer: '-1'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: SEGMENTED BUTTON TABBAR
prx.components.material_tabbar_segmented_button = {
	name: 'material_tabbar_segmented_button'
	,type: 'material_tabbar_segmented_button'
	,lib: _library
	,caption: 'Segmented Button'
	,icon: '-480px -1440px'
	,helper: prx.url.devices+_path + 'tabbar_segmented_button/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'EEEEEE' 
	,backgroundColorActive: 'BDBDBD'
	,iconColorActive: '555'
	,selected: 0
	,iconSize: 3
	,tabs: [
        {
        	caption: 'BUTTON 1'
        	,imgSrc: {"fileId":"5f86a4c92ea4932a5620d5071e10c8a1.svg","name":"today.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/5f86a4c92ea4932a5620d5071e10c8a1.svg","folderId":"f1424091456673","targetSrc":"generated/5f86a4c92ea4932a5620d5071e10c8a1_7d7d7d.svg","color":"757575"}
    		,actions: []
        },
	    {
        	caption: 'BUTTON 2'
       		,imgSrc: {"fileId":"87131ba67c3ed7c7a8b7f1b6dee8ea89.svg","name":"folder.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/87131ba67c3ed7c7a8b7f1b6dee8ea89.svg","folderId":"f1424098398753","targetSrc":"generated/87131ba67c3ed7c7a8b7f1b6dee8ea89_7d7d7d.svg","color":"757575"}
       		,actions: []
		},
	    {
			caption: 'BUTTON 3'
        	,imgSrc: {"fileId":"67393b9c0b365f46f4c33c934a964a1a.svg","name":"cloud_upload.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/67393b9c0b365f46f4c33c934a964a1a.svg","folderId":"f1424098398753","targetSrc":"generated/67393b9c0b365f46f4c33c934a964a1a_7d7d7d.svg","color":"757575"}
			,actions: []
		},
	    {
			caption: 'BUTTON 4'
        	,imgSrc:{"fileId":"192cd4f92c784c6e33a3167095165093.svg","name":"settings.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/192cd4f92c784c6e33a3167095165093.svg","folderId":"f1424091456673","targetSrc":"generated/192cd4f92c784c6e33a3167095165093_7d7d7d.svg","color":"757575"}
			,actions: []
		},
	    {
			caption: 'BUTTON 5'
        	,imgSrc: {"fileId":"ca104a30a743e00e890a864e19c7738d.svg","name":"delete.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/ca104a30a743e00e890a864e19c7738d.svg","folderId":"f1424091456673","targetSrc":"generated/ca104a30a743e00e890a864e19c7738d_7d7d7d.svg","color":"757575"}
			,actions: []
		}
     ]
   	,overlay: false
   	,changeActive: true
   	,linkedscreen: '-1'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: STATUSBAR
prx.components.material_statusbar = {
	name: 'material_statusbar'
	,type: 'material_statusbar'
	,lib: _library
	,caption: 'Statusbar'
	,icon: '-400px -1680px'
	,helper: prx.url.devices+_path+ 'statusbar/helper.png'
	,width: "full"
	,height: 24*prx.componentsHelper.getScale(_library)
	,resizable : true
	,overlay: false
	,backgroundColor: 'rgba(0,0,0,0.2)'
	,foregroundColor: 'ffffff'
}

//TYPE: NAVIGATIONBAR
prx.components.material_navigationbar = {
	name: 'material_navigationbar'
	,type: 'material_navigationbar'
	,lib: _library
	,caption: 'Navigation Bar'
	,icon: '-320px -1680px'
	,helper: prx.url.devices+_path+ 'navigationbar/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,overlay: false
	,backgroundColor: '000000'
	,icon1: {"fileId":"d34443ce9db9f7fc16c8c7ca680b2e1c.png","folderId":"f1424344685690","assetType":"gallery","url":"f1424344685690/d34443ce9db9f7fc16c8c7ca680b2e1c.png","bucketsource":"main","name":" sysbar_back.png"}
	,icon2: {"fileId":"89772485345cbd5d2b0e6269719d8eed.png","folderId":"f1424344685690","assetType":"gallery","url":"f1424344685690/89772485345cbd5d2b0e6269719d8eed.png","bucketsource":"main","name":" sysbar_home.png"}
	,icon3: {"fileId":"7eb321edd1c051ed679bdbbbdcf4d1a6.png","folderId":"f1424344685690","assetType":"gallery","url":"f1424344685690/7eb321edd1c051ed679bdbbbdcf4d1a6.png","bucketsource":"main","name":" sysbar_recent.png"}
}

/***** BUTTON COMPONENTS *****/
//TYPE: RAISED BUTTON
prx.components.material_button_raised = {
	name: 'material_button_raised'
	,type: 'material_button_raised'
	,lib: _library
	,caption: 'Raised Button'
	,icon: '-160px -1360px'
	,helper: prx.url.devices+ _path + 'button_raised/helper.png'
	,width: 112*prx.componentsHelper.getScale(_library)
	,height: 36*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: '2196F3'
	,text: 'BUTTON'
	,textFont: 'Roboto Medium, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor: 'FFFFFF'
	,textProperties: ['bold']
	,shadowColor: 'rgba(0, 0, 0, 0.2)'
	,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
	,actions: []
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}	

//TYPE: ACTION BUTTON
prx.components.material_button_action = {
	name: 'material_button_action'
	,type: 'material_button_raised'
	,lib: _library
	,caption: 'Action Button'
	,icon: '-80px -1360px'
	,helper: prx.url.devices+ _path + 'button_action/helper.png'
	,width: 56*prx.componentsHelper.getScale(_library)
	,height: 56*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: '2196F3'
	,text: 'BUTTON'
	,textFont: 'Roboto Medium, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor: 'FFFFFF'
	,textProperties: ['bold']
	,shadowColor: 'rgba(0, 0, 0, 0.2)'
	,imgSrc: {"fileId":"b4468c977d5a8083541353d264cbb89d.svg","name":"add.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/b4468c977d5a8083541353d264cbb89d.svg","folderId":"f1424091950266","targetSrc":"generated/b4468c977d5a8083541353d264cbb89d_ffffff.svg","color":"ffffff"}
	,actions: []
	,aspectratio: true
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}	

//TYPE: FLAT BUTTON
prx.components.material_button_flat = {
	name: 'material_button_flat'
	,type: 'material_button_raised'
	,lib: _library
	,caption: 'Flat Button'
	,icon: '-240px -1360px'
	,helper: prx.url.devices+ _path + 'button_flat/helper.png'
	,width: 112*prx.componentsHelper.getScale(_library)
	,height: 36*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'transparent'
	,text: 'BUTTON'
	,textFont: 'Roboto Medium, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  '2196F3'
	,textProperties: ['bold']
	,shadowColor: 'transparent'
	,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
	,actions: []
	,rippleEffect: true
	,rippleEffectType: 'custom'
	,rippleEffectColor: 'rgba(153,153,153,0.4)'
}

//TYPE: ICON BUTTON
prx.components.material_button_icon = {
	name: 'material_button_icon'
	,type: 'material_button_raised'
	,lib: _library
	,caption: 'Icon Button'
	,icon: '-320px -1360px'
	,helper: prx.url.devices+ _path + 'button_icon/helper.png'
	,width: 56*prx.componentsHelper.getScale(_library)
	,height: 56*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'transparent'
	,text: 'BUTTON'
	,textFont: 'Roboto Medium, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor: 'FFFFFF'
	,textProperties: ['bold']
	,shadowColor: 'transparent'
	,imgSrc: {"fileId":"caeebe7f3a62939528c6a4ed009de42c.svg","name":"home.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/caeebe7f3a62939528c6a4ed009de42c.svg","folderId":"f1424091456673","targetSrc":"generated/caeebe7f3a62939528c6a4ed009de42c_7d7d7d.svg","color":"757575"}
	,actions: []
	,aspectratio: true
	,rippleEffect: true
	,rippleEffectType: 'custom'
	,rippleEffectColor: 'rgba(153,153,153,0.4)'
}

//TYPE: ACTION OVERFLOW
prx.components.material_actionoverflow = {
	name: 'material_actionoverflow'
	,type: 'material_actionoverflow'
	,lib: _library
	,caption: 'Action Overflow'
	,icon: '0px -1680px'
	,helper: prx.url.devices+_path + 'actionoverflow/helper.png'
	,width: 56*prx.componentsHelper.getScale(_library)
	,height: 56*prx.componentsHelper.getScale(_library)
	,resizable : true
	,actionOverflowColor: '757575'
	,actionbarActionOverflowActions: []
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: MORPHING ICON
prx.components.material_morphing_lines = {
	name: 'material_morphing_lines'
	,type: 'material_morphing_lines'
	,lib: _library
	,caption: 'Morphing Icon'
	,icon: '-800px -1360px'
	,helper: prx.url.devices+ _path + 'morphing_lines/helper.png'
	,width: 56*prx.componentsHelper.getScale(_library)
	,height: 56*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: '757575'
	,backgroundColorActive: '757575'
	,active: false
	,itemtype: 'lines-close'
	,checkboxActionsOnActive: []
	,checkboxActionsOnDeactive: []  
	,aspectratio: true
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
	,aspectratio: true
}

//TYPE: MORPHING ICON CLOSE
prx.components.material_morphing_lines_close = {
	name: 'material_morphing_lines_close'
	,type: 'material_morphing_lines'
	,lib: _library
	,caption: 'Morphing Icon Close'
	,icon: '-800px -1360px'
	,helper: prx.url.devices+ _path + 'morphing_lines/helper.png'
	,width: 56*prx.componentsHelper.getScale(_library)
	,height: 56*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: '757575'
	,backgroundColorActive: '757575'
	,active: false
	,itemtype: 'lines-close'
	,checkboxActionsOnActive: []
	,checkboxActionsOnDeactive: []  
	,aspectratio: true
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
	,aspectratio: true
}

//TYPE: MORPHING ICON ARROW LEFT
prx.components.material_morphing_lines_arrow = {
	name: 'material_morphing_lines_arrow'
	,type: 'material_morphing_lines'
	,lib: _library
	,caption: 'Morphing Icon Arrow'
	,icon: '-800px -1440px'
	,helper: prx.url.devices+ _path + 'morphing_lines/helper.png'
	,width: 56*prx.componentsHelper.getScale(_library)
	,height: 56*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: '757575'
	,backgroundColorActive: '757575'
	,active: false
	,itemtype: 'lines-arrow'
	,checkboxActionsOnActive: []
	,checkboxActionsOnDeactive: []  
	,aspectratio: true
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
	,aspectratio: true
}


/***** FORM COMPONENTS *****/
//TYPE: TEXTFIELD
prx.components.material_textfield = {
	name: 'material_textfield'
	,type: 'material_textfield'
	,lib: _library
	,caption: 'Text Field'
	,icon: '-400px -1360px'
	,helper: prx.url.devices+_path + 'textfield/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 48*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
}

//TYPE: TEXTFIELD (FULL WIDTH)
prx.components.material_textfield_full_width = {
	name: 'material_textfield_full_width'
	,type: 'material_textfield'
	,lib: _library
	,caption: 'Text Field (Full Width)'
	,icon: '-560px -1360px'
	,helper: prx.url.devices+_path + 'textfield_full/helper.png'		
	,width: "full"
	,height: 58*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
	,isFull: true
}

//TYPE: TEXTFIELD WITH ICON
prx.components.material_textfield_icon = {
	name: 'material_textfield_icon'
	,type: 'material_textfield'
	,lib: _library
	,caption: 'Text Field with Icon'
	,icon: '-640px -1360px'
	,helper: prx.url.devices+_path + 'textfield_icon/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 48*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
	,hasIcon: true
	,imgSrc: {"fileId":"3bfcda2308acf98adb9d2ffd25991048.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","folderId":"f1424091903407","targetSrc":"generated/3bfcda2308acf98adb9d2ffd25991048_7d7d7d.svg","color":"757575"}
}

//TYPE: PASSWORDFIELD
prx.components.material_passwordfield = {
	name: 'material_passwordfield'
	,type: 'material_textfield'
	,lib: _library
	,caption: 'Password Field'
	,icon: '-720px -1360px'
	,helper: prx.url.devices+ _path + 'textfield_password/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 48*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'password'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
}

//TYPE: TEXTAREA
prx.components.material_textarea = {
	name: 'material_textarea'
	,type: 'material_textarea'
	,lib: _library
	,caption: 'Textarea'
	,icon: '0px -1440px'
	,helper: prx.url.devices+ _path + 'textarea/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 96*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,label: 'Label'
	,labelColor: 'a9a9a9'
	,labelSize: 12*prx.componentsHelper.getScale(_library)
	,hasLabel: true
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
}

//TYPE: TEXTAREA (FULL WIDTH)
prx.components.material_textarea_full_width = {
	name: 'material_textarea_full_width'
	,type: 'material_textarea'
	,lib: _library
	,caption: 'Textarea (Full Width)'
	,icon: '-160px -1440px'
	,helper: prx.url.devices+ _path + 'textarea_full/helper.png'		
	,width: "full"
	,height: 96*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,label: 'Label'
	,labelColor: '757575'
	,labelSize: 12*prx.componentsHelper.getScale(_library)
	,hasLabel: false
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
	,isFull: true
}

//TYPE: FLOATING LABEL TEXTFIELD
prx.components.material_textfield_floating_label = {
	name: 'material_textfield_floating_label'
	,type: 'material_textfield_floating_label'
	,lib: _library
	,caption: 'Text Field Floating Label'
	,icon: '-480px -1360px'
	,helper: prx.url.devices+_path + 'textfield_floating_label/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 62*prx.componentsHelper.getScale(_library)
	,value: ''
	,inputtype: 'text'
	,fieldtype: 'input'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,label: 'Label Text'
	,labelColor: '757575'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
	,labelAlign: 'left'
}

//TYPE: FLOATING LABEL TEXTAREA FIELD
prx.components.material_textarea_floating_label = {
	name: 'material_textarea_floating_label'
	,type: 'material_textfield_floating_label'
	,lib: _library
	,caption: 'Textarea Floating Label'
	,icon: '-80px -1440px'
	,helper: prx.url.devices+_path + 'textfield_floating_label/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,value: ''
	,inputtype: 'text'
	,fieldtype: 'textarea'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,label: 'Label Text'
	,labelColor: '757575'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
	,labelAlign: 'left'
	,isFull: false
}

//TYPE: CHECKBOX
prx.components.material_checkbox = {
	name: 'material_checkbox'
	,type: 'material_checkbox'
	,lib: _library
	,caption: 'Checkbox'
	,icon: '-240px -1440px'
	,helper: prx.url.devices+ _path + 'checkbox/helper.png'
	,width: 18*prx.componentsHelper.getScale(_library)
	,height: 18*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'none'
	,borderColor: '757575'
	,checkColor: 'ffffff'
	,activeColor: '2196F3'
	,active: true
	,checkboxActionsOnActive: []
	,checkboxActionsOnDeactive: []  
	,aspectratio: true
}

//TYPE: RADIO BUTTON
prx.components.material_radiobutton = {
	name: 'material_radiobutton'
	,type: 'material_radiobutton'
	,lib: _library
	,caption: 'Radio Button'
	,icon: '-320px -1440px'
	,helper: prx.url.devices+ _path + 'radio/helper.png'
	,width: 20*prx.componentsHelper.getScale(_library)
	,height: 20*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'none'
	,borderColor: '757575'
	,activeColor: '2196F3'
	,active: true
	,actAsCheckbox: true
	,checkboxActionsOnActive: []
   	,checkboxActionsOnDeactive: []
	,aspectratio: true
}

//TYPE: ONOFF SWITCH
prx.components.material_onoffswitch = {
	name: 'material_onoffswitch'
	,type: 'material_onoffswitch'
	,lib: _library
	,caption: 'On/Off switch'
	,icon: '-400px -1440px'
	,helper: prx.url.devices+_path + 'onoff_switch/helper.png'
	,width: 37*prx.componentsHelper.getScale(_library)
	,height: 21*prx.componentsHelper.getScale(_library)
	,resizable : true
	,textProperties: []
	,activeLabelColor: '42A5F5'
	,activeSwitchColor: '2196F3'
	,inactiveLabelColor: '9E9E9E'
	,inactiveSwitchColor: 'FFFFFF'
	,activeShadowColor: 'rgba(0, 0, 0, 0.2)'
	,inactiveShadowColor: '757575'
	,active: true
	,flipswitchActionsOnActive: []
	,flipswitchActionsOnDeactive: []
}

//TYPE: CONTINUOUS SLIDER
prx.components.material_slider_continuous = {
	name: 'material_slider_continuous'
	,type: 'material_slider_continuous'
	,lib: _library
	,caption: 'Continuous Slider'
	,icon: '-560px -1440px'
	,helper: prx.url.devices+_path + 'slider_continuous/helper.png'
	,width: 300*prx.componentsHelper.getScale(_library)
	,height: 40*prx.componentsHelper.getScale(_library)
	,resizable : true
	,barThickness: 2*prx.componentsHelper.getScale(_library)
	,min: 0
	,max: 100
	,barColor: '9E9E9E'
	,fillBarColor: '2196F3'
	,sliderColor: '2196F3'
	,sliderPosition: '70'
	,properties: "v,l,o,hpos,vpos,w,h"
	,isDiscrete: false
}

//TYPE: DISCRETE SLIDER
prx.components.material_slider_discrete = {
	name: 'material_slider_discrete'
	,type: 'material_slider_continuous'
	,lib: _library
	,caption: 'Discrete Slider'
	,icon: '-640px -1440px'
	,helper: prx.url.devices+_path + 'slider_discrete/helper.png'
	,width: 300*prx.componentsHelper.getScale(_library)
	,height: 40*prx.componentsHelper.getScale(_library)
	,resizable : true
	,textColor: 'ffffff'
	,textSize: 12*prx.componentsHelper.getScale(_library)
	,barThickness: 2*prx.componentsHelper.getScale(_library)
	,min: 0
	,max: 100
	,barColor: '9E9E9E'
	,fillBarColor: '2196F3'
	,sliderColor: '2196F3'
	,sliderPosition: '70'
	,properties: "v,l,o,hpos,vpos,w,h"
	,isDiscrete: true
	,badgeSize: 30*prx.componentsHelper.getScale(_library)
}

/***** LIST COMPONENTS *****/
//TYPE: BOTTOM SHEET
prx.components.material_bottomsheet_complex = {
	name: 'material_bottomsheet_complex'
	,type: 'material_bottomsheet_complex'
	,lib: _library
	,caption: 'Complex Bottom Sheet'
	,icon: '0px -1520px'
	,helper: prx.url.devices+ _path + 'bottomsheet_complex/helper.png'
	,width: "full"
	,height: 300*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,dividerColor: 'bbbbbb'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,actionTitleColor: '757575'
	,infoTitleColor: '000000'			
	,listitems: [
         {
        	text: 'Contact Name'
    		,itemtype: 'infoTitle'
			,subtitle: ''
 			,thumbnail: {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"}
 			,leftIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
        ,{
        	text: '(650)555-1234'
    		,itemtype: 'infoItem'
			,subtitle: 'Mobile'
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
        	,leftIcon: {"fileId":"3bfcda2308acf98adb9d2ffd25991048.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","folderId":"f1424091903407","targetSrc":"generated/3bfcda2308acf98adb9d2ffd25991048_2196f3.svg","color":"2196F3"}
			,rightIcon: {"fileId":"124ae0d28445f3f091c420e879dd6793.svg","name":"google__x2B_.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/124ae0d28445f3f091c420e879dd6793.svg","folderId":"f1352971179296"}
			,actions: []
  		}
        ,{
        	text: ''
    		,itemtype: 'separator'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,leftIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
        ,{
        	text: 'Update contact picture'
    		,itemtype: 'actionTitle'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,leftIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
        ,{
        	text: 'Upload photos'
    		,itemtype: 'actionItem'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,leftIcon: {"fileId":"67393b9c0b365f46f4c33c934a964a1a.svg","name":"cloud_upload.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/67393b9c0b365f46f4c33c934a964a1a.svg","folderId":"f1424098398753","targetSrc":"generated/67393b9c0b365f46f4c33c934a964a1a_7d7d7d.svg","color":"757575"}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
     ]
    ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: ACTION BOTTOM SHEET
prx.components.material_bottomsheet_action = {
	name: 'material_bottomsheet_action'
	,type: 'material_bottomsheet_action'
	,lib: _library
	,caption: 'Action Bottom Sheet'
	,icon: '-720px -1440px'
	,helper: prx.url.devices+ _path + 'bottomsheet_action/helper.png'
	,width: "full"
	,height: 235*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,dividerColor: 'bbbbbb'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,actionTitleColor: '757575'
	,infoTitleColor: '000000'			
	,listitems: [
        {
        	text: 'Create'
    		,itemtype: 'actionTitle'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,leftIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
        ,{
        	text: 'Folder'
    		,itemtype: 'actionItem'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,leftIcon: {"fileId":"87131ba67c3ed7c7a8b7f1b6dee8ea89.svg","name":"folder.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/87131ba67c3ed7c7a8b7f1b6dee8ea89.svg","folderId":"f1424098398753","targetSrc":"generated/87131ba67c3ed7c7a8b7f1b6dee8ea89_7d7d7d.svg","color":"757575"}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
        ,{
        	text: ''
    		,itemtype: 'separator'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,leftIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
        ,{
        	text: 'Upload photos or videos'
    		,itemtype: 'actionItem'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,leftIcon: {"fileId":"67393b9c0b365f46f4c33c934a964a1a.svg","name":"cloud_upload.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/67393b9c0b365f46f4c33c934a964a1a.svg","folderId":"f1424098398753","targetSrc":"generated/67393b9c0b365f46f4c33c934a964a1a_7d7d7d.svg","color":"757575"}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
     ]
    ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: INFO BOTTOM SHEET
prx.components.material_bottomsheet_info = {
	name: 'material_bottomsheet_info'
	,type: 'material_bottomsheet_info'
	,lib: _library
	,caption: 'Info Bottom Sheet'
	,icon: '-80px -1520px'
	,helper: prx.url.devices+ _path + 'bottomsheet_info/helper.png'
	,width: "full"
	,height: 235*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,dividerColor: 'bbbbbb'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,actionTitleColor: '757575'
	,infoTitleColor: '000000'			
	,listitems: [
        {
        	text: 'Contact Name'
    		,itemtype: 'infoTitle'
			,subtitle: ''
 			,thumbnail: {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"}
 			,leftIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
        ,{
        	text: '(650)555-1234'
    		,itemtype: 'infoItem'
			,subtitle: 'Mobile'
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
        	,leftIcon: {"fileId":"3bfcda2308acf98adb9d2ffd25991048.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","folderId":"f1424091903407","targetSrc":"generated/3bfcda2308acf98adb9d2ffd25991048_2196f3.svg","color":"2196F3"}
			,rightIcon: {"fileId":"124ae0d28445f3f091c420e879dd6793.svg","name":"google__x2B_.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/124ae0d28445f3f091c420e879dd6793.svg","folderId":"f1352971179296"}
			,actions: []
  		}
        ,{
        	text: ''
    		,itemtype: 'separator'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,leftIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
        ,{
        	text: 'contact_name@sample.com'
    		,itemtype: 'infoItem'
			,subtitle: 'Personal'
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,leftIcon: {"fileId":"8ccae96eb3d9a10429594a4a6b7afdf8.svg","name":"email.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/8ccae96eb3d9a10429594a4a6b7afdf8.svg","folderId":"f1424091903407","targetSrc":"generated/8ccae96eb3d9a10429594a4a6b7afdf8_2196f3.svg","color":"2196F3"}
 			,rightIcon: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
        	,actions: []
  		}
     ]
    ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: LIST COMPLEX
prx.components.material_list_complex = {
	name: 'material_list_complex'
	,type: 'material_list_complex'
	,lib: _library
	,caption: 'Complex List'
	,icon: '-800px -1280px'
	,helper: prx.url.devices+ _path + 'list_complex/helper.png'
	,width: "full"
	,height: 284*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,borderColor: 'bbbbbb'
	,borderWidth: 0*prx.componentsHelper.getScale(_library)
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleFont: 'Roboto Regular, sans-serif'
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,switchBackgroundColor: 'none'
	,switchBorderColor: '757575'
	,checkColor: 'ffffff'
	,switchActiveColor: '2196F3'
	,thumbFrameColor: "f9f9f9"
	,thumbFrame: true
	,thumbpos: 'left'
	,iconpos: 'right'
	,listitems: [
  		{
        	text: 'Label 1'
    		,itemtype: 'withAvatar'
			,subtitle: ''
 			,thumbnail: {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"}
        	,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
	 		,checked: true
			,actions: []
  		},
  		{
        	text: 'Label 2'
    		,itemtype: 'withAvatarIcon'
			,subtitle: ''
 			,thumbnail: {"fileId":"fb6f0d79ca71fc442563cdb95fa60eb6.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png","bucketsource":"main","name":" avatar_male.png"}
        	,imgSrc: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
	 		,checked: true
			,actions: []
  		},
  		{
        	text: 'Label 3'
    		,itemtype: 'withIcon'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
        	,imgSrc: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
	 		,checked: true
			,actions: []
  		},
  		{
        	text: 'Label 4'
    		,itemtype: 'withCheckbox'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
        	,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
			,checked: true
			,actions: []
  		},
  		{
        	text: 'Label 5'
    		,itemtype: 'withRadio'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
        	,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
			,checked: true
			,actions: []
  		}
     ]
    ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: LIST BASIC
prx.components.material_list_basic = {
	name: 'material_list_basic'
	,type: 'material_list_basic'
	,lib: _library
	,caption: 'Basic List'
	,icon: '-160px -1520px'
	,helper: prx.url.devices+ _path + 'list_basic/helper.png'
	,width: "full"
	,height: 111*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,borderColor: 'bbbbbb'
	,borderWidth: 0*prx.componentsHelper.getScale(_library)
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleFont: 'Roboto Regular, sans-serif'
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,thumbFrameColor: "f9f9f9"
	,thumbFrame: true
	,thumbpos: 'left'
	,iconpos: 'right'
	,listitems: [
         {
        	text: 'Label 1'
    		,itemtype: 'basic'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 		 	,checked: false
        	,actions: []
  		},
  		{
        	text: 'Label 2'
    		,itemtype: 'basic'
			,subtitle: ''
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 		 	,checked: false
        	,actions: []
  		}
     ]
    ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: LIST WITH AVATAR
prx.components.material_list_avatar = {
	name: 'material_list_avatar'
	,type: 'material_list_avatar'
	,lib: _library
	,caption: 'List with Avatar'
	,icon: '-320px -1520px'
	,helper: prx.url.devices+ _path + 'list_avatar/helper.png'
	,width: "full"
	,height: 111*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,borderColor: 'bbbbbb'
	,borderWidth: 0*prx.componentsHelper.getScale(_library)
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleFont: 'Roboto Regular, sans-serif'
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,thumbFrameColor: "f9f9f9"
	,thumbFrame: true
	,thumbpos: 'left'
	,iconpos: 'right'
	,listitems: [
   		{
         	text: 'Label 1'
     		,itemtype: 'withAvatar'
 			,subtitle: ''
  			,thumbnail: {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"}
         	,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
 	 		,checked: true
 			,actions: []
   		},
  		{
        	text: 'Label 2'
    		,itemtype: 'withAvatar'
			,subtitle: ''
 			,thumbnail: {"fileId":"fb6f0d79ca71fc442563cdb95fa60eb6.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png","bucketsource":"main","name":" avatar_male.png"}
        	,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
	 		,checked: true
			,actions: []
  		}
     ]
    ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: LIST WITH ICON
prx.components.material_list_icon = {
	name: 'material_list_icon'
	,type: 'material_list_icon'
	,lib: _library
	,caption: 'List with Icon'
	,icon: '-400px -1520px'
	,helper: prx.url.devices+ _path + 'list_icon/helper.png'
	,width: "full"
	,height: 111*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,borderColor: 'bbbbbb'
	,borderWidth: 0*prx.componentsHelper.getScale(_library)
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleFont: 'Roboto Regular, sans-serif'
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,thumbFrameColor: "f9f9f9"
	,thumbFrame: true
	,thumbpos: 'left'
	,iconpos: 'right'
	,listitems: [
       {
	      	text: 'Label 1'
	  		,itemtype: 'withIcon'
			,subtitle: ''
			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
			,imgSrc: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
	 		,checked: true
			,actions: []
		},
		{
	      	text: 'Label 2'
	  		,itemtype: 'withIcon'
			,subtitle: ''
			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
			,imgSrc: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
	 		,checked: true
			,actions: []
		}
   ]
  ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: LIST WITH AVATAR AND ICON
prx.components.material_list_avatar_icon = {
	name: 'material_list_avatar_icon'
	,type: 'material_list_avatar_icon'
	,lib: _library
	,caption: 'List with Avatar and Icon'
	,icon: '-480px -1520px'
	,helper: prx.url.devices+ _path + 'list_avatar_icon/helper.png'
	,width: "full"
	,height: 111*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,borderColor: 'bbbbbb'
	,borderWidth: 0*prx.componentsHelper.getScale(_library)
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleFont: 'Roboto Regular, sans-serif'
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,thumbFrameColor: "f9f9f9"
	,thumbFrame: true
	,thumbpos: 'left'
	,iconpos: 'right'
	,listitems: [
		{
			text: 'Label 1'
			,itemtype: 'withAvatarIcon'
			,subtitle: ''
			,thumbnail: {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"}
			,imgSrc: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
			,checked: true
			,actions: []
		},
		{
			text: 'Label 2'
			,itemtype: 'withAvatarIcon'
			,subtitle: ''
			,thumbnail: {"fileId":"fb6f0d79ca71fc442563cdb95fa60eb6.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png","bucketsource":"main","name":" avatar_male.png"}
			,imgSrc: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
			,checked: true
			,actions: []
		}
   ]
  ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: LIST WITH CHECKBOX
prx.components.material_list_checkbox = {
	name: 'material_list_checkbox'
	,type: 'material_list_checkbox'
	,lib: _library
	,caption: 'Checkbox List'
	,icon: '-640px -1520px'
	,helper: prx.url.devices+ _path + 'list_checkbox/helper.png'
	,width: "full"
	,height: 111*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,borderColor: 'bbbbbb'
	,borderWidth: 0*prx.componentsHelper.getScale(_library)
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleFont: 'Roboto Regular, sans-serif'
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,switchBackgroundColor: 'none'
	,switchBorderColor: '999999'
	,checkColor: 'ffffff'
	,switchActiveColor: '2196F3'
	,thumbFrameColor: "f9f9f9"
	,thumbFrame: true
	,thumbpos: 'left'
	,iconpos: 'right'
	,listitems: [
		{
	      	text: 'Label 1'
	  		,itemtype: 'withCheckbox'
			,subtitle: ''
			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
      		,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
			,checked: true
			,actions: []
		},
		{
	      	text: 'Label 2'
	  		,itemtype: 'withCheckbox'
			,subtitle: ''
			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
      		,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
			,checked: true
			,actions: []
		}
   ]
  ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}


//TYPE: LIST WITH RADIO
prx.components.material_list_radio = {
	name: 'material_list_radio'
	,type: 'material_list_radio'
	,lib: _library
	,caption: 'Radio List'
	,icon: '0px -1600px'
	,helper: prx.url.devices+ _path + 'list_radio/helper.png'
	,width: "full"
	,height: 111*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,borderColor: 'bbbbbb'
	,borderWidth: 0*prx.componentsHelper.getScale(_library)
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,subtitleFont: 'Roboto Regular, sans-serif'
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor: '999999'
	,subtitleProperties: []
	,backgroundColor: 'ffffff'
	,switchBackgroundColor: 'none'
	,switchBorderColor: '999999'
	,switchActiveColor: '2196F3'
	,thumbFrameColor: "f9f9f9"
	,thumbFrame: true
	,thumbpos: 'left'
	,iconpos: 'right'
	,listitems: [
		{
	      	text: 'Label 1'
	  		,itemtype: 'withRadio'
			,subtitle: ''
			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
    		,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
			,checked: true
			,actions: []
		},
		{
	      	text: 'Label 2'
	  		,itemtype: 'withRadio'
			,subtitle: ''
			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
    		,imgSrc: {"fileId":"","folderId":"","url":"","assetType":"icon","name":""}
			,checked: true
			,actions: []
		}
 ]
,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}


//TYPE: DETERMINATE PROGRESS BAR
prx.components.material_progress_determinate = {
	name: 'material_progress_determinate'
	,type: 'material_progress_determinate'
	,lib: _library
	,caption: 'Determinate Progress Bar'
	,icon: '-80px -1600px'
	,helper: prx.url.devices+ _path + 'progressbar_determinate/helper.png'
	,width: "full"
	,height: 5*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'rgba(35, 150, 245, 0.3)'
	,percentBarBackgroundColor: '2196F3'
	,percentBarValue : "36"
	,isDownloading: true
}

//TYPE: INDETERMINATE PROGRESS BAR
prx.components.material_progress_indeterminate = {
	name: 'material_progress_indeterminate'
	,type: 'material_progress_determinate'
	,lib: _library
	,caption: 'Indeterminate Progress Bar'
	,icon: '-160px -1600px'
	,helper: prx.url.devices+ _path + 'progressbar_indeterminate/helper.png'
	,width: "full"
	,height: 5*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'rgba(35, 150, 245, 0.3)'
	,percentBarBackgroundColor: '2196F3'
	,isDownloading: false
}

//TYPE: ALERT DIALOG
prx.components.material_dialog_alert = {
	name: 'material_dialog_alert'
	,type: 'material_dialog_alert'
	,lib: _library
	,caption: 'Alert Dialog with Title'
	,icon: '-240px -1600px'
	,helper: prx.url.devices+ _path + 'alert_dialog/helper.png'
	,width: 282*prx.componentsHelper.getScale(_library)
	,height: 193*prx.componentsHelper.getScale(_library)
	,resizable : true
	
	,titleFont: 'Roboto Regular, sans-serif'
	,titleSize: 20*prx.componentsHelper.getScale(_library)
	,titleColor:  '000000'
	,titleProperties: ['bold']
	,title: 'Use location service?'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  '616161'
	,textProperties: []
	,text: 'Let X apps determine location. This means sending anonymous location data..'	
	,buttonSize: 14*prx.componentsHelper.getScale(_library)
	,backgroundColor: 'ffffff'
	,withTitle: true
	,withText: true
	,buttons: [{
		actions: [],
		text: 'DISAGREE',
		textColor: '2196F3',
		textProperties: ['bold']
	},{
		actions: [],
		text: 'AGREE',
		textColor: '2196F3',
		textProperties: ['bold']
	}]
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: SIMPLE ALERT DIALOG
prx.components.material_dialog_alert_simple = {
	name: 'material_dialog_alert_simple'
	,type: 'material_dialog_alert_simple'
	,lib: _library
	,caption: 'Simple Alert Dialog'
	,icon: '-320px -1600px'
	,helper: prx.url.devices+ _path + 'alert_dialog_simple/helper.png'
	,width: 282*prx.componentsHelper.getScale(_library)
	,height: 143*prx.componentsHelper.getScale(_library)
	,resizable : true
	
	,titleFont: 'Roboto Regular, sans-serif'
	,titleSize: 20*prx.componentsHelper.getScale(_library)
	,titleColor:  '000000'
	,titleProperties: []
	,title: ''
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  '616161'
	,textProperties: []
	,text: 'Let X apps determine location. This means sending anonymous location data..'
	,buttonSize: 14*prx.componentsHelper.getScale(_library)		
	,backgroundColor: 'ffffff'
	,withTitle: false
	,withText: true
	,buttons: [{
		actions: [],
		text: 'DISAGREE',
		textColor: '2196F3',
		textProperties: ['bold']
	},{
		actions: [],
		text: 'AGREE',
		textColor: '2196F3',
		textProperties: ['bold']
	}]
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: CONFIRMATION DIALOG
prx.components.material_dialog_confirmation = {
	name: 'material_dialog_confirmation'
	,type: 'material_dialog_confirmation'
	,lib: _library
	,caption: 'Confirmation Dialog'
	,icon: '-400px -1600px'
	,helper: prx.url.devices+ _path + 'alert_dialog_confirm/helper.png'
	,width: 281*prx.componentsHelper.getScale(_library)
	,height: 260*prx.componentsHelper.getScale(_library)
	,resizable : true
	
	,titleFont: 'Roboto Regular, sans-serif'
	,titleSize: 20*prx.componentsHelper.getScale(_library)
	,titleColor:  '000000'
	,titleProperties: []
	,title: 'Choose Ringtone'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  '616161'
	,textProperties: []
	,text: ''		
	,buttonSize: 14*prx.componentsHelper.getScale(_library)
	,backgroundColor: 'ffffff'
	,withTitle: true
	,withText: false
	,confirmDialog: true
	,buttons: [{
		actions: [],
		text: 'CANCEL',
		textColor: '2196F3',
		textProperties: ['bold']
	},{
		actions: [],
		text: 'OK',
		textColor: '2196F3',
		textProperties: ['bold']
	}]
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: SIMPLE DIALOG
prx.components.material_dialog_simpledialog = {
	name: 'material_dialog_simpledialog'
	,type: 'material_dialog_simpledialog'
	,lib: _library
	,caption: 'Simple Dialog'
	,icon: '-560px -1600px'
	,helper: prx.url.devices+ _path + 'menu_dialog/helper.png'
	,width: 280*prx.componentsHelper.getScale(_library)
	,height: 174*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,backgroundColor: 'ffffff'		
	,listitems: [
        {
        	text: 'Menu Item 1'
    		,itemtype: 'dialog'
 			,thumbnail: {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"}
        	,actions: []
  		}
        ,{
        	text: 'Menu Item 2'
    		,itemtype: 'dialog'
 			,thumbnail: {"fileId":"fb6f0d79ca71fc442563cdb95fa60eb6.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png","bucketsource":"main","name":" avatar_male.png"}
 			,actions: []
  		}
        ,{
        	text: 'Menu Item 3'
    		,itemtype: 'dialog'
 			,thumbnail: {"fileId":"4231b8382dafd697f1f3dd01a3397082.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","folderId":"f1424091950266","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
 			,actions: []
  		}
     ]
    ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

//TYPE: SIMPLE MENU
prx.components.material_dialog_simplemenu = {
	name: 'material_dialog_simplemenu'
	,type: 'material_dialog_simplemenu'
	,lib: _library
	,caption: 'Simple Menu'
	,icon: '-480px -1600px'
	,helper: prx.url.devices+ _path + 'menu_simple/helper.png'
	,width: 280*prx.componentsHelper.getScale(_library)
	,height: 143*prx.componentsHelper.getScale(_library)
	,resizable : true		
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '000000'
	,textProperties: []
	,backgroundColor: 'ffffff'		
	,listitems: [
        {
        	text: 'Menu Item 1'
    		,itemtype: 'menu'
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
        	,actions: []
  		}
        ,{
        	text: 'Menu Item 2'
    		,itemtype: 'menu'
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,actions: []
  		}
        ,{
        	text: 'Menu Item 3'
    		,itemtype: 'menu'
 			,thumbnail: {"fileId":"","folderId":"","url":"","assetType":"","name":""}
 			,actions: []
  		}
     ]
    ,dynamicSizeExpand: 'v'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

prx.components.material_ripple = {
	name: 'material_ripple'
	,type: 'material_ripple'
	,lib: _library
	,caption: 'Ripple area Rectangular'
	,icon: '-240px -1680px'
	,helper: prx.url.devices+ _path + 'ripple/helper.png'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
}

prx.components.material_ripple_circ = {
	name: 'material_ripple_circ'
	,type: 'material_ripple'
	,lib: _library
	,caption: 'Ripple area Circular'
	,icon: '-240px -1680px'
	,helper: prx.url.devices+ _path + 'ripple/helper.png'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
	,circ: true
	,aspectratio: true
}

//TYPE: TOAST
prx.components.material_toast = {
	name: 'material_toast'
	,type: 'material_toast'
	,lib: _library
	,caption: 'Toast'
	,icon: '-640px -1600px'
	,helper: prx.url.devices+ _path + 'toast/helper.png'
	,width: 289*prx.componentsHelper.getScale(_library)
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  'ffffff'
	,textProperties: []
	,text: 'Message sent'
	,backgroundColor: '424242'
	,shadowColor: 'rgba(0,0,0,0.2)'
}

//TYPE: SNACKBAR WITH ACTION
prx.components.material_snackbar_action = {
	name: 'material_snackbar_action'
	,type: 'material_snackbar_action'
	,lib: _library
	,caption: 'Snackbar with Action'
	,icon: '-800px -1600px'
	,helper: prx.url.devices+ _path + 'snackbar_action/helper.png'
	,width:"full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  'ffffff'
	,textProperties: []
	,text: 'Marked as read'
	,actionFont: 'Roboto Medium, sans-serif'
	,actionSize: 14*prx.componentsHelper.getScale(_library)
	,actionColor: '2196F3'
	,actionProperties: ['bold']
	,action: "UNDO"
	,hasAction: true
	,backgroundColor: '424242'
	,shadowColor: 'rgba(0,0,0,0.2)'
	,rippleEffect: true
	,rippleEffectType: 'light'
	,rippleEffectColor: 'rgba(255, 255, 255, 0.1)'
}

//TYPE: SNACKBAR
prx.components.material_snackbar = {
	name: 'material_snackbar'
	,type: 'material_snackbar'
	,lib: _library
	,caption: 'Simple Snackbar'
	,icon: '-720px -1600px'
	,helper: prx.url.devices+ _path + 'snackbar/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  'ffffff'
	,textProperties: []
	,text: 'Message sent'
	,hasAction: false
	,backgroundColor: '424242'
	,shadowColor: 'rgba(0,0,0,0.2)'
}

//TYPE: TOOLBAR
prx.components.material_toolbar = {
	name: 'material_toolbar'
	,type: 'material_toolbar'
	,lib: _library
	,caption: 'Toolbar'
	,icon: '-160px -1680px'
	,helper: prx.url.devices+ _path + 'toolbar/helper.png'
	,width: "full"
	,height: 56*prx.componentsHelper.getScale(_library)
	,actions:[]
	,backgroundColor: '2196F3'
	,shadowColor: 'rgba(0, 0, 0, 0.2)'
	,shadowEnabled: false
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '#2E2E2E'
	,textProperties: []
	,textAlign: 'center'
	,text: ''
}

//TYPE: RECTANGLE WITH SHADOW
prx.components.material_rectangle_shadow = {
	name: 'material_rectangle_shadow'
	,type: 'material_rectangle_shadow'
	,lib: _library
	,caption: 'Rectangle with Shadow'
	,icon: '-80px -1680px'
	,helper: prx.url.devices+ _path + 'rectangle_shadow/helper.png'
	,width: "full"
	,height: 100*prx.componentsHelper.getScale(_library)
	,backgroundColor: '2196F3'
	,shadowColor: 'rgba(0, 0, 0, 0.2)'
	,borderWidth: 0*prx.componentsHelper.getScale(_library)
	,borderColor: '00BCD4'
	,borderRadius: 0*prx.componentsHelper.getScale(_library)
	,actions:[]
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '#2E2E2E'
	,textProperties: []
	,textAlign: 'center'
	,text: ''
}
