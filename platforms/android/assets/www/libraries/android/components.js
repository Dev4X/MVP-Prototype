/********************************************************************************************/
/********************************************************************************************/
/*******************************            ANDROID             ******************************/
/********************************************************************************************/
/********************************************************************************************/


var _library = 'android';
var _path = '/android/';

prx.library_scales = prx.library_scales || {};
prx.library_scales.android = 1;

/***** TOOLBAR COMPONENTS *****/
// TYPE: ACTION BAR
prx.types.android_actionbar = {
	name: "android_actionbar"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(typeof(item.overlay) == "undefined") { item.overlay = false; }

		var borderStyle = '';
		switch(item.positioning) {
		case 'bottom':
			borderStyle = 'border-top: '+item.borderWidth+'px solid ' +prx.utils.getColor(item.borderColor)+ ';';
			break
		default:
			borderStyle = 'border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor) + ';';
			break
		}

		var cR = '<div id="' + _id + '" class="pos box type-android-actionbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>'
		cR += '<div class="actionbar-inner'+((item.actionOverflow) ? ' showActionOverflow' : '') +' liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor" style="background-color: '+prx.utils.getColor(item.backgroundColor)+'; '+borderStyle+'">'
		var _height = prx.componentsHelper.getRealDims(item, symbol).height;
		if(item.actionOverflow) {
			var _rectH = Math.floor(_height * 0.15);
			cR += '<div class="actionOverflow">'
			cR += '<div class="AO AO1 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: '+_rectH+'px; height: '+_rectH+'px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+';"></div>'
			cR += '<div class="AO AO2 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: '+_rectH+'px; height: '+_rectH+'px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+';"></div>'
			cR += '<div class="AO AO3 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: '+_rectH+'px; height: '+_rectH+'px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+';"></div>'
			cR += '</div>'
		}
		if(item.upCaret) {
			cR += '<div class="left-icon" style="line-height: '+_height+'px;">'
			cR += '<img src="'+prx.componentsHelper.getAssetUrl(item.upCaretIcon)+'" style="height: '+(item.upCaretIconSize * 20)+'%;"/>'
			cR += '</div>'
		}
		if(typeof(item.selectionIcon)!= "undefined" && item.selectionIcon.url != "") {
			cR += '<div class="left-icon" style="line-height: '+_height+'px;">'
			cR += '<img src="'+prx.componentsHelper.getAssetUrl(item.selectionIcon)+'" style="height: '+(item.selectionIconSize * 20)+'%; border-right: '+(1*prx.componentsHelper.getScale(item.lib))+'px solid '+prx.utils.getColor(item.borderColor)+'; padding-left: '+(10*prx.componentsHelper.getScale(item.lib))+'px;"/>'
			cR += '</div>'
		}
		if(typeof(item.text)!= "undefined" && item.text != "") {
			var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

			cR += '<div class="caption liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont" style="line-height: '+_height+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+_props+'">'
			cR += '<span data-editableproperty="text">'+item.text+'</span>';
			cR += '</div>'
		}
		cR += '</div>'
		cR += '</div>'
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _height = prx.componentsHelper.getRealDims(item).height;
		var _rectH = Math.floor(_height * 0.15);
		$('#'+_id).find('.AO').width(_rectH).height(_rectH)
	}
	,interactions: [
		{
			caption: 'Action Overflow Interactions',
			name: 'actionbarActionOverflowActions',
			type: 'action',
			value: function(item,name) {
				if(typeof(item.actionbarActionOverflowActions) == "undefined") {
					if (typeof(item.actions) == "undefined") {
						item.actionbarActionOverflowActions = [];
					} else {
						item.actionbarActionOverflowActions = item.actions;
					}
				}
				return item.actionbarActionOverflowActions.length;
			}
			,hiddenByDefault: function(item) {
				return (!item.actionOverflow);
			},
			changeProperty: { caption: 'Interactions', selector: '.actions-actions1', property: 'action', transitionable: false, changeable: false }

		}
		,{
			caption: 'Up Caret Interactions',
			name: 'actionbarUpCaretActions',
			type: 'action',
			value: function(item,name) {
				if (typeof(item.actionbarUpCaretActions) == "undefined") {
					item.actionbarUpCaretActions = [];
				}
				return item.actionbarUpCaretActions.length;
			}
			,hiddenByDefault: function(item) {
				return (!item.upCaret);
			},
			changeProperty: { caption: 'Interactions', selector: '.actions-actions1', property: 'action', transitionable: false, changeable: false }
		}
	]
	,editableProperties: [
	                {
						caption: 'Text'
						,name: 'text'
						,type: 'input'
						,value: function(item,name) {
							if(typeof(item.text) == "undefined") {
								return "";
							}
							return item.text;
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
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.backgroundColor
				],[
					{
						caption: 'Border'
						,name: 'positioning'
						,proptype: 'border-position'
						,type: 'select'
						,value: function(item,name) {
							return item.positioning;
						}
						,values: [{ displayValue: 'Top', value: 'top'}, { displayValue: 'Bottom', value: 'bottom'}]
						,changeProperty: {
	                		caption: 'Border position',
	                		rerender: true,
	                		changeable: false
	                	}
					},
					{
						caption: false,
						name: 'borderWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) { return item.borderWidth; },
						values: { min: 0, max: 10, step: 1 }
						,changeProperty: {
	                		caption: 'Border width',
	                		rerender: true
	                	}
					},{
						caption: false
						,name: 'borderColor'
						,proptype: 'border-color'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.borderColor;
						}
						,liveUpdate: 'border-color'
						,changeProperty: {
	                		caption: 'Border color',
	                		selector: '.changeProperty-borderColor',
	                		property: 'border-color',
	                		transitionable: true
	                	}

					}
				]
			]
		},{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
					prx.commonproperties.textColor
				],[
					prx.commonproperties.textProperties
				]
			]
		},{
			caption: 'Action Overflow',
			properties: [
				[
					{
						caption: 'Display action overflow'
						,name: 'actionOverflow'
						,type: 'onoff'
						,value: function(item,name) {
							return item.actionOverflow;
						}
						,onChange: function(item) {
							if(item.actionOverflow) {
								$('#property-actionOverflowColor, .interaction-property-group[data-action-property=actionbarActionOverflowActions]').show();
							} else {
								$('#property-actionOverflowColor, .interaction-property-group[data-action-property=actionbarActionOverflowActions]').hide();
							}
						}
						,changeProperty: {
	                		caption: 'Action Overflow',
	                		rerender: true
	                	}
					},{
						caption: 'Color'
						,name: 'actionOverflowColor'
						,proptype: 'background-color-2-actionoverflow'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.actionOverflowColor;
						}
						,hiddenByDefault: function(item) {
							return (!item.actionOverflow);
						}
						,liveUpdate: 'background-color'
						,changeProperty: {
	                		caption: 'Action Overflow color',
	                		selector: '.actionOverflowColor',
	                		property: 'background-color',
	                		transitionable: true
	                	}
					}
				]
			]
		},{
			caption: 'Up Caret',
			properties: [
				[
					{
						caption: 'Display Up Caret?'
						,name: 'upCaret'
						,type: 'onoff'
						,value: function(item,name) {
							return item.upCaret;
						}
						,onChange: function(item) {
							if(item.upCaret) {
								$('#property-upCaretIcon, #property-upCaretIconSize, .interaction-property-group[data-action-property=actionbarUpCaretActions]').show();
							} else {
								$('#property-upCaretIcon, #property-upCaretIconSize, .interaction-property-group[data-action-property=actionbarUpCaretActions]').hide();
							}
						}
						,changeProperty: {
	                		caption: 'Up Caret',
	                		rerender: true
	                	}
					}
				],[
					{
						caption: false,
						name: 'upCaretIcon',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(typeof(item.upCaretIcon) == "undefined" || item.upCaretIcon.url == '') {
								return 'No icon selected';
							}
							return item.upCaretIcon.name;
						}
						,value: function(item,name) {
							if(typeof(item.upCaretIcon) == "undefined") {
								item.upCaretIcon = {
										fileId: '',
										folderId: '',
										url: '',
										assetType: 'icon',
										name: ''
									}
							}
							return $.toJSON({
								allow: 'image',
								asset: item.upCaretIcon
							});
						}
						,hiddenByDefault: function(item) {
							return (!item.upCaret);
						}
						,changeProperty: {
	                		caption: 'Up Caret Icon',
	                		rerender: true
	                	}
					}
				  ],[
					 {
						caption: 'Size'
						,name: 'upCaretIconSize'
						,proptype: 'icon-size'
						,type: 'select'
						,value: function(item,name) {
							return item.upCaretIconSize;
						}
						,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
						,hiddenByDefault: function(item,name){
							return (!item.upCaret);
						}
						,changeProperty: {
	                		caption: 'Up Caret size',
	                		rerender: true,
	                		changeable: false
	                	}
					}
				]
			]
		},{
			caption: 'Selection Icon',
			properties: [
				[
					{
						caption: false,
						name: 'selectionIcon',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(typeof(item.selectionIcon) == "undefined" || item.selectionIcon.url == '') {
								return 'No icon selected';
							}
							return item.selectionIcon.name;
						}
						,value: function(item,name) {
							if(typeof(item.selectionIcon) == "undefined") {
								item.selectionIcon = {
										fileId: '',
										folderId: '',
										url: '',
										assetType: '',
										name: ''
									}
							}
							return $.toJSON({
								allow: 'image',
								asset: item.selectionIcon
							});
						}
						,changeProperty: {
	                		caption: 'Selection Icon',
	                		rerender: true
	                	}
					}
				],[
					{
						caption: 'Size'
						,name: 'selectionIconSize'
						,proptype: 'icon-size-2'
						,type: 'select'
						,value: function(item,name) {
							return item.selectionIconSize;
						}
						,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
						,changeProperty: {
	                		caption: 'Selection Icon size',
	                		rerender: true,
	                		changeable: false
						}
					}
				]]
		}
		,{
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

				]
			]
		}
	]



}

/* TYPE = CONTEXTUAL_ACTIONBAR */
prx.types.android_actionbar_contextual = prx.componentsHelper.cloneobject(prx.types.android_actionbar);
prx.types.android_actionbar_contextual.name = 'android_actionbar_contextual';
prx.componentsHelper.removeProperties(prx.types.android_actionbar_contextual.propertyGroups, ['upCaret', 'upCaretIcon', 'upCaretIconSize']);
prx.componentsHelper.removeProperties(prx.types.android_actionbar_contextual.interactions, ['actionbarUpCaretActions']);

/* TYPE = ACTIONBAR FINAL */
prx.componentsHelper.removeProperties(prx.types.android_actionbar.propertyGroups, ['text', 'textFont', 'textSize', 'textProperties', 'textColor', 'selectionIcon', 'selectionIconSize']);

// TYPE: FIXED TABBAR
prx.types.android_fixedtabbar = {
	name: "android_fixedtabbar"
	,onDisplay: function(item,containerid,pageid,symbol) {

		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(typeof(item.overlay) == "undefined") { item.overlay = false; }
		if(typeof(item.changeActive) == "undefined") { item.changeActive = true; }

		var cR = "";

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var _dims = prx.componentsHelper.getRealDims(item, symbol);
		var _itemwidth = _dims.width;
		var _width = Math.floor(_itemwidth/item.tabs.length);
		var _height = _dims.height;

		cR = cR +  '<div id="' + _id + '" class="pos box type-android-fixed-tabbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';
		cR += '<style>';
		cR += '#'+_id+' input:checked + label { border-bottom: '+item.activeBorderWidth+'px solid '+prx.utils.getColor(item.activeTabColor)+ '; }';
		cR += '#'+_id+' label:after { background-color: '+prx.utils.getColor(item.separatorColor)+'; }';

		cR += '</style>';

		cR = cR +  '<ul class="liveUpdate-backgroundColor liveUpdate-textColor changeProperty-textColor changeProperty-backgroundColor changeProperty-textSize changeProperty-textFont" style="background: '+prx.utils.getColor(item.backgroundColor)+';'+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; '+_props+' color: '+prx.utils.getColor(item.textColor)+'">';

		$.each(item.tabs, function(i,elm){
			if(typeof(elm.linkedscreen) == "undefined") { elm.linkedscreen = -1; }
			var cChecked = '';
			if (i==item.selected) {
				cChecked = ' checked="checked"';
			}
			cR += '<li class="dynamic-property" data-dynamic-property-index="'+i+'" id="'+_id+'-tabs-'+i+'" style="width: '+_width+'px;" '+((elm.linkedscreen != -1) ? 'data-linked-screen="'+elm.linkedscreen+'"' : '')+'>';
			cR += '<input type="radio" name="'+_id+'-radio" id="'+_id+'-radio-'+i+'"'+cChecked+' data-role="none" '+((!item.changeActive) ? 'disabled' : '')+'/>';
			cR += '<label for="'+_id+'-radio-'+i+'" style="line-height: '+_height+'px;" '+((i==item.selected) ? 'class="liveUpdate-activeTabColor"' : '')+'><span data-editableproperty="caption" data-dynamic-property-index="'+i+'">'+elm.caption+'</span></label>';
			cR += '</li>';
		});
		cR = cR +  '</ul>';
		cR = cR + '</div>';

		return cR;
	}
	,onResize: function(item, containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item);
		var _height = _dims.height;
		var _width = Math.floor(_dims.width/item.tabs.length);

		$('#'+_id+' li').width(_width);
		$('#'+_id+' label').css('line-height', _height + 'px');
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
					prx.commonproperties.backgroundColor
					,{
						caption: 'Separator'
						,name: 'separatorColor'
						,proptype: 'divider-color'
						,type: 'colorpicker'
						,value: function(item,name) {
						  return item.separatorColor;
						}
						,changeProperty: {
	                		caption: 'Separator color',
	                		rerender: true
	                	}
					}
				],
				[
					{
						caption: 'Active Tab Border',
						name: 'activeBorderWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) { return item.activeBorderWidth; },
						values: { min: 1, max: 15, step: 1 }
						,changeProperty: {
	                		caption: 'Active tab border width',
	                		selector: 'input:checked + label',
	                		property: 'border-width',
	                		transitionable: true
	                	}
					},{
						caption: false
						,name: 'activeTabColor'
						,proptype: 'border-color'
						,type: 'colorpicker'
						,value: function(item,name) {
						  return item.activeTabColor;
						}
						,liveUpdate: 'border-color'
						,changeProperty: {
	                		caption: 'Active tab border color',
	                		selector: 'input:checked + label',
	                		property: 'border-color',
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
				],
				[
					prx.commonproperties.textProperties
					,prx.commonproperties.textColor
				]
			]
		}
		,{
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
			    ]
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
				,[
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
		      	}]
	}
};

//TYPE: SCROLLABLE TABBAR
prx.types.android_scrollabletabbar = {
	name: "android_scrollabletabbar"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		var _dims = prx.componentsHelper.getRealDims(item,symbol);
		var _tabs = item.tabs.split("<br />");

		var cR = '<div id="'+_id+'" class="box pos type-android-scrollable-tabbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';

		cR += '<style>'
		cR += '#'+_id+' .scrollable-tabbar-inner { background-color: '+prx.utils.getColor(item.backgroundColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; '+_props+' }'
		//cR += '#'+_id+' .scrollable-tabbar-inner:before { '+prx.css.gradient([{ c: prx.utils.getColor(item.backgroundColor), p: 0}, { c: 'rgba(0,0,0,0)', p:100 }], 'to right center')+';}'
		//cR += '#'+_id+' .scrollable-tabbar-inner:after { '+prx.css.gradient([{ c: 'rgba(0,0,0,0)', p:0 }, { c: + prx.utils.getColor(item.backgroundColor), p: 100}], 'to right center')+';}'
		cR += '#'+_id+' .scrollable-tabbar-container { width: '+parseInt(_dims.width*(_tabs.length)/2)+'px; padding-left: '+parseInt(_dims.width/2)+'px;}'
		cR += '#'+_id+' li { width: '+_dims.width+'px; margin-left: -'+parseInt(_dims.width/2)+'px; line-height: '+_dims.height+'px; }'
		cR += '</style>'

		cR += '<div class="scrollable-tabbar-inner liveUpdate-backgroundColor liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-backgroundColor" id="' + _id + '-inner"><ul class="scrollable-tabbar-container">'
		for(var i = 0; i < _tabs.length; i++) {
			cR += '<li>'+_tabs[i]+'</li>'
		}
		cR += '</ul></div>'
		cR += '</div>'
		return cR;
	}
	,onResize:  function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item);
		var _tabs = item.tabs.split("<br />");

		$('#'+_id+' .scrollable-tabbar-container').css({
			width: parseInt(_dims.width*(_tabs.length)/2) + 'px',
			'padding-left': parseInt(_dims.width/2)+'px'
		})
		$('#'+_id+' li').css({
			width: _dims.width + 'px',
			'margin-left': '-'+parseInt(_dims.width/2)+'px',
			'line-height': _dims.height+'px'
		})
	}
	,afterDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item);
		var _origin = '-' + (_dims.width/2 * item.selected) + 'px';

		if(!prx.editor) {

			var index;

			// loop to check whether already there
			for(var j=0; j<prx.scrollable._scrollableTabbars.length; j++) {
				if(prx.scrollable._scrollableTabbars[j].id == item.id) {
					index = j;
				}
			}

			// i dont think it ever comes here to be honest.
			if(typeof(index) == "undefined") {
				prx.scrollable._scrollableTabbars.push({
					id: item.id,
					container: containerid,
					linked: item.linkedContainer,
					start: item.selected
				})
				index = prx.scrollable._scrollableTabbars.length -1;
			}

			// will probably initialize twice most of the times, but this is needed for scrollable tabbars in states other than default.
			// maybe i can remove it from the player and leave it only here?
			prx.scrollable.iniTabbar(index);



			// container is already initialized
			// need to reinitialize

			var _linked = containerid+ '-' + item.linkedContainer + '-inner';
			if(typeof(prx.scrollable._scrollables[_linked]) != "undefined") {

				var i = index//prx.scrollable._scrollableTabbars.length - 1;

				// code copied from player2.js iniScrollableContainer
				var _tabbar = prx.scrollable._scrollableTabbars[i].container+ '-' + prx.scrollable._scrollableTabbars[i].id + '-inner';
				prx.scrollable._scrollables[_linked].options.linkedTabbar = _tabbar;
				prx.scrollable._scrollables[_linked].goToPage(Number(prx.scrollable._scrollableTabbars[i].start), 0, 0);
				if(typeof(prx.scrollable._scrollables[_tabbar]) != "undefined") {
					// for some reason this needs to be here when the tabbar is not in the startscreen. XL :o
					prx.scrollable._scrollables[_tabbar].goToPage(Number(prx.scrollable._scrollableTabbars[i].start), 0, 0);
				}
				prx.scrollable._scrollables[_linked].on('scroll', function() {
				//prx.scrollable._scrollables[_linked].options.onScrollMove = function() {
					prx.scrollable._scrollables[this.options.linkedTabbar].scrollTo(this.x/2, 0, 0, false);
				});
				//prx.scrollable._scrollables[_linked].on('scrollEnd', function() {
				$(prx.scrollable._scrollables[_linked].wrapper).on('mouseup touchend', function() {
				//prx.scrollable._scrollables[_linked].options.onTouchEnd = function() {
					//prx.scrollable._scrollables[this.options.linkedTabbar].goToPage(this.currentPage.pageX, 0, 200);
					prx.scrollable._scrollables[prx.scrollable._scrollables[_linked].options.linkedTabbar].goToPage(prx.scrollable._scrollables[_linked].currentPage.pageX, 0, 200);
				});
			}
		} else {
			$('#'+_id+' .scrollable-tabbar-container').css('margin-left', _origin)
		}
	}
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
				   prx.commonproperties.backgroundColor
				]
			]
		}
		,{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.textColor
				],[
					prx.commonproperties.textProperties
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
		},{
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
		}
	]
}

//TYPE: SPINNER
prx.types.android_spinner = {
	name: "android_spinner"
		,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '<div id="'+_id+'" class="box pos type-android-spinner">';
		cR += '<div class="inner liveUpdate-textColor liveUpdate-togglerColor changeProperty-textSize changeProperty-textColor changeProperty-textFont changeProperty-togglerColor" style="font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' color: '+prx.utils.getColor(item.textColor)+'; '+_props+' '+((item.bottomBorder) ? 'padding: 0 10px; border-bottom: 1px solid ' +prx.utils.getColor(item.togglerColor)+ ';': '')+'">'
		cR += '<span class="changeProperty-text" data-editableproperty="text">'+item.text+'</span>';
		cR += '<div class="toggler liveUpdate-togglerColor changeProperty-togglerColor" style="border-color: '+prx.utils.getColor(item.togglerColor)+';border-width: '+parseInt(item.togglerSize/2)+'px;"></div>'
		cR += '</div></div>';
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
				   {
						caption: 'Toggler',
						name: 'togglerSize',
						proptype: 'toggler-size',
						type: 'combo-select',
						value: function(item,name) {
							return item.togglerSize;
						},
						values: { min: 4, max: 20, step: 2 }
						,changeProperty: {
	                		caption: 'Toggler size',
	                		rerender: true
	                	}
					}
					,{
						caption: false,
						name: 'togglerColor',
						proptype: 'toggler-color',
						type: 'colorpicker',
						value: function(item,name) {
							return item.togglerColor;
						},
						liveUpdate: 'border-color'
						,changeProperty: {
	                		caption: 'Toggler color',
	                		selector: '.changeProperty-togglerColor',
	                		property: 'border-color',
	                		transitionable: true
	                	}
					}
				],
				[
					{
						caption: 'Display bottom border'
						,name: 'bottomBorder'
						,type: 'onoff'
						,value: function(item,name) {
							return item.bottomBorder;
						}
						,changeProperty: {
	                		caption: 'Bottom border',
	                		rerender: true
	                	}
					}
				]
			]
		}
		,{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.textColor
				],[
					prx.commonproperties.textProperties
				]
			]
		}
	]
}


//TYPE: DROPDOWN
prx.types.android_dropdown = {
	name: "android_dropdown"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var _dims = prx.componentsHelper.getRealDims(item,symbol);
		var _height = Math.round((_dims.height) / item.options.length);

		switch(item.iconpos) {
			case 'left':
			case 'right':
				var _iconSize = item.iconSize * 20;
				var _iconWidth = Math.ceil(_height * (_iconSize/100)) + 'px';
				break;
			case 'notext':
				var _iconSize = item.iconSize * 20;
				var _iconWidth = _dims.width - 20 + 'px';
				break;
		}

		var cR = '<div id="'+_id+'" class="box pos type-android-dropdown">';
		cR += '<ul class="liveUpdate-backgroundColor liveUpdate-textColor changeProperty-backgroundColor changeProperty-textColor" style="color: '+prx.utils.getColor(item.textColor)+'; background: '+prx.utils.getColor(item.backgroundColor)+'; '+((item.enableShadow) ? 'box-shadow: 0 '+item.shadowSpread+'px '+item.shadowSpread+'px '+prx.utils.getColor(item.shadowColor)+ ';' : '')+'">'
		$.each(item.options, function(i,elm){
			cR += '<li class="dynamic-property liveUpdate-dividerColor changeProperty-dividerColor" data-dynamic-property-index="'+i+'" id="'+_id+'-options-'+i+'" style="height: '+_height+'px; line-height: '+parseInt(_height - item.dividerThickness)+'px; border-bottom: ' + item.dividerThickness + 'px solid ' +prx.utils.getColor(item.dividerColor)+ '">';
			cR += '<input id="'+_id+'-radio-'+i+'" type="radio" name="'+_id+'-radio" data-role="none">'
			cR += '<label for="'+_id+'-radio-'+i+'">'
			if(item.iconpos != '') {
				cR += '<div class="icon" style="background-image: url('+prx.componentsHelper.getAssetUrl(elm.icon)+'); background-size: auto '+_iconSize+'%; width: '+_iconWidth+'; '+((item.iconpos == 'notext')? '' : 'float: ' + item.iconpos + ';')+'"></div>'
			}
			if(item.iconpos != 'notext') {
				cR += '<div class="caption liveUpdate-activeTextColor changeProperty-textSize changeProperty-textFont" style="font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' '+_props+'"><span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+elm.text+'</span></div>'
			}
			cR += '</label></li>'
		});
		cR += '</ul>'
		cR += '<style>#'+_id+' input:checked + label { background: '+prx.utils.getColor(item.activeBackgroundColor)+'; color: '+prx.utils.getColor(item.activeTextColor)+'; }</style>'
		cR += '</div>'
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item);
		var _height = Math.round((_dims.height-1-item.options.length) / item.options.length);
		$('#'+ _id + ' li')
			.css('line-height', _height + 'px')
			.css('height', _height + 'px')

		switch(item.iconpos) {
			case 'left':
			case 'right':
				var _iconSize = item.iconSize * 20;
				var _iconWidth = Math.ceil(_height * (_iconSize/100));
				$('#'+ _id + ' .icon').width(_iconWidth)
				break;
		}
	}
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.backgroundColor
					,{
						caption: 'Active',
						name: 'activeBackgroundColor',
						proptype: 'background-color',
						type: 'colorpicker',
						value: function(item,name){
							return item.activeBackgroundColor
						}
						,changeProperty: {
	                		caption: 'Active background color',
	                		selector: 'input:checked + label',
	                		property: 'background-color',
	                		transitionable: true
	                	}
					}
				],[
					{
						caption: 'Border',
						name: 'dividerThickness',
						proptype: 'border-color',
						type: 'combo-select',
						value: function(item,name) {
							return item.dividerThickness;
						},
						values: { min: 0, max: 10, step: 1 }
						,changeProperty: {
	                		caption: 'Border thickness',
	                		rerender: true,
	                		changeable: false
	                	}
					},{
						caption: false,
						name: 'dividerColor',
						proptype: 'divider-color',
						type: 'colorpicker',
						value: function(item,name) {
							return item.dividerColor;
						}
						,liveUpdate: 'border-color'
						,changeProperty: {
	                		caption: 'Border color',
	                		selector: '.changeProperty-dividerColor',
	                		property: 'border-color',
	                		transitionable: true
	                	}
					}
				],[
					{
						caption: 'Shadow?',
						name: 'enableShadow',
						type: 'onoff',
						value: function(item,name) {
							return item.enableShadow
						},
						onChange: function(item){
							if(item.enableShadow) {
								$('#property-shadowColor, #property-shadowSpread').show();
							} else {
								$('#property-shadowColor, #property-shadowSpread').hide();
							}
						}
						,changeProperty: {
	                		caption: 'Shadow',
	                		rerender: true
	                	}
					},
					{
						caption: 'Spread',
						name: 'shadowSpread',
						proptype: 'shadow-spread',
						type: 'combo-select',
						value: function(item,name) {
							return item.shadowSpread;
						},
						values: { min: 1, max: 10, step: 1 }
						,hiddenByDefault: function(item) {
							return (!item.enableShadow);
						}
						,changeProperty: {
	                		caption: 'Shadow spread',
	                		rerender: true
	                	}
					},{
						caption: false,
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
		}
		,{
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
							return (item.iconpos == 'notext')
						}
						,changeProperty: {
	                		caption: 'Text font',
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
							return (item.iconpos == 'notext')
						}
						,changeProperty: {
	                		caption: 'Text Size',
	                		selector: '.changeProperty-textSize',
	                		property: 'font-size',
	                		transitionable: true
	                	}
					}
					,{
						caption: false,
						name: 'textColor',
						proptype: 'font-color',
						type: 'colorpicker',
						value: function(item,name) { return item.textColor; },
						hiddenByDefault: function(item) {
							return (item.iconpos == 'notext')
						},
						liveUpdate: 'color'
						,changeProperty: {
	                		caption: 'Text color',
	                		selector: '.changeProperty-textColor',
	                		property: 'color',
	                		transitionable: true
	                	}
					}
				],[
				   	{
				   		caption: false,
				   		name: 'textProperties',
				   		proptype: 'text-properties',
				   		type: 'checkbox',
				   		value: function(item,name) { if(typeof(item.textProperties) == "undefined") {item.textProperties = [];} return item.textProperties; },
				   		values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}]
				   		,hiddenByDefault: function(item) {
							return (item.iconpos == 'notext')
						}
				   		,changeProperty: {
	                		caption: 'Text properties',
	                		rerender: true
	                	}
				   	}
					,{
						caption: 'Active',
						name: 'activeTextColor',
						proptype: 'font-color-2-active',
						type: 'colorpicker',
						value: function(item,name){
							return item.activeTextColor
						},
						hiddenByDefault: function(item) {
							return (item.iconpos == 'notext')
						}
						,changeProperty: {
	                		caption: 'Active text color',
	                		selector: 'input:checked + label',
	                		property: 'color',
	                		transitionable: true
	                	}
					}
				]
			]
		}
		,{
			caption: 'Icon',
			properties: [
				[
					{
						caption: false
						,name: 'iconpos'
						,type: 'select'
						,value: function(item,name) {
							return item.iconpos;
							}
						,values: [{value: '',displayValue: 'No icon'},{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'},{value: 'notext',displayValue: 'Icon only (no text)'}]
						,onChange: function(item){
							if(item.iconpos == '') {
								$('[id=property-icon], #property-iconSize').hide();
							} else {
								$('[id=property-icon], #property-iconSize').show();
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
	                		rerender: true,
	                		changeable: false
	                	}
					},
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
	                		rerender: true,
	                		changeable: false
	                	}
					}
				]
			]
		}
	]


  	,dynamicProperties: {
		data: 'options'
		,propertyCaption: 'Options'
  		,propertyName: 'Options'
		,addCaption: 'Add option'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Label'
			,icon: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,actions: []
		}
		,captionProperty: 'text'
		,interactions: [
				{
					caption: 'Interactions'
					,name: 'actions'
					,type: 'action'
					,value: function(item,name,index) {
							if (typeof(item.options[index].actions) == "undefined") {
								item.options[index].actions = [];
							}

						return item.options[index].actions.length;
					}
				}
		]
		,editableProperties: [
			{
				caption: 'Label'
				,name: 'text'
				,type: 'input'
				,value: function(item,name,index) {
					return item.options[index].text;
				}
				,changeProperty: {
	        		caption: 'Label',
	        		selector: '.caption',
	        		property: 'text',
	        		transitionable: false
	        	}
			}
		                      ]
		,propertyGroups: [
			{
				caption: 'Icon',
				properties: [
					[
						{
							caption: false
							,name: 'icon'
							,type: 'combo-asset'
							,displayValue: function(item,name,index) {
								if(item.options[index].icon.url == '') {
									return 'No icon selected';
								}
								return item.options[index].icon.name;
							}
							,value: function(item,name,index) {
								return $.toJSON({
									allow: 'image',
									asset: item.options[index].icon
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
					]
				]
			}
		]


	}
}

/***** BUTTON COMPONENTS *****/

// TYPE: BUTTON
prx.types.android_button = {
	name: "android_button"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var _dims = prx.componentsHelper.getRealDims(item, symbol);

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = "";
		cR = cR + '<div id="' + _id + '" class="pos box type-android-button">';
		cR = cR + '<div class="button liveUpdate-backgroundColor liveUpdate-textColor changeProperty-backgroundColor changeProperty-textColor changeProperty-textFont changeProperty-textSize" style="box-shadow: 0 1px 1px '+prx.utils.getColor(item.shadowColor)+'; background: '+prx.utils.getColor(item.backgroundColor)+'; height: 100%; line-height: '+_dims.height+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' '+_props+' color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px;">'

		if(item.buttonicon.url != '') {
			switch(item.iconpos) {
			case 'left':
			case 'right':
				cR = cR + '<img src="'+prx.componentsHelper.getAssetUrl(item.buttonicon)+'" style="float: '+item.iconpos+'; padding-'+item.iconpos+': 7px;height: '+eval(_dims.height*0.2*item.iconSize)+'px; padding-top: '+eval(_dims.height*0.1*(5-item.iconSize))+'px; " />';
				break;
			case 'notext':
				cR = cR + '<img src="'+prx.componentsHelper.getAssetUrl(item.buttonicon)+'" style="height: '+eval(_dims.height*0.2*item.iconSize)+'px; padding-top: '+eval(_dims.height*0.1*(5-item.iconSize))+'px; " />';
				break;
			case '':
			default:
				break
			}

		}

		if(item.iconpos != "notext"){
			cR += '<span data-editableproperty="text" class="changeProperty-text">' + item.text + '</span>';
		}
		cR = cR + '</div>';
		cR = cR + '</div>';
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
					prx.commonproperties.backgroundColor
				,
					{
	      				caption: 'Shadow'
	      				,name: 'shadowColor'
	      				,proptype: 'shadow-color'
	      				,type: 'colorpicker'
	      				,value: function(item,name) {
	      					return item.shadowColor;
	      				}
						,changeProperty: {
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
							return (item.iconpos == 'notext')
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
							return (item.iconpos == 'notext')
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
						type: 'colorpicker',
						value: function(item,name) { return item.textColor; },
						hiddenByDefault: function(item) {
							return (item.iconpos == 'notext')
						},
						liveUpdate: 'color'
						,changeProperty: {
	                		caption: 'Text color',
	                		selector: '.changeProperty-textColor',
	                		property: 'color',
	                		transitionable: true
	                	}
					}
				],[
				   	{
				   		caption: false,
				   		name: 'textProperties',
				   		proptype: 'text-properties',
				   		type: 'checkbox',
				   		value: function(item,name) { if(typeof(item.textProperties) == "undefined") {item.textProperties = [];} return item.textProperties; },
				   		values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}]
				   		,hiddenByDefault: function(item) {
							return (item.iconpos == 'notext')
						}
				   		,changeProperty: {
	                		caption: 'Text properties',
	                		rerender: true
	                	}
				   	}
				]
			]
		},{
			caption: 'Icon',
			properties: [
				[
					{
		      			caption: false
		      			,name: 'iconpos'
		      			,type: 'select'
		      			,value: function(item,name) {
	      					return item.iconpos;
	              		}
	      				,values: [{value: '',displayValue: 'No icon'},{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'},{value: 'notext',displayValue: 'Icon only (no text)'}]
	      				,onChange: function(item){
	      					if(item.iconpos == '') {
	      						$('#property-buttonicon, #property-iconSize').hide();
	      					} else {
	      						$('#property-buttonicon, #property-iconSize').show();
	      					}

	      					if(item.iconpos == "notext") {
	      						$('#property-textFont, #property-textSize, #property-textColor, #property-textProperties').hide();
	      					} else {
	      						$('#property-textFont, #property-textSize, #property-textColor, #property-textProperties').show();
	      					}
		      				return false;
	      				}
	      				,changeProperty: {
	                		caption: 'Icon position',
	                		rerender: true,
	                		changeable: false
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
	                		rerender: true,
	                		changeable: false
	                	}
	      			}
				],[
	      			{
	      				caption: false
	      				,name: 'buttonicon'
	      				,type: 'combo-asset'
	      				,displayValue: function(item,name) {
	      					if(item.buttonicon.url == '') {
      							return 'No icon selected';
      						}
      						return item.buttonicon.name;
	      				}
	      				,value: function(item,name) {
	      					return $.toJSON({
	      						allow: 'image',
	      						asset: item.buttonicon
	      					});
	      				}
	      				,hiddenByDefault: function(item,name){
	      					return (item.iconpos == '');
	      				}
	      				,changeProperty: {
	                		caption: 'Icon',
	                		rerender: true
	                	}
	      			}
	      		]
			]
		}
	]

};


// TYPE: BORDERLESS BUTTON
prx.types.android_borderlessbutton = prx.componentsHelper.cloneobject(prx.types.android_button);
prx.types.android_borderlessbutton.name = 'android_borderlessbutton';
prx.componentsHelper.removeProperties(prx.types.android_borderlessbutton.propertyGroups, ['backgroundColor', 'shadowColor'])


/***** FORM COMPONENTS *****/

// TYPE: LABEL
prx.types.android_label = {
	name: "android_label"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '<div id="'+_id+'" class="pos box type-android-label">';
		cR += '<div class="inner liveUpdate-textColor liveUpdate-bottomBorderColor changeProperty-text changeProperty-textColor changeProperty-bottomborderColor changeProperty-textSize changeProperty-textFont" style="font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' color: '+prx.utils.getColor(item.textColor)+'; '+_props+' '+((item.bottomBorder) ? 'padding: 0 10px; border-bottom: ' + item.bottomBorderWidth + 'px solid ' +prx.utils.getColor(item.bottomBorderColor)+ ';': '')+'">'
		cR += '<span data-editableproperty="text">'+item.text+'</span>'
		cR += '</div></div>';
		return cR;
	}
	,editableProperties: [
	                      prx.commonproperties.text
	                    ]
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					{
						caption: 'Full line label'
						,name: 'bottomBorder'
						,type: 'onoff'
						,value: function(item,name) {
							return item.bottomBorder;
						}
						,onChange: function(item) {
							if(item.bottomBorder) {
								$('#property-bottomBorderWidth, #property-bottomBorderColor').show();
							} else {
								$('#property-bottomBorderWidth, #property-bottomBorderColor').hide();
							}
						}
						,changeProperty: {
	                		caption: 'Full line label',
	                		rerender: true,
	                		changeable: false
	                	}
					}
				],[
					{
						caption: 'Bottom border',
						name: 'bottomBorderWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) {
							return item.bottomBorderWidth;
						},
						values: { min: 1, max: 10, step: 1 }
						,hiddenByDefault: function(item) {
							return !item.bottomBorder;
						}
						,changeProperty: {
	                		caption: 'Bottom border width',
	                		selector: '.changeProperty-bottomBorderColor',
	                		property: 'border-bottom-width',
	                		transitionable: true
	                	}
					}
					,{
						caption: false,
						name: 'bottomBorderColor',
						proptype: 'border-color',
						type: 'colorpicker',
						value: function(item,name) {
							return item.bottomBorderColor;
						}
						,hiddenByDefault: function(item) {
							return !item.bottomBorder;
						}
						,liveUpdate: 'border-color'
						,changeProperty: {
	                		caption: 'Bottom border color',
	                		selector: '.changeProperty-bottomBorderColor',
	                		property: 'border-color',
	                		transitionable: true
	                	}
					}
				]
			]
		}
		,{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.textColor
				],[
					prx.commonproperties.textProperties
				]
			]
		}
	]

}

//TYPE: ACTION OVERFLOW
prx.types.android_actionoverflow = {
	name: "android_actionoverflow"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var cR = '<div id="' + _id + '" class="pos box type-android-actionoverflow">'

		var _rectH = Math.floor(dims.height * 0.15);
		cR += '<div class="actionOverflow">'
		cR += '<div class="AO AO1 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: '+_rectH+'px; height: '+_rectH+'px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+'; border-radius: '+item.borderRadius+'px;"></div>'
		cR += '<div class="AO AO2 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: '+_rectH+'px; height: '+_rectH+'px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+'; border-radius: '+item.borderRadius+'px;"></div>'
		cR += '<div class="AO AO3 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: '+_rectH+'px; height: '+_rectH+'px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+'; border-radius: '+item.borderRadius+'px;"></div>'
		cR += '</div>'

		cR += '</div>'
		return cR;
	}
	,onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _rectH = Math.floor(dims.height * 0.15);
		$('#'+_id).find('.AO').width(_rectH).height(_rectH);
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
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.actionOverflowColor;
						}
						,liveUpdate: 'background-color'
						,changeProperty: {
							caption: 'Action Overflow color',
							property: 'background-color',
							selector: '.changeProperty-actionOverflowColor',
							transitionable: true
						}
					},
					prx.commonproperties.borderRadius
				]
			]
		}
	]
}


//TYPE: TEXTFIELD
prx.types.android_textfield = {
	name: 'android_textfield'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		if(typeof(item.backgroundColor)=="undefined") { item.backgroundColor = 'none' }
		if(typeof(item.textAlign) == "undefined") { item.textAlign = 'left'; }
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		var cR = '';
		var _dims = prx.componentsHelper.getRealDims(item,symbol);

		cR += '<div id="' + _id + '" class="box pos type-android-textfield type-android-textfield-'+item.inputtype+'">';
		cR += '<style>';
		cR += '#'+_id+' input:-moz-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		cR += '#'+_id+' input::-moz-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		cR += '#'+_id+' input::-webkit-input-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		cR += '#'+_id+' input:focus { border-bottom-color: '+prx.utils.getColor(item.focusedBorderColor)+'!important; }'
		cR += '#'+_id+' input:focus ~ .left-edge, #'+_id+' input:focus ~ .right-edge { background: '+prx.utils.getColor(item.focusedBorderColor)+'!important; }'
		cR += '#'+_id+' .faux-input { line-height: ' +(_dims.height - parseInt(item.borderWidth))+ 'px; }';
		cR += '</style>'


		if(prx.editor) {
			cR += '<div class="faux-input liveUpdate-textColor liveUpdate-backgroundColor liveUpdate-borderColor-border-color" data-editableproperty="value" style="color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; '+ _props + '; background-color: '+prx.utils.getColor(item.backgroundColor)+'; text-align: '+item.textAlign+';">'+item.value+'</div>';
			cR += '<div class="faux-input placeholder-input liveUpdate-placeholderColor liveUpdate-borderColor-border-color liveUpdate-backgroundColor" style="color: '+prx.utils.getColor(item.placeholderColor)+'; font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; '+ _props + '; background-color: '+prx.utils.getColor(item.backgroundColor)+'; text-align: '+item.textAlign+';">'+item.placeholder+'</div>'
		} else {
			cR += '<input type="'+item.inputtype+'" value="'+item.value+'" placeholder="'+item.placeholder+'" class="real-input changeProperty-backgroundColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-textAlign" style="color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; '+ _props + '; background-color: '+prx.utils.getColor(item.backgroundColor)+'; text-align: '+item.textAlign+';" data-role="none" />';
		}
		cR += '<span class="left-edge liveUpdate-borderColor-background-color" style="width: '+item.borderWidth+'px; background-color: ' + prx.utils.getColor(item.borderColor) + '"></span><span class="right-edge liveUpdate-borderColor-background-color" style="width: '+item.borderWidth+'px; background-color: ' +prx.utils.getColor(item.borderColor)+ '"></span>'
		cR += '</div>';
		return cR;
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

			$('#'+_id+' .real-input').keyup(function(e){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
		        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
				var event = jQuery.Event("inputkeyup");
				event.which = e.which;
				$('#'+_id).trigger(event);
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
					prx.commonproperties.backgroundColor
				],
				[
					{
						caption: 'Border',
						name: 'borderWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) {
							return item.borderWidth;
						},
						values: { min: 1, max: 5, step: 1 }
						,changeProperty: {
							caption: 'Border width',
							rerender: true
						}
					}
					,{
						caption: false,
						name: 'borderColor',
						proptype: 'border-color',
						type: 'colorpicker',
						value: function(item,name) { return item.borderColor; },
						liveUpdate: 'border-color,background-color'
						,changeProperty: {
							caption: 'Border color',
							rerender: true
						}
					}
					,{
			      		caption: 'Focused',
			      		name: 'focusedBorderColor',
			      		proptype: 'border-color-2-active',
			      		type: 'colorpicker',
			      		value: function(item,name) {
			      			return item.focusedBorderColor;
			      		}
						,changeProperty: {
							caption: 'Focused border color',
							rerender: true
						}
			      	}
				]
			]
		},{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.textColor
				],
				[
					prx.commonproperties.textProperties
					,prx.commonproperties.textAlign
				]
			]
		},{
			caption: 'Placeholder (If field is empty)',
	    	properties: [
				[
					{
						caption: false,
						name: 'placeholder',
						type: 'input',
						value: function(item,name) {
							return item.placeholder;
						}

						,changeProperty: {
							caption: 'Placeholder text',
							rerender: true
						}
					}
				],
				[
					{
					   caption: 'Placeholder Color',
					   name: 'placeholderColor',
					   proptype: 'placeholder-color',
					   type: 'colorpicker',
					   value: function(item,name) { if(typeof(item.placeholderColor)=='undefined') { return '999999'; } return item.placeholderColor; }
					   ,liveUpdate:'color'
					   ,changeProperty: {
							caption: 'Placeholder color',
							rerender: true
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
							return (item.name=="android_passwordfield")
						}
					}
				]
			]
		}
	]

};

//TYPE: TEXTAREA
prx.types.android_textarea = {
	name: 'android_textarea'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(typeof(item.backgroundColor)=="undefined") { item.backgroundColor = 'none' }
		if(typeof(item.textAlign) == "undefined") { item.textAlign = 'left'; }

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		var _dims = prx.componentsHelper.getRealDims(item,symbol);

		cR += '<div id="' + _id + '" class="box pos type-android-textarea">';

		cR += '<style>';
		cR += '#'+_id+' textarea:-moz-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		cR += '#'+_id+' textarea::-moz-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		cR += '#'+_id+' textarea::-webkit-input-placeholder { color: '+prx.utils.getColor(item.placeholderColor)+'!important; }';
		cR += '#'+_id+' textarea:focus { border-bottom-color: '+prx.utils.getColor(item.focusedBorderColor)+'!important; }'
		cR += '#'+_id+' textarea:focus ~ .left-edge, #'+_id+' textarea:focus ~ .right-edge { background: '+prx.utils.getColor(item.focusedBorderColor)+'!important; }'
		cR += '</style>'

		if(prx.editor) {
			cR += '<div class="faux-input liveUpdate-textColor liveUpdate-backgroundColor liveUpdate-borderColor-border-color" data-editableproperty="value" style="color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; '+ _props + '; background-color: '+prx.utils.getColor(item.backgroundColor)+'; text-align: '+item.textAlign+';">'+item.value+'</div>';
			cR += '<div class="faux-input placeholder-input liveUpdate-placeholderColor liveUpdate-borderColor-border-color liveUpdate-backgroundColor" style="color: '+prx.utils.getColor(item.placeholderColor)+'; font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; '+ _props + '; background-color: '+prx.utils.getColor(item.backgroundColor)+'; text-align: '+item.textAlign+';">'+item.placeholder+'</div>'
		} else {
			cR += '<textarea placeholder="'+item.placeholder+'" class="real-input changeProperty-backgroundColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-textAlign" style="color: '+prx.utils.getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' border-bottom: '+item.borderWidth+'px solid '+prx.utils.getColor(item.borderColor)+'; '+ _props + '; background-color: '+prx.utils.getColor(item.backgroundColor)+'; text-align: '+item.textAlign+';" data-role="none"></textarea>';
		}
		cR += '<span class="left-edge liveUpdate-borderColor-background-color" style="width: '+item.borderWidth+'px; background-color: ' + prx.utils.getColor(item.borderColor) + '"></span><span class="right-edge liveUpdate-borderColor-background-color" style="width: '+item.borderWidth+'px; background-color: ' +prx.utils.getColor(item.borderColor)+ '"></span>'
		cR += '</div>';
		return cR;
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

			$('#'+_id+' .real-input').keyup(function(e){
				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
		        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
				var event = jQuery.Event("inputkeyup");
				event.which = e.which;
				$('#'+_id).trigger(event);
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
		}
	                      ]
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.backgroundColor
				],
				[
					{
						caption: 'Border',
						name: 'borderWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) {
							return item.borderWidth;
						},
						values: { min: 1, max: 5, step: 1 }
						,changeProperty: {
							caption: 'Border width',
							rerender: true
						}
					}
					,{
						caption: false,
						name: 'borderColor',
						proptype: 'border-color',
						type: 'colorpicker',
						value: function(item,name) { return item.borderColor; },
						liveUpdate: 'border-color,background-color'
						,changeProperty: {
							caption: 'Border color',
							rerender: true
						}
					}
					,{
			      		caption: 'Focused',
			      		name: 'focusedBorderColor',
			      		proptype: 'border-color-2-active',
			      		type: 'colorpicker',
			      		value: function(item,name) {
			      			return item.focusedBorderColor;
			      		}
						,changeProperty: {
							caption: 'Focused border color',
							rerender: true
						}
			      	}
				]
			]
		},{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.textColor
				],
				[
					prx.commonproperties.textProperties
					,prx.commonproperties.textAlign
				]
			]
		},{
			caption: 'Placeholder (If field is empty)',
	    	properties: [
				[
					{
						caption: false,
						name: 'placeholder',
						type: 'input',
						value: function(item,name) {
							return item.placeholder;
						}

						,changeProperty: {
							caption: 'Placeholder text',
							rerender: true
						}
					}
				],
				[
					{
					   caption: 'Placeholder Color',
					   name: 'placeholderColor',
					   proptype: 'placeholder-color',
					   type: 'colorpicker',
					   value: function(item,name) { if(typeof(item.placeholderColor)=='undefined') { return '999999'; } return item.placeholderColor; }
					   ,liveUpdate:'color'
					   ,changeProperty: {
							caption: 'Placeholder color',
							rerender: true
						}
				   }
				]
			]
		}
	]

};


//TYPE: CHECKBOX
prx.types.android_checkbox = {
	name: "android_checkbox"
		,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var cR = '';

		cR += '<style>'
		cR += '#'+_id+' label { background-color: '+prx.utils.getColor(item.backgroundColor)+'; border-color: '+prx.utils.getColor(item.borderColor)+'; }'
		cR += '#'+_id+' label span { font-size: '+(item.height*1.5)+'px; color: '+prx.utils.getColor(item.activeColor)+'; line-height: '+item.height+'px; }'
		cR += '</style>'

		var _check = '';
		var _active = "";

		if(item.active) {
			_active = 'checked="checked"';
		}
		cR += '<div id="' + _id + '" class="box pos type-android-checkbox">';
		cR += '<input type="checkbox" id="'+_id+'-checkbox" '+_active+' style="display: none;" data-role="none" />';
		cR += '<label for="'+_id+'-checkbox" class="liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor"><span class="liveUpdate-activeColor changeProperty-activeColor" data-clickable="true">&#10004;</span></label>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		$('#'+_id+' label span').css({
			'font-size': (item.height*1.5) + 'px',
			'line-height': item.height + 'px'
		})
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
	, interactions: [
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
			value: function (item, name) {
				if (typeof(item.checkboxActionsOnActive) == "undefined") {
					item.checkboxActionsOnActive = [];
				}
				return item.checkboxActionsOnActive.length;
			},
			changeProperty: {
				caption: 'Interactions on activation',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{
			caption: 'Interactions on deactivation',
			name: 'checkboxActionsOnDeactive',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.checkboxActionsOnDeactive) == "undefined") {
					item.checkboxActionsOnDeactive = [];
				}
				return item.checkboxActionsOnDeactive.length;
			},
			changeProperty: {
				caption: 'Interactions on deactivation',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
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
					prx.commonproperties.backgroundColor
					,{
						caption: 'Border',
						name: 'borderColor',
						proptype: 'border-color',
						type: 'colorpicker',
						value: function(item,name) { return item.borderColor; },
						liveUpdate: 'border-color'
						,changeProperty: {
							caption: 'Border color',
							property: 'border-color',
							selector: '.changeProperty-borderColor',
							transitionable: true
						}
					}
				],
				[
					{
						caption: 'Checkmark'
						,name: 'activeColor'
						,proptype: 'active-color'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.activeColor;
						}
						,liveUpdate: 'color'
						,changeProperty: {
							caption: 'Checkmark color',
							property: '-color',
							selector: '.changeProperty-activeColor',
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
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active',
							rerender: true
						}
					}
				]
			]
		}
	]

}

//TYPE: RADIOBUTTON
prx.types.android_radiobutton = {
	name: "android_radiobutton"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var cR = '';

		if(typeof(item.actAsCheckbox) == "undefined") { item.actAsCheckbox = false; }
		var _type = (item.actAsCheckbox) ? 'checkbox' : 'radio';

		cR += '<style>'
		cR += '#'+_id+' label { background-color: '+prx.utils.getColor(item.backgroundColor)+'; border-color: '+prx.utils.getColor(item.borderColor)+'; }'
		cR += '#'+_id+' label span { background-color: '+prx.utils.getColor(item.activeColor)+'; margin: '+Math.round(item.height*0.1)+'px 0 0 '+Math.round(item.height*0.1)+'px;}'
		cR += '</style>'

		var _check = '';
		var _active = "";

		if(item.active) {
			_active = 'checked="checked"';
		}
		cR += '<div id="' + _id + '" class="box pos type-android-radiobutton">';
		cR += '<input type="'+_type+'" id="'+_id+'-checkbox" '+_active+' style="display: none;" data-role="none" />';
		cR += '<label class="liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor" for="'+_id+'-checkbox"><span class="liveUpdate-activeColor changeProperty-activeColor"></span></label>';
		cR += '</div>';
		return cR;
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
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		$('#'+_id+' label span').css('margin', Math.round(item.height*0.1)+'px 0 0 '+Math.round(item.height*0.1)+'px')
	}

	, interactions: [
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
			value: function (item, name) {
				if (typeof(item.checkboxActionsOnActive) == "undefined") {
					item.checkboxActionsOnActive = [];
				}
				return item.checkboxActionsOnActive.length;
			},
			changeProperty: {
				caption: 'Interactions on actication',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{
			caption: 'Interactions on deactivation',
			name: 'checkboxActionsOnDeactive',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.checkboxActionsOnDeactive) == "undefined") {
					item.checkboxActionsOnDeactive = [];
				}
				return item.checkboxActionsOnDeactive.length;
			},
			changeProperty: {
				caption: 'Interactions on deactivation',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
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
					prx.commonproperties.backgroundColor
					,{
						caption: 'Border',
						name: 'borderColor',
						proptype: 'border-color',
						type: 'colorpicker',
						value: function(item,name) { return item.borderColor; },
						liveUpdate: 'border-color'
						,changeProperty: {
							caption: 'Border color',
							property: 'border-color',
							selector: '.changeProperty-borderColor',
							transitionable: true
						}
					}
				],
				[
					{
						caption: 'Active'
						,name: 'activeColor'
						,proptype: 'active-color'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.activeColor;
						}
						,liveUpdate: 'background-color'
						,changeProperty: {
							caption: 'Active color',
							property: 'background-color',
							selector: '.changeProperty-activeColor',
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
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active',
							rerender: true
						}
					}
				],[
					{
						caption: 'Act as checkbox'
						,name: 'actAsCheckbox'
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
prx.types.android_onoffswitch = {
	name: "android_onoffswitch"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var cR = '';
		var _active = '';

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		if(typeof(item.kitkat) == "undefined") {
			item.kitkat = false;
		}

		if(item.active) {
			_active = 'checked="checked"';
		}

		var percent = item.height/44;

		cR += '<div id="' + _id + '" class="box pos type-android-onoffswitch '+((item.kitkat) ? 'flipswitch-kitkat' : '') +'">';

		cR += '<style>'
		cR += '#'+_id+' label .onoffswitch-inner { background-color: '+prx.utils.getColor(item.backgroundColor)+'; height: '+(item.height-4)+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+Math.floor(item.textSize*percent)+'px; '+_props+'}'
		cR += '#'+_id+' .activelabel { width: '+Math.ceil(item.width*0.4)+'px; line-height: '+(item.height-4)+'px; background-color: '+prx.utils.getColor(item.activeLabelColor)+'; color: '+prx.utils.getColor(item.activeLabelTextColor)+';}'
		cR += '#'+_id+' .inactivelabel { width: '+Math.ceil(item.width*0.4)+'px; line-height: '+(item.height-4)+'px; background-color: '+prx.utils.getColor(item.inactiveLabelColor)+'; color: '+prx.utils.getColor(item.inactiveLabelTextColor)+'; }'
		cR += '#'+_id+' .inactivelabel .label-edge { border-color: '+prx.utils.getColor(item.inactiveLabelColor)+'; border-width: '+Math.ceil(item.height/2)+'px '+Math.ceil(item.width*0.1)+'px; right: -'+Math.floor(item.width*0.2)+'px; }';
		cR += '#'+_id+' .activelabel .label-edge { border-color: '+prx.utils.getColor(item.activeLabelColor)+'; border-width: '+Math.ceil(item.height/2)+'px '+Math.ceil(item.width*0.1)+'px; left: -'+Math.ceil(item.width*0.2)+'px; }';
		cR += '#'+_id+' .activelabel:before, #'+_id+' .inactivelabel:before { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }'
		if(item.kitkat) {
			cR += '#'+_id+' label .onoffswitch-inner { height: '+(item.height)+'px; }'
			cR += '#'+_id+' .activelabel { width: '+(Math.ceil(item.width*0.5)-2)+'px; height: '+(item.height-4)+'px; line-height: '+(item.height-4)+'px; }'
			cR += '#'+_id+' .inactivelabel { width: '+(Math.ceil(item.width*0.5)-2)+'px; height: '+(item.height-4)+'px; line-height: '+(item.height-4)+'px; }'
		}
		cR += '</style>'

		// checkbox needs to stay "id-flipswitch" for player compatibility!
		cR += '<input type="checkbox" '+_active+ ' id="'+_id+'-flipswitch" data-role="none" />';
		cR += '<label for="'+_id+'-flipswitch" data-clickable="true">';
		cR += '<div class="onoffswitch-inner liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-textSize changeProperty-textFont">'
		cR += '<span class="inactivelabel liveUpdate-inactiveLabelColor-background-color liveUpdate-inactiveLabelTextColor changeProperty-inactiveLabelTextColor"><span data-editableproperty="inactiveLabelText">'+item.inactiveLabelText+'</span><span class="label-edge liveUpdate-inactiveLabelColor-border-color"></span></span>';
		cR += '<span class="activelabel liveUpdate-activeLabelColor-background-color liveUpdate-activeLabelTextColor changeProperty-activeLabelTextColor"><span data-editableproperty="activeLabelText">'+item.activeLabelText+'</span><span class="label-edge liveUpdate-activeLabelColor-border-color"></span></span>';
		cR += '</div>';
		cR += '</label>';
		cR += '</div>';

		return cR;
	}

	,afterDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(!prx.editor) {
			$('#'+_id+'-flipswitch').change(function(){
				if(typeof(prx.variables._triggerData['input:checked[id='+_id+'-flipswitch]']) == "undefined") { prx.variables._triggerData['input:checked[id='+_id+'-flipswitch]'] = {}; }
		        prx.variables._triggerData['input:checked[id='+_id+'-flipswitch]']['checkboxchange'] = { state: $(this).is(':checked') };
		        if(typeof(prx.variables._triggerData['input[id='+_id+'-flipswitch]:not(:checked)']) == "undefined") { prx.variables._triggerData['input[id='+_id+'-flipswitch]:not(:checked)'] = {}; }
		        prx.variables._triggerData['input[id='+_id+'-flipswitch]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})
		}
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var percent = item.height/44;

		$('#'+_id+' label .onoffswitch-inner').css('font-size', Math.floor(item.textSize*percent));

		if(item.kitkat == false) {
			var _h = item.height-4;
			$('#'+_id+' label .onoffswitch-inner').height(_h);
			$('#'+_id+' label .activelabel, #'+_id+' label .inactivelabel').css({
				'width': Math.ceil(item.width*0.4) + 'px',
				'line-height': _h + 'px'
			});
			$('#'+_id+' label .activelabel span').css({
				'border-width':  Math.ceil(item.height/2)+'px '+Math.ceil(item.width*0.1)+'px',
				'left': '-'+Math.ceil(item.width*0.2)+'px'
			});
			$('#'+_id+' label .inactivelabel span').css({
				'border-width':  Math.ceil(item.height/2)+'px '+Math.ceil(item.width*0.1)+'px',
				'right': '-'+Math.ceil(item.width*0.2)+'px'
			});
		}
		else {
			$('#'+_id+' label .onoffswitch-inner').height(item.height);
			$('#'+_id+' label .activelabel, #'+_id+' label .inactivelabel').css({
				'width': (Math.ceil(item.width*0.5)-2) + 'px',
				'height': (item.height-4) + 'px',
				'line-height': (item.height-4) + 'px'
			});
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
			name: 'flipswitchActionsOnActive',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.flipswitchActionsOnActive) == "undefined") {
					if (typeof(item.actionsOnActive) == "undefined") {
						item.flipswitchActionsOnActive = [];
					} else {
						item.flipswitchActionsOnActive = item.actionsOnActive;
					}
				}
				return item.flipswitchActionsOnActive.length;
			},
			changeProperty: {
				caption: 'Interactions on activation',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{
			caption: 'Interactions on deactivation',
			name: 'flipswitchActionsOnDeactive',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.flipswitchActionsOnDeactive) == "undefined") {
					if (typeof(item.actionsOnDeactive) == "undefined") {
						item.flipswitchActionsOnDeactive = [];
					} else {
						item.flipswitchActionsOnDeactive = item.actionsOnDeactive;
					}
				}
				return item.flipswitchActionsOnDeactive.length;
			},
			changeProperty: {
				caption: 'Interactions on deactivation',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		}
	]
		,mpactions: {
			specialEvents: ['checkboxchange'],
		}
	,editableProperties: [
		{
			caption: 'Active Label'
			,name: 'activeLabelText'
			,type: 'input'
			,value: function(item,name) {
				return item.activeLabelText;
			}
			,changeProperty: {
				caption: 'Active label',
				property: 'text',
				selector: '.activelabel',
				transitionable: false
			}
		}
		,{
			caption: 'Inactive Label'
			,name: 'inactiveLabelText'
			,type: 'input'
			,value: function(item,name) {
				return item.inactiveLabelText;
			}
			,changeProperty: {
				caption: 'Inactive label',
				property: 'text',
				selector: '.inactivelabel',
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
				]
				,[
					{
						caption: 'Active'
						,name: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active',
							rerender: true
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
					prx.commonproperties.textSize
					,prx.commonproperties.textProperties
				]
			]
		},{
			caption: 'Active State',
			properties: [
				[
					{
						caption: 'Background'
						,name: 'activeLabelColor'
						,proptype: 'background-color-2-active'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.activeLabelColor;
						}
						,liveUpdate: 'background-color,border-color'
						,changeProperty: {
							caption: 'Active state background',
							rerender:true
						}
					}
					,
					{
						caption: 'Text'
						,name: 'activeLabelTextColor'
						,proptype: 'font-color-2-active'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.activeLabelTextColor;
						}
						,liveUpdate: 'color'
						,changeProperty: {
							caption: 'Active state text color',
							property: 'color',
							selector: '.changeProperty-activeLabelTextColor',
							transitionable: true
						}
					}
				]
			]
		},{
			caption: 'Inactive State',
			properties: [
				[
					{
						caption: 'Background'
						,name: 'inactiveLabelColor'
						,proptype: 'background-color-3-inactive'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.inactiveLabelColor;
						}
						,liveUpdate: 'background-color,border-color'
						,changeProperty: {
							caption: 'Inactive state background color',
							rerender: true
						}
					}
					,
					{
						caption: 'Text'
						,name: 'inactiveLabelTextColor'
						,proptype: 'font-color-3-inactive'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.inactiveLabelTextColor;
						}
						,liveUpdate: 'color'
						,changeProperty: {
							caption: 'Inactive state text color',
							property: 'color',
							selector: '.changeProperty-inactiveLabelTextColor',
							transitionable: true
						}
					}
				]
			]
		}
	]

}

/***** LIST COMPONENTS *****/

// TYPE: LISTDIVIDER
prx.types.android_listdivider = {
	name: "android_listdivider"
	,onDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '<div id="'+_id+'" class="box pos type-android-listdivider">';
		cR += '<div class="inner liveUpdate-textColor liveUpdate-dividerColor" style="font-size: '+item.textSize+'px; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' color: '+prx.utils.getColor(item.textColor)+'; '+_props+' border-bottom: ' + item.dividerThickness + 'px solid '+prx.utils.getColor(item.dividerColor)+ '">'
		cR += '<span data-editableproperty="text">'+item.text+'</span>'
		cR += '</div></div>';
		return cR;
	}
	,editableProperties: [
	                    prx.commonproperties.text
	                    ]
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					{
						caption: 'Bottom border',
						name: 'dividerThickness',
						proptype: 'divider-thickness',
						type: 'combo-select',
						value: function(item,name) {
							return item.dividerThickness;
						},
						values: { min: 1, max: 10, step: 1 }
					}
					,{
						caption: false,
						name: 'dividerColor',
						proptype: 'divider-color',
						type: 'colorpicker',
						value: function(item,name) {
							return item.dividerColor;
						}
						,liveUpdate: 'border-color'
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
					,prx.commonproperties.textColor
				],[
					prx.commonproperties.textProperties
				]
			]
		}
	]
}

//TYPE: LISTCOMPLEX
prx.types.android_listcomplex = {
	name: "android_listcomplex"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item, symbol);
		var _height = Math.round((_dims.height-1-item.listitems.length) / item.listitems.length);

		if(typeof(item.imgSrc) == "undefined") { item.imgSrc = {"fileId":"","name":"","assetType":"","bucketsource":"","url":"","folderId":"","targetSrc":"","color":""} };

		if(typeof(item.textProperties) == "undefined") { item.textProperties = []; }
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		if(typeof(item.subProperties) != "undefined") {
			var _subprops = (jQuery.inArray("bold",item.subProperties)>-1) ? " font-weight: bold;" : "";
			_subprops += (jQuery.inArray("italic",item.subProperties)>-1) ? " font-style: italic;" : "";
			_subprops += (jQuery.inArray("underline",item.subProperties)>-1) ? " text-decoration: underline;" : "";
		}

		var _listitemH = (_dims.height - item.dividerThickness*(item.listitems.length+1))/item.listitems.length;

		var hasThumbs = false;
		for(var i=0;i<item.listitems.length;i++) {
			if(typeof(item.listitems[i].thumbnail) != "undefined" && item.listitems[i].thumbnail.url != '') {
				hasThumbs = true;
				break;
			}
		}

		var cR = '<div id="'+_id+'" class="pos box type-android-list">';

		cR += '<style>';
		cR += '#' + _id + ' .android-list-thumb { width: '+parseInt(_listitemH)+'px }';
		if(typeof(item.iconSize) != "undefined") {
			cR += '#' + _id + ' .android-list-icon { width: '+parseInt(_listitemH*(item.iconSize/5))+'px; height: '+parseInt(_listitemH*(item.iconSize/5))+'px; }';
		}
		cR += '#' + _id + ' .android-list-inner { text-align: '+item.textAlign+'; '+prx.css.flexJustifyContent(item.textAlign)+' background-color: '+prx.utils.getColor(item.backgroundColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; }';
		cR += '#' + _id + ' .bordered-container { border-top: '+item.dividerThickness+'px solid '+prx.utils.getColor(item.dividerColor)+'; }'
		cR += '#' + _id + ' .android-list-text { '+_props+' }';
		cR += '#' + _id + ' .android-list-subtitle { '+prx.componentsHelper.getFontCssFromFontFamily(item.subFont)+_subprops+' font-size: '+item.subSize+'px; color: '+prx.utils.getColor(item.subColor)+'; }'
		cR += '#' + _id + ' input:checked + label { background: '+prx.utils.getColor(item.activeBackgroundColor)+'; color: '+prx.utils.getColor(item.activeTextColor)+'; }'
		cR += '#' + _id + ' input:checked + label .android-list-subtitle { color: '+prx.utils.getColor(item.activeSubColor)+'; }'
		cR += '</style>';

		cR += '<div class="android-list-inner liveUpdate-textColor liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-textColor changeProperty-textAlign changeProperty-textFont changeProperty-textSize">';

		$.each(item.listitems, function(i,elm){

			if(typeof(elm.subtitle) == "undefined") { elm.subtitle = ""; }

			var icon = '';
			if(elm.itemtype == 'withCheckbox' || elm.itemtype == 'withRadio' || elm.itemtype == 'withIcon') {
				icon = '<div class="android-list-icon android-list-icon-'+item.iconpos+'" '+((typeof (elm.buttonicon) != "undefined" && elm.buttonicon.url != '') ? 'style="background-image: url('+ prx.componentsHelper.getAssetUrl(elm.buttonicon)+');"' : '' ) + '></div>';
			}

			cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property android-list-listitem android-list-listitem-type-'+elm.itemtype+'" data-dynamic-property-index="'+i+'">';

			cR += '<input type="'+((elm.itemtype == 'withCheckbox') ? 'checkbox': 'radio') +'" name="'+_id+'-checkbox" id="'+_id+'-checkbox-'+i+'" data-role="none" '+ ((typeof(elm.checked) != "undefined" && elm.checked) ? 'checked' : '') +' />';

			cR +='<label '+ (((elm.itemtype == 'withCheckbox' || elm.itemtype == 'withRadio') && elm.checked) ? 'class="liveUpdate-activeTextColor liveUpdate-activeBackgroundColor"' : '') +' for="'+_id+'-checkbox-'+i+'">'

			cR += '<div class="bordered-container liveUpdate-dividerColor changeProperty-dividerColor">';

			if(item.iconpos == "left") { cR += icon; }

			if(hasThumbs) {
				cR += '<div class="android-list-thumb" '+((typeof(elm.thumbnail) != "undefined" && elm.thumbnail.url != '') ? 'style="background-image: url('+ prx.componentsHelper.getAssetUrl(elm.thumbnail)+');"' : '') + '></div>';
			}

			cR += '<div class="text-and-subtitle">';
			cR += '<div class="android-list-text">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+elm.text+'</span>';
			cR += '</div>';
			cR += '<div class="android-list-subtitle liveUpdate-subColor changeProperty-subColor changeProperty-subFont changeProperty-subSize">';
			cR += '<span data-editableproperty="subtitle" data-dynamic-property-index="'+i+'">'+elm.subtitle+'</span>';
			cR += '</div>';
			cR += '</div>';

			if(item.iconpos == "right") { cR += icon; }

			cR += '</div>';

			cR += '</label>';
			cR += '</div>';
		});
		cR += '</div></div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item);
		var _listitemH = (_dims.height - item.dividerThickness*(item.listitems.length+1))/item.listitems.length;

		$('#'+ _id).find('.android-list-thumb').css('width', parseInt(_listitemH)+'px');
	}
	,propertyGroups: [
		{
			caption: 'List',
			properties: [
				[
					prx.commonproperties.backgroundColor
					,{
						caption: 'Active',
						name: 'activeBackgroundColor',
						proptype: 'background-color-2-active',
						type: 'colorpicker',
						value: function(item,name){
							return item.activeBackgroundColor
						}
						,liveUpdate: 'background-color'
						,changeProperty: {
							caption: 'Active background color',
							property: 'background-color',
							selector: 'input:checked + label',
							transitionable: true
						}

					}
				],[
					{
						caption: 'Border (px)',
						name: 'dividerThickness',
						proptype: 'divider-thickness',
						type: 'combo-select',
						value: function(item,name)
						{
							if(typeof(item.dividerThickness) == "undefined") {
								return 1;
							}
							return item.dividerThickness;
						},
						values: { min: 0, max: 20, step: 2 }
						,changeProperty: {
							caption: 'Border width',
							rerender: true
						}

					}
					,{
						caption: false,
						name: 'dividerColor',
						proptype: 'divider-color',
						type: 'colorpicker',
						value: function(item,name) { return item.dividerColor; },
						liveUpdate: 'border-color',
						changeProperty: { caption: 'Border color', selector: '.changeProperty-dividerColor', property: 'border-color', transitionable: true }
					}
				]
			]
		},{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.textColor
				],
				[
					prx.commonproperties.textProperties
					,prx.commonproperties.textAlign
					,{
						caption: 'Active',
						name: 'activeTextColor',
						proptype: 'font-color-2-active',
						type: 'colorpicker',
						value: function(item,name){
							return item.activeTextColor
						}
						,liveUpdate: 'color'
						,changeProperty: {
							caption: 'Active text color',
							property: 'color',
							selector: 'input:checked + label',
							transitionable: true
						}

					}
				]
			]
		},{
			caption: 'Subtitle',
			properties: [
				[
					{

						caption: false,
						name: 'subFont',
						proptype: 'font-family-2-subtitle',
						type: 'select',
						value: function(item,name) { if (typeof(item.subFont) == "undefined") { return 'Helvetica, Arial, sans-serif'; } return item.subFont; },
						values: function() { return prx.comps.fonts; }
						,changeProperty: {
							caption: 'Subtitle font',
							property: 'font-family',
							selector: '.subtitle',
							transitionable: false
						}

					},{
						caption: false,
						name: 'subSize',
						proptype: 'font-size-2-subtitle',
						type: 'combo-select',
						value: function(item,name) { if (typeof(item.subSize) == "undefined") {return 12;} return item.subSize; },
						values: prx.comps.textsize
						,changeProperty: {
							caption: 'Subtitle font size',
							property: 'font-size',
							selector: '.subtitle',
							transitionable: true
						}

					},{
						caption: false,
						name: 'subColor',
						proptype: 'font-color-3-subtitle',
						type: 'colorpicker',
						value: function(item,name) { if (typeof(item.subColor) == "undefined") {return '999999';} return item.subColor; }
						,liveUpdate: 'color'
						,changeProperty: {
							caption: 'Subtitle color',
							property: 'color',
							selector: '.subtitle',
							transitionable: true
						}

					}
				],[
					{
						caption: false,
						name: 'subProperties',
						proptype: 'text-properties-2-subtitle',
						type: 'checkbox',
						value: function(item,name) { if(typeof(item.subProperties) == "undefined") {item.subProperties = [];} return item.subProperties; },
						values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}]
						,changeProperty: {
							caption: 'Subtitle text properties',
							rerender: true,
							changeable: false
						}

					}
					,
					{
						caption: 'Active',
						name: 'activeSubColor',
						proptype: 'font-color-4-subtitle-active',
						type: 'colorpicker',
						value: function(item,name){
							if(typeof(item.activeSubColor) == "undefined") { return 'FFFFFF'; }
							return item.activeSubColor
						}
						,liveUpdate: 'color'
						,changeProperty: {
							caption: 'Subtitle color',
							property: 'color',
							selector: 'input:checked + label .subtitle',
							transitionable: true
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
						caption: false
						,name: 'iconpos'
						,type: 'select'
						,value: function(item,name) {
							return item.iconpos;
						}
						,values: [{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'}]
						,changeProperty: {
							caption: 'Icon position',
							rerender: true,
							changeable: false
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
						,changeProperty: {
							caption: 'Icon size',
							rerender: true,
							changeable: false
						}
					}

				]
			]
		}
	]
	/*
  	,dynamicProperties: {
		data: 'listitems'
		,propertyCaption: 'List items'
  		,propertyName: 'List item'
		,addCaption: 'Add list item'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Label'
			,actions: []
		}
		,captionProperty: 'text'
		,interactions:[
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
		,editableProperties: [
			{
		    	caption: 'Label'
		    	,name: 'text'
		    	,type: 'input'
		    	,value: function(item,name,index) {
		    		return item.listitems[index].text;
		    	}
				,changeProperty: {
					caption: 'Label',
					property: 'text',
					selector: 'label',
					transitionable: true
				}
		    }
		]

	}*/
	,dynamicProperties: {
		data: 'listitems'
		,propertyCaption: 'List items'
  		,propertyName: 'List item'
		,addCaption: 'Add list item'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Label'
			,itemtype: 'basic'
			,subtitle: ''
			,thumbnail: {
				fileId: '',
				folderId: '',
				url: '',
				assetType: '',
				name: ''
			}
			,buttonicon: {
				fileId: '',
				folderId: '',
				url: '',
				assetType: 'icon',
				name: ''
			},
			checked: false,
			actions: []
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
				,changeProperty: {
					caption: 'Label',
					property: 'text',
					selector: '.android-list-text',
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
				,changeProperty: {
					caption: 'Subtitle Text',
					property: 'text',
					selector: '.android-list-subtitle',
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
				properties: [
					[
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
									  ,{ value: 'withIcon', displayValue: 'With Icon' }
									  ,{ value: 'withCheckbox', displayValue: 'Checkbox (On/off)'}
									  ,{ value: 'withRadio', displayValue: 'Radio (On/off)'}
							],
							onChange: function(item, index) {
								switch(item.itemtype) {
								case 'basic':
									$('#property-buttonicon, #property-checked').hide();
									break;
								case 'withIcon':
									item.buttonicon = { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' };
									return item;
									break;
								case 'withCheckbox':
								case 'withRadio':
									item.buttonicon = {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"};
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
				}
				,
				{
					caption: 'Thumbnail',
					properties: [
					[
						{
							caption: false
							,name: 'thumbnail'
							,type: 'combo-asset'
							,displayValue: function(item,name,index) {
								if(typeof(item.listitems[index].thumbnail) == 'undefined' || item.listitems[index].thumbnail.url == '') {
									return 'No thumbnail selected';
								}
								return item.listitems[index].thumbnail.name;
							}
							,value: function(item,name,index) {
								return $.toJSON({
									allow: 'image',
									asset: item.listitems[index].thumbnail
								});
							}
							,changeProperty: {
								caption: 'Thumbnail',
								rerender: true
							}

						}
					]]
				}
				,
				{
					caption: 'Icon',
					properties: [[
						{
							caption: false
							,name: 'buttonicon'
							,type: 'combo-asset'
							,displayValue: function(item,name,index) {
								if(item.listitems[index].buttonicon.url == '') {
									return 'No icon selected';
								}
								return item.listitems[index].buttonicon.name;
							}
							,value: function(item,name,index) {
								return $.toJSON({
									allow: 'image',
									asset: item.listitems[index].buttonicon
								});
							}
							,hiddenByDefault: function(item,name,index){
								return (item.listitems[index].itemtype != 'withIcon' && item.listitems[index].itemtype != 'withCheckbox' && item.listitems[index].itemtype != 'withRadio');
							}
							,changeProperty: {
								caption: 'Icon',
								rerender: true
							}

						}
					]]
				},
				{
					caption: 'Checkbox state',
					properties: [[
						{
							caption: 'Checked?'
							,name: 'checked'
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
					]
				]
			}
		]
	}
}

//TYPE = BASIC LIST
prx.types.android_listbasic = prx.componentsHelper.cloneobject(prx.types.android_listcomplex);
prx.types.android_listbasic.name = 'android_listbasic';
prx.componentsHelper.removeProperties(prx.types.android_listbasic.propertyGroups, ['iconpos', 'iconSize'])
prx.componentsHelper.removeProperties(prx.types.android_listbasic.dynamicProperties.propertyGroups, ['buttonicon','itemtype']);
prx.types.android_listbasic.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.android_listbasic.dynamicProperties.blankItem, ['buttonicon','checked']);
prx.types.android_listbasic.dynamicProperties.blankItem.itemtype = 'basic';
prx.types.android_listbasic.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listbasic.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withSubtitle');
prx.types.android_listbasic.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listbasic.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = LIST WITH SUBTITLE
prx.types.android_listwithsubtitle = prx.componentsHelper.cloneobject(prx.types.android_listcomplex);
prx.types.android_listwithsubtitle.name = 'android_listwithsubtitle';
prx.componentsHelper.removeProperties(prx.types.android_listwithsubtitle.propertyGroups, ['iconpos', 'iconSize'])
prx.componentsHelper.removeProperties(prx.types.android_listwithsubtitle.dynamicProperties.propertyGroups, ['buttonicon','itemtype']);
prx.types.android_listwithsubtitle.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.android_listwithsubtitle.dynamicProperties.blankItem, ['buttonicon','checked']);
prx.types.android_listwithsubtitle.dynamicProperties.blankItem.itemtype = 'withSubtitle';
prx.types.android_listwithsubtitle.dynamicProperties.blankItem.subtitle = 'Subtitle';
prx.types.android_listwithsubtitle.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listwithsubtitle.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withSubtitle');
prx.types.android_listwithsubtitle.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listwithsubtitle.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = LIST WITH ICON
prx.types.android_listwithicon = prx.componentsHelper.cloneobject(prx.types.android_listcomplex);
prx.types.android_listwithicon.name = 'android_listwithicon';
prx.componentsHelper.removeProperties(prx.types.android_listwithicon.dynamicProperties.propertyGroups, ['itemtype']);
prx.types.android_listwithicon.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.android_listwithicon.dynamicProperties.blankItem, ['checked']);
prx.types.android_listwithicon.dynamicProperties.blankItem.itemtype = 'withIcon';
prx.types.android_listwithicon.dynamicProperties.blankItem.buttonicon = {"fileId":"94a90bf9a645dba63ad7a41d18f82ea7.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","folderId":"f1352971179296"};
prx.types.android_listwithicon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listwithicon.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withIcon');
prx.types.android_listwithicon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listwithicon.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);
prx.types.android_listwithicon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listwithicon.dynamicProperties.propertyGroups, 'buttonicon', 'hiddenByDefault', false);

//TYPE = LIST WITH ICON AND SUBTITLE
prx.types.android_listwithiconandsubtitle = prx.componentsHelper.cloneobject(prx.types.android_listwithicon);
prx.types.android_listwithiconandsubtitle.name = 'android_listwithiconandsubtitle';
prx.types.android_listwithiconandsubtitle.dynamicProperties.blankItem.subtitle = 'Subtitle';

//TYPE = LIST WITH THUMBNAIL
prx.types.android_listwiththumbnail = prx.componentsHelper.cloneobject(prx.types.android_listcomplex);
prx.types.android_listwiththumbnail.name = 'android_listwiththumbnail';
prx.componentsHelper.removeProperties(prx.types.android_listwiththumbnail.propertyGroups, ['iconpos', 'iconSize']);
prx.componentsHelper.removeProperties(prx.types.android_listwiththumbnail.dynamicProperties.propertyGroups, ['buttonicon','itemtype']);
prx.types.android_listwiththumbnail.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.android_listwiththumbnail.dynamicProperties.blankItem, ['buttonicon','checked']);
prx.types.android_listwiththumbnail.dynamicProperties.blankItem.itemtype = 'withThumbnail';
prx.types.android_listwithicon.dynamicProperties.blankItem.thumnail = {"fileId":"01eb56561388a5a9015bcab43ddeeab5.svg","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/01eb56561388a5a9015bcab43ddeeab5.svg","bucketsource":"main","name":" image_placeholder.svg"};
prx.types.android_listwiththumbnail.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listwiththumbnail.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withThumnail');
prx.types.android_listwiththumbnail.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listwiththumbnail.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = LIST WITH THUMBNAIL AND SUBTITLE
prx.types.android_listwiththumbnailandsubtitle = prx.componentsHelper.cloneobject(prx.types.android_listwiththumbnail);
prx.types.android_listwiththumbnailandsubtitle.name = 'android_listwiththumbnailandsubtitle';
prx.types.android_listwiththumbnailandsubtitle.dynamicProperties.blankItem.subtitle = 'Subtitle';

//TYPE = RADIO LIST
prx.types.android_listradio = prx.componentsHelper.cloneobject(prx.types.android_listcomplex);
prx.types.android_listradio.name = 'android_listradio';
prx.types.android_listradio.dynamicProperties.blankItem.itemtype = 'withRadio';
prx.types.android_listradio.dynamicProperties.blankItem.buttonicon = {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"};
prx.types.android_listradio.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listradio.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withRadio');
prx.types.android_listradio.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listradio.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);
prx.types.android_listradio.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listradio.dynamicProperties.propertyGroups, 'checked', 'hiddenByDefault', false);

//TYPE = CHECKBOX LIST
prx.types.android_listcheckbox = prx.componentsHelper.cloneobject(prx.types.android_listradio);
prx.types.android_listcheckbox.name = 'android_listcheckbox';
prx.types.android_listradio.dynamicProperties.blankItem.itemtype = 'withCheckbox';
prx.types.android_listcheckbox.dynamicProperties.blankItem.buttonicon = {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"};
prx.types.android_listcheckbox.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.android_listcheckbox.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withCheckbox');


/***** OTHER COMPONENTS *****/

//TYPE: TOAST
prx.types.android_toast = {
	name: "android_toast"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var _dims = prx.componentsHelper.getRealDims(item,symbol);

		var cR = '<div id="'+_id+'" class="box pos type-android-toast">'

		cR += '<style>'
		cR += '#'+_id+' .toast-inner { line-height: '+_dims.height+'px; background-color: '+prx.utils.getColor(item.backgroundColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; color: '+prx.utils.getColor(item.textColor)+'; '+_props+' '+((item.enableShadow) ? 'box-shadow: 0 0 '+item.shadowSpread+'px ' +prx.utils.getColor(item.shadowColor)+ ';' : '')+'}'
		cR += '</style>'

		cR += '<div class="toast-inner liveUpdate-backgroundColor liveUpdate-textColor changeProperty-text changeProperty-backgroundColor changeProperty-textFont changeProperty-textSize changeProperty-textColor"><span data-editableproperty="text">' + item.text + '</span></div>'
		cR += '</div>'
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item);

		$('#'+_id+' .toast-inner').css('line-height', _dims.height + 'px')
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
					prx.commonproperties.backgroundColor
				],
				[
					{
						caption: 'Shadow',
						name: 'enableShadow',
						type: 'onoff',
						value: function(item,name) {
							return item.enableShadow
						},
						onChange: function(item){
							if(item.enableShadow) {
								$('#property-shadowColor, #property-shadowSpread').show();
							} else {
								$('#property-shadowColor, #property-shadowSpread').hide();
							}
						}
						,changeProperty: {
							caption: 'Shadow',
							rerender: true
						}
					}
				,
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
					},
					{
						caption: 'Spread',
						name: 'shadowSpread',
						proptype: 'shadow-spread',
						type: 'combo-select',
						value: function(item,name) {
							return item.shadowSpread;
						},
						values: { min: 1, max: 10, step: 1 }
						,hiddenByDefault: function(item) {
							return (!item.enableShadow);
						}
						,changeProperty: {
							caption: 'Shadow spread',
							rerender: true
						}
					}
				]
			]
		},{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.textColor
				],[
					prx.commonproperties.textProperties
				]
			]
		}
	]

}

/* NOTIFICATION ITEM */
prx.types.android_notification_item = {
	name: "android_notification_item"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _props = (jQuery.inArray("bold",item.titleProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.titleProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.titleProperties)>-1) ? " text-decoration: underline;" : "";

		var _subtitle_props = (jQuery.inArray("bold",item.subtitleProperties)>-1) ? " font-weight: bold;" : "";
		_subtitle_props += (jQuery.inArray("italic",item.subtitleProperties)>-1) ? " font-style: italic;" : "";
		_subtitle_props += (jQuery.inArray("underline",item.subtitleProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-android-notification-item">';

		cR += '<style>';
		cR += '#' + _id + ' .android-notification-item-wrapper { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		if(item.thumbnail.url != '') {
			cR += '#' + _id + ' .android-notification-item-thumbnail { background-image: url('+prx.componentsHelper.getAssetUrl(item.thumbnail)+'); background-size: '+item.thumbnailSize*20+'% auto; background-color: '+prx.utils.getColor(item.thumbnailBgColor)+'; width: '+(dims.height)+'px; }'
		}
		cR += '#' + _id + ' .android-notification-item-title { color: '+prx.utils.getColor(item.titleColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.titleFont)+' font-size: '+item.titleSize+'px; '+_props+'}';
		cR += '#' + _id + ' .android-notification-item-subtitle { color: '+prx.utils.getColor(item.subtitleColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.subtitleFont)+' font-size: '+item.subtitleSize+'px; '+_subtitle_props+'}';
		cR += '#' + _id + ' .android-notification-item-time { color: '+prx.utils.getColor(item.timeColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.timeFont)+' font-size: '+item.timeSize+'px; font-weight: '+item.timeProperties+';}';
		if(item.imgSrc.url != '') {
		cR += '#' + _id + ' .android-notification-item-icon { background-image: url('+prx.componentsHelper.getAssetUrl(item.imgSrc)+'); background-size: '+item.iconSize*20+'% auto; }';
		}
		cR += '</style>';

		cR += '<div class="android-notification-item-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="android-notification-item-thumbnail liveUpdate-thumbnailBgColor changeProperty-thumbnailBgColor"></div>';
		cR += '<div class="android-notification-item-main-text">';
		cR += '<div class="android-notification-item-title liveUpdate-titleColor changeProperty-titleColor changeProperty-titleSize changeProperty-titleFont"><span data-editableproperty="title">'+item.title+'</span></div>';
		cR += '<div class="android-notification-item-subtitle liveUpdate-subtitleColor changeProperty-subtitleColor changeProperty-subtitleSize changeProperty-subtitleFont"><span data-editableproperty="subtitle">'+item.subtitle+'</span></div>';
		cR += '</div>';
		cR += '<div class="android-notification-item-right-info">';
		cR += '<div class="android-notification-item-time liveUpdate-timeColor changeProperty-timeColor changeProperty-timeSize changeProperty-timeFont"><span data-editableproperty="time">'+item.time+'</span></div>';
		cR += '<div class="android-notification-item-icon"></div>';
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _height = prx.componentsHelper.getRealDims(item).height;

		if(item.thumbnail.url != '') {
			$('#'+_id).find('.android-notification-item-thumbnail').width(_height)
		}
	}
	,interactions:
		[
			prx.commonproperties.actions
		]
	,editableProperties: [
        {
			caption: 'Title'
			,name: 'title'
			,type: 'input'
			,value: function(item,name) {
				return item.title;
			}
        	,changeProperty: {
        		caption: 'Title',
        		selector: '.android-notification-item-title',
        		property: 'text',
        		transitionable: false
        	}
		},
        {
			caption: 'Subtitle'
			,name: 'subtitle'
			,type: 'input'
			,value: function(item,name) {
				return item.subtitle;
			}
        	,changeProperty: {
        		caption: 'Subtitle',
        		selector: '.android-notification-item-subtitle',
        		property: 'text',
        		transitionable: false
        	}
		},
        {
			caption: 'Time'
			,name: 'time'
			,type: 'input'
			,value: function(item,name) {
				return item.time;
			}
        	,changeProperty: {
        		caption: 'Time',
        		selector: '.android-notification-item-time',
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
          					prx.commonproperties.backgroundColor
          				]
          			]
          		},
          		{
          		    caption: 'Title',
          		    properties: [
          		        [
							{
								caption: false,
								name: 'titleFont',
								proptype: 'font-family',
								type: 'select',
								value: function(item,name) { return item.titleFont; },
								values: function(){ return prx.comps.fonts },
								changeProperty: { caption: 'Title font', selector: '.changeProperty-titleFont', property: 'font-family', transitionable: false }
							},
							{
								caption: false,
								name: 'titleSize',
								proptype: 'font-size',
								type: 'combo-select',
								value: function(item,name) { return item.titleSize; },
								values: prx.comps.textsize,
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
								proptype: 'font-color',
								type: 'colorpicker',
								value: function(item,name) { return item.titleColor; },
								liveUpdate: 'color',
								changeProperty: {
									caption: 'Title color',
									selector: '.changeProperty-titleColor',
									property: 'color',
									transitionable: true
								}
							}
						],
						[
							{
								caption: false,
								name: 'titleProperties',
								proptype: 'text-properties',
								type: 'checkbox',
								value: function(item,name) { return item.titleProperties; },
								values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}],
								changeProperty: {
									caption: 'Title properties',
									rerender: true
								}
							}
          				]
          			]
          		},
          		{
          		    caption: 'Subtitle',
          		    properties: [
          		        [
							{
								caption: false,
								name: 'subtitleFont',
								proptype: 'font-family-2-subtitle',
								type: 'select',
								value: function(item,name) { return item.subtitleFont; },
								values: function(){ return prx.comps.fonts },
								changeProperty: { caption: 'Subtitle font', selector: '.changeProperty-subtitleFont', property: 'font-family', transitionable: false }
							},
							{
								caption: false,
								name: 'subtitleSize',
								proptype: 'font-size-2-subtitle',
								type: 'combo-select',
								value: function(item,name) { return item.subtitleSize; },
								values: prx.comps.textsize,
								changeProperty: {
									caption: 'Subtitle size',
									selector: '.changeProperty-subtitleSize',
									property: 'font-size',
									transitionable: true
								}
							},
							{
								caption: false,
								name: 'subtitleColor',
								proptype: 'font-color-2-subtitle',
								type: 'colorpicker',
								value: function(item,name) { return item.subtitleColor; },
								liveUpdate: 'color',
								changeProperty: {
									caption: 'Subtitle color',
									selector: '.changeProperty-subtitleColor',
									property: 'color',
									transitionable: true
								}
							}
						],
						[
							{
								caption: false,
								name: 'subtitleProperties',
								proptype: 'text-properties-2-subtitle',
								type: 'checkbox',
								value: function(item,name) { return item.subtitleProperties; },
								values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}],
								changeProperty: {
									caption: 'Subtitle properties',
									rerender: true
								}
							}
          				]
          			]
          		},
          		{
          		    caption: 'Time',
          		    properties: [
          		        [
							{
								caption: false,
								name: 'timeFont',
								proptype: 'font-family-3-time',
								type: 'select',
								value: function(item,name) { return item.timeFont; },
								values: function(){ return prx.comps.fonts },
								changeProperty: { caption: 'Time font', selector: '.changeProperty-timeFont', property: 'font-family', transitionable: false }
							},
							{
								caption: false,
								name: 'timeSize',
								proptype: 'font-size-3-time',
								type: 'combo-select',
								value: function(item,name) { return item.timeSize; },
								values: prx.comps.textsize,
								changeProperty: {
									caption: 'Time size',
									selector: '.changeProperty-timeSize',
									property: 'font-size',
									transitionable: true
								}
							},
							{
								caption: false,
								name: 'timeColor',
								proptype: 'font-color-3-time',
								type: 'colorpicker',
								value: function(item,name) { return item.timeColor; },
								liveUpdate: 'color',
								changeProperty: {
									caption: 'Time color',
									selector: '.changeProperty-timeColor',
									property: 'color',
									transitionable: true
								}
							}
						]
          			]
          		},
          		{
          		    caption: 'Thumbnail',
          		    properties: [
          		        [
          					{
								caption: false,
								name: 'thumbnail',
								type: 'combo-asset',
								displayValue: function(item,name) {
									if(item.thumbnail.url == '') {
			      						return 'No asset selected.';
			      					}
			      					return item.thumbnail.name;
								}
								,value: function(item,name) {
									return $.toJSON({
										allow: 'image',
										asset: item.thumbnail
									});
								}
								,changeProperty: {
			                		caption: 'Thumbnail',
			                		rerender: true
			                	}
							}
          				],
          				[
							{
								caption: false
								,name: 'thumbnailSize'
								,proptype: 'thumb-size'
								,type: 'select'
								,value: function(item,name) {
									return item.thumbnailSize;
								}
								,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
								,changeProperty: {
									caption: 'Thumbnail size',
									rerender: true
								}
							}
							,{
								caption: false,
								name: 'thumbnailBgColor',
								type: 'colorpicker',
								value: function(item,name) { return item.thumbnailBgColor; },
								liveUpdate: 'background-color',
								changeProperty: {
									caption: 'Thumbnail background color',
									selector: '.changeProperty-thumbnailBgColor',
									property: 'background-color',
									transitionable: true
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
								,changeProperty: {
			                		caption: 'Icon',
			                		rerender: true
			                	}
							}
          				],
          				[
							{
								caption: false
								,name: 'iconSize'
								,proptype: 'icon-size'
								,type: 'select'
								,value: function(item,name) {
									return item.iconSize;
								}
								,values: [{ value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
								,changeProperty: {
									caption: 'Icon size',
									rerender: true
								}
							}
          				]
          			]
          		}
          	]
}

/* CROUTON */
prx.types.android_crouton = {
	name: "android_crouton"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-android-crouton">';

		cR += '<style>';
		cR += '#' + _id + ' .android-crouton-wrapper { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '#' + _id + ' .android-crouton-text { color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; '+_props+'}';
		cR += '#' + _id + ' .android-crouton-close-separator { background-color: '+prx.utils.getColor(item.separatorColor)+';}';
		if(item.closeIcon.url != '') {
			cR += '#' + _id + ' .android-crouton-close-icon { width: '+Math.floor(dims.height*0.35)+'px; height: '+Math.floor(dims.height*0.35)+'px; background-image: url('+prx.componentsHelper.getAssetUrl(item.closeIcon)+');}';
		}
		cR += '</style>';

		cR += '<div class="android-crouton-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="android-crouton-text liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont actions-actions1"><span data-editableproperty="text">'+item.text+'</span></div>';
		if(item.closeIcon.url != '') {
			cR += '<div class="android-crouton-close actions-actions2">';
			cR += '<span class="android-crouton-close-separator liveUpdate-separatorColor changeProperty-separatorColor"></span>';
			cR += '<div class="android-crouton-close-icon"></div>';
			cR += '</div>';
		}
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item);

		$('#'+_id).find('.android-crouton-close-icon').css({
			'width': Math.floor(dims.height*0.35)+'px',
			'height': Math.floor(dims.height*0.35)+'px'
		});
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
			caption: 'Right icon interactions',
			name: 'actions2',
			type: 'action',
			value: function(item,name) {
				return item.actions2.length;
			}
			,hiddenByDefault: function(item) {
				return (item.closeIcon.url == '');
			},
			changeProperty: { caption: 'Right icon interactions', selector: '.actions-actions2', property: 'action', transitionable: false, changeable: false }
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
        		selector: '.android-crouton-text',
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
  					prx.commonproperties.backgroundColor
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
				],
				[
					prx.commonproperties.textProperties
				]
  			]
  		},
  		{
  		    caption: 'Separator',
  		    properties: [
  		        [
	  		         {
			  			caption: 'Color',
			  			name: 'separatorColor',
			  			proptype: 'divider-color',
			  			type: 'colorpicker',
			  			value: function(item,name) { return item.separatorColor; },
			  			liveUpdate: 'background-color',
			  			changeProperty: {
			  				caption: 'Separator color',
			  				selector: '.changeProperty-separatorColor',
			  				property: 'background-color',
			  				transitionable: true
			  			}
			  			,hiddenByDefault: function(item) {
							return (item.closeIcon.url == '');
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
						name: 'closeIcon',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(item.closeIcon.url == '') {
	      						return 'No asset selected.';
	      					}
	      					return item.closeIcon.name;
						}
						,value: function(item,name) {
							return $.toJSON({
								allow: 'image',
								asset: item.closeIcon
							});
						}
						,changeProperty: {
	                		caption: 'Icon',
	                		rerender: true
	                	}
						,onChange: function(item) {
							if (item.closeIcon.url == '') {
								$('#property-separatorColor, .interaction-property-group[data-action-property=actions1]').hide();
							} else {
								$('#property-separatorColor, .interaction-property-group[data-action-property=actions1]').show();
							}
						}
					}
  				]
  			]
  		}
    ]
}

/* SMALL CARD */
prx.types.android_card_small = {
	name: "android_card_small"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-android-small-card">';

		cR += '<style>';
		cR += '#' + _id + ' .android-small-card-wrapper { background-color: '+prx.utils.getColor(item.backgroundColor)+'; box-shadow: 0 8px 6px -6px '+prx.utils.getColor(item.shadowColor)+'; }';
		cR += '#' + _id + ' .android-small-card-text { color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; '+_props+'}';
		if(item.thumbnail.url != '') {
			cR += '#' + _id + ' .android-small-card-thumbnail { background-image: url('+prx.componentsHelper.getAssetUrl(item.thumbnail)+'); background-size: '+item.thumbnailSize*20+'% auto; background-color: '+prx.utils.getColor(item.thumbnailBgColor)+'; width: '+dims.height+'px;}';
		}
		cR += '</style>';

		cR += '<div class="android-small-card-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="android-small-card-thumbnail liveUpdate-thumbnailBgColor changeProperty-thumbnailBgColor"></div>';
		cR += '<div class="android-small-card-text liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont"><span data-editableproperty="text">'+item.text+'</span></div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _height = prx.componentsHelper.getRealDims(item).height;

		if(item.thumbnail.url != '') {
			$('#'+_id).find('.android-small-card-thumbnail').width(_height)
		}
	}
	,interactions: [prx.commonproperties.actions]
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
        		selector: '.android-small-card-text',
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
  					prx.commonproperties.backgroundColor,
  					{
  						caption: 'Shadow',
						name: 'shadowColor',
						proptype: 'shadow-color',
						type: 'colorpicker',
						value: function(item,name) { return item.shadowColor; },
						liveUpdate: false,
						changeProperty: {
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
					,prx.commonproperties.textColor
				],
				[
					prx.commonproperties.textProperties
				]
  			]
  		},
  		{
  		    caption: 'Thumbnail',
  		    properties: [
  		        [
  					{
						caption: false,
						name: 'thumbnail',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(item.thumbnail.url == '') {
	      						return 'No asset selected.';
	      					}
	      					return item.thumbnail.name;
						}
						,value: function(item,name) {
							return $.toJSON({
								allow: 'image',
								asset: item.thumbnail
							});
						}
						,changeProperty: {
	                		caption: 'Thumbnail',
	                		rerender: true
	                	}
					}
  				],
  				[
					{
						caption: false
						,name: 'thumbnailSize'
						,proptype: 'thumb-size'
						,type: 'select'
						,value: function(item,name) {
							return item.thumbnailSize;
						}
						,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
						,changeProperty: {
							caption: 'Thumbnail size',
							rerender: true
						}
					}
					,{
						caption: false,
						name: 'thumbnailBgColor',
						type: 'colorpicker',
						value: function(item,name) { return item.thumbnailBgColor; },
						liveUpdate: 'background-color',
						changeProperty: {
							caption: 'Thumbnail background color',
							selector: '.changeProperty-thumbnailBgColor',
							property: 'background-color',
							transitionable: true
						}
					}
				]
  			]
  		}
    ]
}

/* MEDIUM CARD */
prx.types.android_card_medium = {
	name: "android_card_medium"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-android-medium-card">';

		cR += '<style>';
		cR += '#' + _id + ' .android-medium-card-wrapper { background-color: '+prx.utils.getColor(item.backgroundColor)+'; box-shadow: 0 8px 6px -6px '+prx.utils.getColor(item.shadowColor)+'; }';
		cR += '#' + _id + ' .android-medium-card-text { color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; '+_props+'}';
		if(item.thumbnail.url != '') {
			cR += '#' + _id + ' .android-medium-card-thumbnail { background-image: url('+prx.componentsHelper.getAssetUrl(item.thumbnail)+'); background-size: '+item.thumbnailSize*20+'% auto; background-color: '+prx.utils.getColor(item.thumbnailBgColor)+'; width: '+dims.width+'px; height: '+dims.width+'px;}';
		}
		cR += '</style>';

		cR += '<div class="android-medium-card-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="android-medium-card-thumbnail liveUpdate-thumbnailBgColor changeProperty-thumbnailBgColor""></div>';
		cR += '<div class="android-medium-card-text'+((item.actionOverflow) ? ' showActionOverflow' : '')+' liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont"><span data-editableproperty="text">'+item.text+'</span>';
		if(item.actionOverflow) {
			cR += '<div class="actionOverflow actions-actions1">'
			cR += '<div class="AO AO1 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: 4px; height: 4px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+';"></div>'
			cR += '<div class="AO AO2 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: 4px; height: 4px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+';"></div>'
			cR += '<div class="AO AO3 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: 4px; height: 4px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+';"></div>'
			cR += '</div>'
		}
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _width = prx.componentsHelper.getRealDims(item).width;

		$('#'+_id).find('.android-medium-card-thumbnail').width(_width).height(_width)
	}
	,interactions: [
        prx.commonproperties.actions,
        {
			caption: 'Overflow actions',
			name: 'actions1',
			type: 'action',
			value: function(item,name) {
				return item.actions1.length;
			}
			,hiddenByDefault: function(item) {
				return true;
				return (!item.actionOverflow);
			},
			changeProperty: { caption: 'Interactions', selector: '.actions-actions1', property: 'action', transitionable: false, changeable: false }
		}
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
        		selector: '.android-medium-text',
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
  					prx.commonproperties.backgroundColor,
  					{
  						caption: 'Shadow',
						name: 'shadowColor',
						proptype: 'shadow-color',
						type: 'colorpicker',
						value: function(item,name) { return item.shadowColor; },
						liveUpdate: false,
						changeProperty: {
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
					,prx.commonproperties.textColor
				],
				[
					prx.commonproperties.textProperties
				]
  			]
  		},
  		{
  		    caption: 'Thumbnail',
  		    properties: [
  		        [
  					{
						caption: false,
						name: 'thumbnail',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(item.thumbnail.url == '') {
	      						return 'No asset selected.';
	      					}
	      					return item.thumbnail.name;
						}
						,value: function(item,name) {
							return $.toJSON({
								allow: 'image',
								asset: item.thumbnail
							});
						}
						,changeProperty: {
	                		caption: 'Thumbnail',
	                		rerender: true
	                	}
					}
  				],
  				[
					{
						caption: false
						,name: 'thumbnailSize'
						,proptype: 'thumb-size'
						,type: 'select'
						,value: function(item,name) {
							return item.thumbnailSize;
						}
						,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
						,changeProperty: {
							caption: 'Thumbnail size',
							rerender: true
						}
					}
					,{
						caption: false,
						name: 'thumbnailBgColor',
						type: 'colorpicker',
						value: function(item,name) { return item.thumbnailBgColor; },
						liveUpdate: 'background-color',
						changeProperty: {
							caption: 'Thumbnail background color',
							selector: '.changeProperty-thumbnailBgColor',
							property: 'background-color',
							transitionable: true
						}
					}
				]
  			]
  		},{
			caption: 'Action Overflow',
			properties: [
				[
					{
						caption: 'Display action overflow'
						,name: 'actionOverflow'
						,type: 'onoff'
						,value: function(item,name) {
							return item.actionOverflow;
						}
						,onChange: function(item) {
							if(item.actionOverflow) {
								//$('#property-actionOverflowColor, .interaction-property-group[data-action-property=actionbarActionOverflowActions]').show();
								$('#property-actionOverflowColor').show();
							} else {
								//$('#property-actionOverflowColor, .interaction-property-group[data-action-property=actionbarActionOverflowActions]').hide();
								$('#property-actionOverflowColor').hide();
							}
						}
						,changeProperty: {
	                		caption: 'Action Overflow',
	                		rerender: true
	                	}
					},{
						caption: 'Color'
						,name: 'actionOverflowColor'
						,proptype: 'background-color-2-actionoverflow'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.actionOverflowColor;
						}
						,hiddenByDefault: function(item) {
							return (!item.actionOverflow);
						}
						,liveUpdate: 'background-color'
						,changeProperty: {
	                		caption: 'Action Overflow color',
	                		selector: '.actionOverflowColor',
	                		property: 'background-color',
	                		transitionable: true
	                	}
					}
				]
			]
		}
    ]
}

/* BIG CARD */
prx.types.android_card_big = {
	name: "android_card_big"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _props = (jQuery.inArray("bold",item.titleProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.titleProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.titleProperties)>-1) ? " text-decoration: underline;" : "";

		var _subtitle_props = (jQuery.inArray("bold",item.subtitleProperties)>-1) ? " font-weight: bold;" : "";
		_subtitle_props += (jQuery.inArray("italic",item.subtitleProperties)>-1) ? " font-style: italic;" : "";
		_subtitle_props += (jQuery.inArray("underline",item.subtitleProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-android-big-card">';

		cR += '<style>';
		cR += '#' + _id + ' .android-big-card-wrapper { background-color: '+prx.utils.getColor(item.backgroundColor)+'; box-shadow: 0 '+(8*prx.componentsHelper.getScale(item.lib))+'px '+(6*prx.componentsHelper.getScale(item.lib))+'px -'+(6*prx.componentsHelper.getScale(item.lib))+'px '+prx.utils.getColor(item.shadowColor)+'; }';
		cR += '#' + _id + ' .android-big-card-title { color: '+prx.utils.getColor(item.titleColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.titleFont)+' font-size: '+item.titleSize+'px; '+_props+'}';
		cR += '#' + _id + ' .android-big-card-subtitle { color: '+prx.utils.getColor(item.subtitleColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.subtitleFont)+' font-size: '+item.subtitleSize+'px; '+_subtitle_props+'}';
		if(item.thumbnail.url != '') {
			cR += '#' + _id + ' .android-big-card-thumbnail { background-image: url('+prx.componentsHelper.getAssetUrl(item.thumbnail)+'); background-size: '+item.thumbnailSize*20+'% auto; background-color: '+prx.utils.getColor(item.thumbnailBgColor)+'; width: '+dims.height+'px; height: '+dims.height+'px;}';
		}
		cR += '</style>';

		cR += '<div class="android-big-card-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="android-big-card-thumbnail liveUpdate-thumbnailBgColor changeProperty-thumbnailBgColor""></div>';
		cR += '<div class="android-big-card-main-text'+((item.actionOverflow) ? ' showActionOverflow' : '')+'">';
		cR += '<div class="android-big-card-title liveUpdate-titleColor changeProperty-titleColor changeProperty-titleSize changeProperty-titleFont"><span data-editableproperty="title">'+item.title+'</span></div>';
		cR += '<div class="android-big-card-subtitle liveUpdate-subtitleColor changeProperty-subtitleColor changeProperty-subtitleSize changeProperty-subtitleFont"><span data-editableproperty="subtitle">'+item.subtitle+'</span></div>';
		if(item.actionOverflow) {
			cR += '<div class="actionOverflow actions-actions1">'
			cR += '<div class="AO AO1 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: 4px; height: 4px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+';"></div>'
			cR += '<div class="AO AO2 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: 4px; height: 4px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+';"></div>'
			cR += '<div class="AO AO3 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor" style="width: 4px; height: 4px; background-color: '+prx.utils.getColor(item.actionOverflowColor)+';"></div>'
			cR += '</div>'
		}
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _height = prx.componentsHelper.getRealDims(item).height;

		$('#'+_id).find('.android-big-card-thumbnail').width(_height).height(_height)
	}
	,interactions: [
        prx.commonproperties.actions,
        {
			caption: 'Overflow actions',
			name: 'actions1',
			type: 'action',
			value: function(item,name) {
				return item.actions1.length;
			}
			,hiddenByDefault: function(item) {
				return true;
				return (!item.actionOverflow);
			},
			changeProperty: { caption: 'Interactions', selector: '.actions-actions1', property: 'action', transitionable: false, changeable: false }
		}
    ]
	,editableProperties: [
	     {
			caption: 'Title'
			,name: 'title'
			,type: 'textarea'
			,value: function(item,name) {
				return item.title;
			}
        	,changeProperty: {
        		caption: 'Title',
        		selector: '.android-big-card-title',
        		property: 'text',
        		transitionable: false
        	}
		},
        {
			caption: 'Subitle'
			,name: 'subtitle'
			,type: 'textarea'
			,value: function(item,name) {
				return item.subtitle;
			}
        	,changeProperty: {
        		caption: 'Subitle',
        		selector: '.android-big-card-subtitle',
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
  					prx.commonproperties.backgroundColor,
  					{
  						caption: 'Shadow',
						name: 'shadowColor',
						proptype: 'shadow-color',
						type: 'colorpicker',
						value: function(item,name) { return item.shadowColor; },
						liveUpdate: false,
						changeProperty: {
							caption: 'Shadow color',
							rerender: true
						}
  					}
  				]
  			]
  		},
  		{
  		    caption: 'Title',
  		    properties: [
  		        [
					{
						caption: false,
						name: 'titleFont',
						proptype: 'font-family',
						type: 'select',
						value: function(item,name) { return item.titleFont; },
						values: function(){ return prx.comps.fonts },
						changeProperty: { caption: 'Title font', selector: '.changeProperty-titleFont', property: 'font-family', transitionable: false }
					},
					{
						caption: false,
						name: 'titleSize',
						proptype: 'font-size',
						type: 'combo-select',
						value: function(item,name) { return item.titleSize; },
						values: prx.comps.textsize,
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
						proptype: 'font-color',
						type: 'colorpicker',
						value: function(item,name) { return item.titleColor; },
						liveUpdate: 'color',
						changeProperty: {
							caption: 'Title color',
							selector: '.changeProperty-titleColor',
							property: 'color',
							transitionable: true
						}
					}
				],
				[
					{
						caption: false,
						name: 'titleProperties',
						proptype: 'text-properties',
						type: 'checkbox',
						value: function(item,name) { return item.titleProperties; },
						values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}],
						changeProperty: {
							caption: 'Title properties',
							rerender: true
						}
					}
  				]
  			]
  		},
  		{
  		    caption: 'Subtitle',
  		    properties: [
  		        [
					{
						caption: false,
						name: 'subtitleFont',
						proptype: 'font-family-2-subtitle',
						type: 'select',
						value: function(item,name) { return item.subtitleFont; },
						values: function(){ return prx.comps.fonts },
						changeProperty: { caption: 'Subtitle font', selector: '.changeProperty-subtitleFont', property: 'font-family', transitionable: false }
					},
					{
						caption: false,
						name: 'subtitleSize',
						proptype: 'font-size-2-subtitle',
						type: 'combo-select',
						value: function(item,name) { return item.subtitleSize; },
						values: prx.comps.textsize,
						changeProperty: {
							caption: 'Subtitle size',
							selector: '.changeProperty-subtitleSize',
							property: 'font-size',
							transitionable: true
						}
					},
					{
						caption: false,
						name: 'subtitleColor',
						proptype: 'font-color-2-subtitle',
						type: 'colorpicker',
						value: function(item,name) { return item.subtitleColor; },
						liveUpdate: 'color',
						changeProperty: {
							caption: 'Subtitle color',
							selector: '.changeProperty-subtitleColor',
							property: 'color',
							transitionable: true
						}
					}
				],
				[
					{
						caption: false,
						name: 'subtitleProperties',
						proptype: 'text-properties-2-subtitle',
						type: 'checkbox',
						value: function(item,name) { return item.subtitleProperties; },
						values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}],
						changeProperty: {
							caption: 'Subtitle properties',
							rerender: true
						}
					}
  				]
  			]
  		},
  		{
  		    caption: 'Thumbnail',
  		    properties: [
  		        [
  					{
						caption: false,
						name: 'thumbnail',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(item.thumbnail.url == '') {
	      						return 'No asset selected.';
	      					}
	      					return item.thumbnail.name;
						}
						,value: function(item,name) {
							return $.toJSON({
								allow: 'image',
								asset: item.thumbnail
							});
						}
						,changeProperty: {
	                		caption: 'Thumbnail',
	                		rerender: true
	                	}
					}
  				],
  				[
					{
						caption: false
						,name: 'thumbnailSize'
						,proptype: 'thumb-size'
						,type: 'select'
						,value: function(item,name) {
							return item.thumbnailSize;
						}
						,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
						,changeProperty: {
							caption: 'Thumbnail size',
							rerender: true
						}
					}
					,{
						caption: false,
						name: 'thumbnailBgColor',
						type: 'colorpicker',
						value: function(item,name) { return item.thumbnailBgColor; },
						liveUpdate: 'background-color',
						changeProperty: {
							caption: 'Thumbnail background color',
							selector: '.changeProperty-thumbnailBgColor',
							property: 'background-color',
							transitionable: true
						}
					}
				]
  			]
  		},{
			caption: 'Action Overflow',
			properties: [
				[
					{
						caption: 'Display action overflow'
						,name: 'actionOverflow'
						,type: 'onoff'
						,value: function(item,name) {
							return item.actionOverflow;
						}
						,onChange: function(item) {
							if(item.actionOverflow) {
								//$('#property-actionOverflowColor, .interaction-property-group[data-action-property=actionbarActionOverflowActions]').show();
								$('#property-actionOverflowColor').show();
							} else {
								//$('#property-actionOverflowColor, .interaction-property-group[data-action-property=actionbarActionOverflowActions]').hide();
								$('#property-actionOverflowColor').hide();
							}
						}
						,changeProperty: {
	                		caption: 'Action Overflow',
	                		rerender: true
	                	}
					},{
						caption: 'Color'
						,name: 'actionOverflowColor'
						,proptype: 'background-color-2-actionoverflow'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.actionOverflowColor;
						}
						,hiddenByDefault: function(item) {
							return (!item.actionOverflow);
						}
						,liveUpdate: 'background-color'
						,changeProperty: {
	                		caption: 'Action Overflow color',
	                		selector: '.actionOverflowColor',
	                		property: 'background-color',
	                		transitionable: true
	                	}
					}
				]
			]
		}
    ]
}

/* ALERT DIALOG */
prx.types.android_alert_dialog = {
	name: "android_alert_dialog"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-android-alert-dialog">';

		cR += '<style>';
		cR += '#' + _id + ' .android-alert-dialog-wrapper { background-color: '+prx.utils.getColor(item.backgroundColor)+'; font-size: '+item.textSize+'px; }';
		cR += '#' + _id + ' .android-alert-dialog-text { color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; text-align: '+item.textAlign+'; '+_props+'}';
		cR += '#' + _id + ' .android-alert-dialog-buttons, #' + _id + ' .android-alert-dialog-button { border-color: '+prx.utils.getColor(item.borderColor)+'; border-width: '+item.borderWidth+'px; }';
		cR += '</style>';

		cR += '<div class="android-alert-dialog-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="android-alert-dialog-text liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-textAlign"><span data-editableproperty="text">'+item.text+'</span></div>';
		cR += '<div class="android-alert-dialog-buttons liveUpdate-borderColor liveUpdate-borderWidth changeProperty-borderColor changeProperty-borderWidth">'
		$.each(item.buttons, function(i,elm) {
			var _button_props = (jQuery.inArray("bold",elm.textProperties)>-1) ? " font-weight: bold;" : "";
			_button_props += (jQuery.inArray("italic",elm.textProperties)>-1) ? " font-style: italic;" : "";
			_button_props += (jQuery.inArray("underline",elm.textProperties)>-1) ? " text-decoration: underline;" : "";

			cR += '<div id="'+_id+'-buttons-'+i+'" class="android-alert-dialog-button dynamic-property liveUpdate-borderColor liveUpdate-textColor-'+i+' changeProperty-buttonColor" data-dynamic-property-index="'+i+'" style="'+_button_props+' color: '+prx.utils.getColor(elm.textColor)+';">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + elm.text + '</span>';
			cR += '</div>';
		});
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
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
        		selector: '.android-alert-dialog-text',
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
					prx.commonproperties.backgroundColor
				],
				[
					prx.commonproperties.borderWidth,
					prx.commonproperties.borderColor
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
				],
				[
					prx.commonproperties.textProperties
					,prx.commonproperties.textAlign
				]

			]
		}
    ]
	,dynamicProperties: {
   		data: 'buttons'
   		,propertyCaption: 'Buttons'
    	,propertyName: 'Button'
   		,addCaption: 'Add button'
   		,deleteCaption: 'Delete'
   		,captionProperty: 'text'
   		,blankItem: {
			text: 'Label',
   			actions: [],
   			textColor: '#0000',
   			textProperties: []
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
   	   		         		name: 'textProperties',
   	   		         		proptype: 'text-properties-2-buttons',
   	   		         		type: 'checkbox',
   	   		         		value: function(item,name,index) {  return item.buttons[index].textProperties; },
   	   		         		values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}],
   	   		         		changeProperty: {
   	   		         			caption: 'Text properties',
   	   		         			rerender: true
   	   		         		}
   	   		         	},
   	   		         	{
   	   		         		caption: false,
   	   		         		name: 'textColor',
   	   		         		proptype: 'font-color-2-buttons',
   	   		         		type: 'colorpicker',
   	   		         		value: function(item,name,index) { return item.buttons[index].textColor; },
   	   		         		liveUpdate: 'color',
   	   		         		changeProperty: {
   	   		         			caption: 'Text color',
   	   		         			selector: '.changeProperty-buttonColor',
   	   		         			property: 'color',
   	   		         			transitionable: true
   	   		         		}
   	   		         	}
   	   				]
   	   			]
   	   		}
     	]
	}
}

/* DOWNLOAD PROGRESS BAR */
prx.types.android_progressbasic = {
	name: "android_progressbasic"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var _percent_props = (jQuery.inArray("bold",item.percentProperties)>-1) ? " font-weight: bold;" : "";
		_percent_props += (jQuery.inArray("italic",item.percentProperties)>-1) ? " font-style: italic;" : "";
		_percent_props += (jQuery.inArray("underline",item.percentProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-android-progress-basic '+((item.isDownloading) ? '' : 'estimation') +'">';

		cR += '<style>';
		if(item.cancelIcon.url != '') {
			cR += '#' + _id + ' .android-progress-basic-icon { background-image: url('+prx.componentsHelper.getAssetUrl(item.cancelIcon)+'); background-size: '+(item.iconSize*20)+'% auto; }';
		}
		cR += '#' + _id + ' .android-progress-basic-wrapper { background-color: '+prx.utils.getColor(item.backgroundColor)+'; font-size: '+item.textSize+'px; }';
		cR += '#' + _id + ' .android-progress-basic-text { color: '+prx.utils.getColor(item.textColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.textFont)+' font-size: '+item.textSize+'px; '+_props+'}';
		cR += '#' + _id + ' .android-progress-basic-bg-bar { height: '+item.barHeight+'px; background-color: '+prx.utils.getColor(item.bgBarBackgroundColor)+'; }';
		if(item.isDownloading == true) {
		cR += '#' + _id + ' .android-progress-basic-percent { color: '+prx.utils.getColor(item.percentColor)+'; '+prx.componentsHelper.getFontCssFromFontFamily(item.percentFont)+' font-size: '+item.percentSize+'px; '+_percent_props+'}';
		cR += '#' + _id + ' .android-progress-basic-percent-bar { width: '+item.percentBarValue+'%; background-color: '+prx.utils.getColor(item.percentBarBackgroundColor)+'; }';
		}
		if(item.isDownloading == false) {
		cR += '#' + _id + ' .android-progress-basic-bg-bar-node { background-color: '+prx.utils.getColor(item.cubesColor)+'; width: '+item.barHeight+'px; }';
		}
		cR += '</style>';

		cR += '<div class="android-progress-basic-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="android-progress-basic-main-text">';
		cR += '<div class="android-progress-basic-text liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont"><span data-editableproperty="text">'+item.text+'</span></div>';
		if(item.isDownloading == true) {
		cR += '<div class="android-progress-basic-percent liveUpdate-percentColor changeProperty-percentColor changeProperty-percentSize changeProperty-percentFont">'+item.percentBarValue+'%</div>';
		}
		cR += '</div>';
		cR += '<div class="android-progress-basic-bar-wrapper">';
		cR += '<div class="android-progress-basic-bg-bar liveUpdate-bgBarBackgroundColor changeProperty-bgBarBackgroundColor changeProperty-bgBarThickness">';
		if(item.isDownloading == true) {
		cR += '<div class="android-progress-basic-percent-bar liveUpdate-percentBarBackgroundColor changeProperty-percentBarBackgroundColor changeProperty-percentBarValue"></div>';
		}
		else {
		cR += '<div class="android-progress-basic-bg-bar-node liveUpdate-cubesColor changeProperty-cubesColor" id="android-progress-basic-bg-bar-node-1"></div>';
		cR += '<div class="android-progress-basic-bg-bar-node liveUpdate-cubesColor changeProperty-cubesColor" id="android-progress-basic-bg-bar-node-2"></div>';
		cR += '<div class="android-progress-basic-bg-bar-node liveUpdate-cubesColor changeProperty-cubesColor" id="android-progress-basic-bg-bar-node-3"></div>';
		}
		cR += '</div>';
		cR += '<div class="android-progress-basic-icon-wrapper actions-actions1">';
		cR += '<div class="android-progress-basic-icon"></div>';
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,interactions: [
		{
			caption: 'Cancel icon actions',
			name: 'actions1',
			type: 'action',
			value: function(item,name) {
				return item.actions1.length;
			}
			,hiddenByDefault: function(item) {
				return (item.cancelIcon.url == '');
			}
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
        		selector: '.android-progress-basic-text',
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
  					prx.commonproperties.backgroundColor
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
				],
				[
				 	prx.commonproperties.textProperties
				]
			]
		},
   		{
   		    caption: 'Percentage Text',
   		    properties: [
   		        [
 					{
 						caption: false,
 						name: 'percentFont',
 						proptype: 'font-family-2-percent',
 						type: 'select',
 						value: function(item,name) { return item.percentFont; },
 						values: function(){ return prx.comps.fonts },
 						changeProperty: {
 							caption: 'Percentage font',
 							selector: '.changeProperty-percentFont',
 							property: 'font-family',
 							transitionable: false
 						}
 					},
 					{
 						caption: false,
 						name: 'percentSize',
 						proptype: 'font-size-2-percent',
 						type: 'combo-select',
 						value: function(item,name) { return item.percentSize; },
 						values: prx.comps.textsize,
 						changeProperty: {
 							caption: 'Percentage size',
 							selector: '.changeProperty-percentSize',
 							property: 'font-size',
 							transitionable: true
 						}
 					},
 					{
 						caption: false,
 						name: 'percentColor',
 						proptype: 'font-color-2-percent',
 						type: 'colorpicker',
 						value: function(item,name) { return item.percentColor; },
 						liveUpdate: 'color',
 						changeProperty: {
 							caption: 'Percentage color',
 							selector: '.changeProperty-percentColor',
 							property: 'color',
 							transitionable: true
 						}
 					}
 				],
 				[
 					{
 						caption: false,
 						name: 'percentProperties',
 						proptype: 'text-properties-2-percent',
 						type: 'checkbox',
 						value: function(item,name) { return item.percentProperties; },
 						values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}],
 						changeProperty: {
 							caption: 'Percentage properties',
 							rerender: true
 						}
 					}
   				]
   			]
   		},
   		{
			caption: "Main Bar",
			properties: [
				[
	      			{
            			caption: 'Thickness'
            			,name: 'barHeight'
            			,proptype: 'bar-thickness'
            			,type: 'combo-select'
            			,value: function(item,name) {
            				return item.barHeight;
            			}
    					,values: { min: 5, max: 15, step: 1 }
    					,changeProperty: {
							caption: 'Thickness',
							selector: '.changeProperty-bgBarThickness',
							property: 'height',
							transitionable: true
						 }
	      			},
	      			{
	      				caption: 'Color'
	      				,name: 'bgBarBackgroundColor'
	      				,proptype: 'background-color-2-main-bar'
	      				,type: 'colorpicker'
	      				,value: function(item,name) {
	      					return item.bgBarBackgroundColor;
	      				}
	      				,liveUpdate: 'background-color'
	      				,changeProperty: {
							caption: 'Main Bar color',
							selector: '.changeProperty-bgBarBackgroundColor',
							property: 'background-color',
							transitionable: true
						}
	      			},
	      			{
	      				caption: 'Squares Background'
		      				,name: 'cubesColor'
		      				,type: 'colorpicker'
		      				,value: function(item,name) {
		      					return item.cubesColor;
		      				}
		      				,liveUpdate: 'background-color'
	      					,hiddenByDefault: function(item,name,index){
	   		         			return (item.isDownloading)
	   		         		}
		      				,changeProperty: {
								caption: 'Squares Background Color',
								selector: '.changeProperty-cubesColor',
								property: 'background-color',
								transitionable: true
							}
	      			}
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
						,type: 'combo-select'
						,value: function(item,name) {
							return item.percentBarValue;
						}
						,values: { min: 0, max: 100, step: 10 }
						,changeProperty: {
							caption: 'Progress',
							rerender: true
						 }
					},
	      			{
	      				caption: 'Color'
	      				,name: 'percentBarBackgroundColor'
						,proptype: 'background-color-3-percent-bar'
	      				,type: 'colorpicker'
	      				,value: function(item,name) {
	      					return item.percentBarBackgroundColor;
	      				}
	      				,liveUpdate: 'background-color'
	      				,changeProperty: {
							caption: 'Percentage Bar color',
							selector: '.changeProperty-percentBarBackgroundColor',
							property: 'background-color',
							transitionable: true
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
 						name: 'cancelIcon',
 						type: 'combo-asset',
 						displayValue: function(item,name) {
 							if(item.cancelIcon.url == '') {
 	      						return 'No asset selected.';
 	      					}
 	      					return item.cancelIcon.name;
 						}
 						,value: function(item,name) {
 							return $.toJSON({
 								allow: 'image',
 								asset: item.cancelIcon
 							});
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
						,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
						,changeProperty: {
	                		caption: 'Close Icon size',
	                		rerender: true,
	                		changeable: false
						}
					}
				]
   			]
   		}
	]
}

//TYPE = ESTIMATING PROGRESS BAR
prx.types.android_progressestimating = prx.componentsHelper.cloneobject(prx.types.android_progressbasic);
prx.types.android_progressestimating.name = 'android_progressestimating';
prx.componentsHelper.removeProperties(prx.types.android_progressestimating.propertyGroups, ['percent', 'percentSize', 'percentFont', 'percentColor', 'percentProperties','percentBarValue', 'percentBarBackgroundColor']);

/* SLIDER */
prx.types.android_slider = {
	name: 'android_slider'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item,symbol);

		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-android-slider">';

		cR += '<style>'
		cR += '#'+_id+' .android-slider-bar { height: '+item.barThickness+'px; background-color: '+prx.utils.getColor(item.barColor)+'; margin-top: -'+(item.barThickness/2)+'px; }'
		cR += '#'+_id+' .android-slider-bar-filled { width: '+item.sliderPosition+'%; background-color: '+prx.utils.getColor(item.fillBarColor)+' }'
		cR += '#'+_id+' .android-slider-button { background-color: '+prx.utils.getColor(item.fillBarColor)+'; width: '+(item.barThickness*4)+'px; height: '+(item.barThickness*4)+'px; margin-left: -'+(item.barThickness*2)+'px; margin-right: -'+(item.barThickness*2)+'px; top: '+((_dims.height/2)-((item.barThickness*4)/2))+'px; }';
		cR += '#'+_id+' .android-slider-button-overlay {  background-color: '+prx.utils.getColor(item.fillBarColor)+'; }';
		cR += '</style>'

		cR += '<div class="android-slider-bar liveUpdate-barColor">';
		cR += '<div class="android-slider-bar-filled liveUpdate-fillBarColor"></div>'
		cR += '</div>';
		cR += '<span class="android-slider-button liveUpdate-fillBarColor">';
		cR += '<span class="android-slider-button-overlay liveUpdate-fillBarColor"></span>';
		cR += '</span>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);

		$('#'+_id+' .android-slider-button').css({
			top: ((dims.height/2)-((item.barThickness*4)/2))+'px',
			marginLeft: '-'+(item.barThickness*2)+'px',
			marginRight: '-'+(item.barThickness*2)+'px'
		})

		if(prx.editor){
		$('#'+_id).find(' .android-slider-button').css({ 
			'left': ((dims.width)*(item.sliderPosition*0.01)) + 'px'
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

		if(!prx.editor) {

			prx.draggable._draggables['#'+_id+' .android-slider-button'] = Draggable.create('#'+_id+' .android-slider-button', {
				type: 'x',
				bounds: { left: -(item.barThickness*2), width: parseInt(dims.width)+parseInt((item.barThickness*4)), top: 0, height: 0 },
				onDragStart: function(){
					$(this.target).parents('.box').each(function() {
            			if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
            				prx.scrollable._scrollables[this.id + '-inner'].disable();
            			}
            		})

            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;

            		var progress = Math.ceil((pos / width)*100)

					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['sliderdragstart'] = { value: progress };
					$('#'+_id).trigger('sliderdragstart');

					// hack instead of ondrag because greensock on drag only triggers if the item has actually moved
					// so if you are at 0 or 100 it only triggers once, which results in the value not always being updated
					// because of the "actionIsRunning" check
					$(document).on('mousemove.prx-sliderdrag touchmove.prx-sliderdrag', function(){
						var pos = $('#' + _id + ' .android-slider-button').position().left;
						var width = $('#' + _id).width();

						$('#'+_id+' .android-slider-bar-filled').width(pos);
						var progress = Math.ceil((pos / width)*100)

						if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
				        prx.variables._triggerData['#'+_id]['sliderdrag'] = { value: progress };
						$('#'+_id).trigger('sliderdrag');
					})
				},
				onDragEnd: function(){

					$(document).off('mousemove.prx-sliderdrag touchmove.prx-sliderdrag');

					$(this.target).parents('.box').each(function() {
            			if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
            				//alert('x')
            				prx.scrollable._scrollables[this.id + '-inner'].enable();
            			}
            		})

            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;

					var progress = Math.ceil((pos / width)*100)

					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['sliderdragend'] = { value: progress };
					$('#'+_id).trigger('sliderdragend');
				}
			});

			TweenLite.set('#'+_id+' .android-slider-button',{x:((dims.width)*(item.sliderPosition*0.01))});

			$('#'+_id+' .android-slider-bar').click(function(e){
				var _pos = e.pageX - $(this).offset().left;

				var progress = Math.ceil((_pos / $('#'+_id).width())*100);

				TweenLite.to($('#'+_id+' .android-slider-bar-filled'), 1, {width:_pos});
				TweenLite.to($('#'+_id+' .android-slider-button'), 1, {x:_pos});

				//$(this).find('.android-slider-bar-filled').width(_pos);
				//$(this).siblings('.android-slider-button').css({ left: _pos + 'px' });
				
				prx.draggable._draggables['#'+_id+' .android-slider-button'][0].update();

				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }

				prx.variables._triggerData['#'+_id]['sliderdragstart'] = { value: progress };
				prx.variables._triggerData['#'+_id]['sliderdrag'] = { value: progress };
				prx.variables._triggerData['#'+_id]['sliderdragend'] = { value: progress };
				$('#'+_id).trigger('sliderdragstart');
				$('#'+_id).trigger('sliderdrag');
				$('#'+_id).trigger('sliderdragend');
			});
		}
		else {	
			$('#'+_id).find(' .android-slider-button').css({ 
				'left': ((dims.width)*(item.sliderPosition*0.01)) + 'px'
			});
		}
	}
	,interactions: [prx.commonproperties.actions]
	,mpactions: {
		specialEvents: ['sliderdragstart','sliderdrag','sliderdragend']
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
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.barColor;
						}
						,liveUpdate:'background-color'
		      	    	,changeProperty: {
							caption: 'Color',
							property: 'background-color',
							selector: '.android-slider-bar',
							transitionable: true
						}

					},
					{
						caption: 'Fill Color'
						,name: 'fillBarColor'
						,proptype: 'background-color-2-fill'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.fillBarColor;
						}
						,liveUpdate:'background-color'
		      	    	,changeProperty: {
							caption: 'Fill Color',
							property: 'background-color',
							selector: '.android-slider-bar-filled',
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
						,name: 'fillBarColor'
						,proptype: 'background-color-2-fill'
						,type: 'colorpicker'
						,value: function(item,name) {
							return item.fillBarColor;
						}
						,liveUpdate:'background-color'
		      	    	,changeProperty: {
							caption: 'Slider color',
							property: 'background-color',
							selector: '.android-slider-button',
							transitionable: true
						}
					}
				]
				,[
					{
						caption: 'Original position (%)'
						,name: 'sliderPosition'
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
				],

			]
		}
	]
}


/* STATUSBAR */
prx.types.android_statusbar = {
	name: "android_statusbar"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var now = new Date();

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-android-statusbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';


		cR += '<style>';
		cR += '#'+_id+' .android-statusbar-inner { font-size: '+(item.height/2)+'px; background-color: '+prx.utils.getColor(item.backgroundColor)+'; color: '+prx.utils.getColor(item.foregroundColor)+'; }';
		cR += '#'+_id+' .android-statusbar-signal-line.android-statusbar-signal-line-active { background-color: '+prx.utils.getColor(item.foregroundColor)+'; }';
		cR += '#'+_id+' .android-statusbar-battery-life-icon { background-color: '+prx.utils.getColor(item.foregroundColor)+'; border-color: '+prx.utils.getColor(item.foregroundColor)+'; width: '+item.height+'px; }';
		cR += '#'+_id+' .android-statusbar-battery-life-icon-battery-pole-inner { background-color: '+prx.utils.getColor(item.foregroundColor)+'; }';
		cR += '</style>';

		cR += '<div class="android-statusbar-inner liveUpdate-backgroundColor liveUpdate-foregroundColor-color">';
		cR += '<div class="android-statusbar-signal">';
		cR += '<div class="android-statusbar-signal-line android-statusbar-signal-line1 android-statusbar-signal-line-active liveUpdate-foregroundColor-background-color"></div>';
		cR += '<div class="android-statusbar-signal-line android-statusbar-signal-line2 android-statusbar-signal-line-active liveUpdate-foregroundColor-background-color"></div>';
		cR += '<div class="android-statusbar-signal-line android-statusbar-signal-line3 android-statusbar-signal-line-active liveUpdate-foregroundColor-background-color"></div>';
		cR += '<div class="android-statusbar-signal-line android-statusbar-signal-line4 android-statusbar-signal-line-active liveUpdate-foregroundColor-background-color"></div>';
		cR += '<div class="android-statusbar-signal-line android-statusbar-signal-line5"></div>';
		cR += '</div>';

		cR += '<div class="android-statusbar-battery-life-text">90%</div>';
		cR += '<div class="android-statusbar-battery-life">';
		cR += '<div class="android-statusbar-battery-life-icon liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color">';
		cR += '<div class="android-statusbar-battery-life-icon-battery-pole">';
		cR += '<div class="android-statusbar-battery-life-icon-battery-pole-inner liveUpdate-foregroundColor-background-color"></div>';
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		cR += '<div class="android-statusbar-time">'+("0" + now.getHours()).substr(-2,2)+':'+("0" + now.getMinutes()).substr(-2,2)+'</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		$('#'+_id)
			.find('.android-statusbar-inner').css('font-size', (item.height/2)+'px')
			.end()
			.find('.android-statusbar-battery-life-icon').css('width', item.height + 'px')
	}
	,propertyGroups: [
  		{
  		    caption: 'Style',
  		    properties: [
  		        [
  					prx.commonproperties.backgroundColor,
  					{
  						caption: 'Foreground',
  						name: 'foregroundColor',
  						proptype: 'foreground-color',
  						type: 'colorpicker',
  						value: function(item,name) { return item.foregroundColor; },
  						//help: 'Will always revert to white in native app mode',
  						liveUpdate: 'color,border-color,background-color',
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
prx.types.android_navigationbar = {
	name: "android_navigationbar"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-android-navigationbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';

		cR += '<style>';
		cR += '#'+_id+' .android-navigationbar-inner { background-color: '+prx.utils.getColor(item.backgroundColor)+'; }';
		cR += '</style>';

		cR += '<div class="android-navigationbar-inner liveUpdate-backgroundColor">';
		cR += '<div class="android-navigationbar-button" style="background-image: url('+prx.componentsHelper.getAssetUrl(item.icon1)+')"></div>';
		cR += '<div class="android-navigationbar-button" style="background-image: url('+prx.componentsHelper.getAssetUrl(item.icon2)+')"></div>';
		cR += '<div class="android-navigationbar-button" style="background-image: url('+prx.componentsHelper.getAssetUrl(item.icon3)+')"></div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,propertyGroups: [
		{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.backgroundColor
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


/************************************* COMPONENTS (OBJECTS) *************************************/
/***** TOOLBAR COMPONENTS *****/
prx.components.android_actionbar = {
	name: 'android_actionbar'
	,type: 'android_actionbar'
	,lib: _library
	,caption: 'Actionbar'
	,icon: '-400px -400px'
	,helper: prx.url.devices+_path + 'actionbar/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'dddddd'
	,borderColor: 'b1b1b1'
	,borderWidth: 2*prx.componentsHelper.getScale(_library)
	,actionOverflow: true
	,actionOverflowColor: '999999'
	,actionbarActionOverflowActions: []
	,upCaret: false
	,actionbarUpCaretActions: []
	,upCaretIcon: { fileId: '3503b8461203597c38b16ccb6c03e2c2.png', folderId: 'f1333968402101', url: 'f1333968402101/3503b8461203597c38b16ccb6c03e2c2.png', assetType: 'gallery', name: ' 1-navigation-previous-item.png' }
	,upCaretIconSize: 3
	,overlay: false
}

prx.components.android_actionbar_contextual = {
	name: 'android_actionbar_contextual'
	,type: 'android_actionbar_contextual'
	,lib: _library
	,caption: 'Contextual Actionbar'
	,icon: '-480px -400px'
	,helper: prx.url.devices+_path + 'contextual_actionbar/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'ffffff'
	,borderColor: '33b5e5'
	,borderWidth: 2*prx.componentsHelper.getScale(_library)
	,actionOverflow: true
	,actionOverflowColor: 'adadad'
	,actionbarActionOverflowActions: []
	,text: 'Some items selected'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textProperties: []
	,textColor: '000000'
	,selectionIcon: { fileId: '9aeee79e2e0c84d4ed7afd5600c3f3d6.png', folderId: 'f1333968402101', url: 'f1333968402101/9aeee79e2e0c84d4ed7afd5600c3f3d6.png', assetType: 'gallery', name: ' 1-navigation-accept.png' }
	,selectionIconSize: 3
	,overlay: false
}

prx.components.android_fixedtabbar = {
	name: 'android_fixedtabbar'
	,type: 'android_fixedtabbar'
	,lib: _library
	,caption: 'Fixed tabbar'
	,icon: '-720px -400px'
	,helper: prx.url.devices+_path + 'fixedtabbar/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'E0E0E0'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor: '3d3d3d'
	,textProperties: ['bold']
	,separatorColor: 'cbcbcb'
	,activeTabColor: '33b5e5'
	,activeBorderWidth: 4*prx.componentsHelper.getScale(_library)
	,selected: 0
	,tabs: [
       {
    	   caption: "TAB ONE"
		   ,actions: []
    	}
       ,{
    	   caption: "TAB TWO"
		   ,actions: []
		}
       ]
   	,overlay: false
}

prx.components.android_scrollabletabbar = {
	name: 'android_scrollabletabbar'
	,type: 'android_scrollabletabbar'
	,lib: _library
	,caption: 'Scrollable tabbar'
	,icon: '-640px -400px'
	,helper: prx.url.devices+_path + 'scrollabletabbar/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'E0E0E0'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 18*prx.componentsHelper.getScale(_library)
	,textColor: '3d3d3d'
	,textProperties: ['']
	,tabs: "TAB ONE<br />TAB TWO<br />TAB THREE"
	,linkedContainer: -1
	,selected: 0
   	,overlay: false
}

prx.components.android_spinner = {
	name: 'android_spinner'
	,type: 'android_spinner'
	,lib: _library
	,caption: 'Spinner'
	,icon: '-560px -480px'
	,helper: prx.url.devices+ _path + 'spinner/helper.png'
	,width: 120*prx.componentsHelper.getScale(_library)
	,height: 35*prx.componentsHelper.getScale(_library)
	,resizable : true
	,text: 'Spinner'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 22*prx.componentsHelper.getScale(_library)
	,textColor:  '666666'
	,textProperties: []
	,togglerSize: 14*prx.componentsHelper.getScale(_library)
	,togglerColor: '7f7f7f'
	,bottomBorder: true
	,actions: []
}


prx.components.android_dropdown = {
	name: 'android_dropdown'
	,type: 'android_dropdown'
	,lib: _library
	,caption: 'Dropdown'
	,icon: '-640px -480px'
	,helper: prx.url.devices+ _path + 'dropdown/helper.png'
	,width: 120*prx.componentsHelper.getScale(_library)
	,height: 96*prx.componentsHelper.getScale(_library)
	,resizable : true
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 18*prx.componentsHelper.getScale(_library)
	,textColor:  '666666'
	,textProperties: []
	,dividerThickness: 1*prx.componentsHelper.getScale(_library)
	,dividerColor: 'd9d9d9'
	,enableShadow: true
	,shadowColor: 'CCCCCC'
	,shadowSpread: 5*prx.componentsHelper.getScale(_library)
	,backgroundColor: 'f5f5f5'
	,activeTextColor: '222222'
	,activeBackgroundColor: '59c1e8'
	,iconSize: 3
	,iconpos: ''
	,options: [
       {
    	   text: "Label 1"
    	   ,icon: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
		   ,actions: []
    	}
       ,{
    	   text: "Label 2"
		   ,icon: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
		   ,actions: []
		}
       ]
   ,dynamicSizeExpand: 'v'
}
/***** BUTTON COMPONENTS *****/

prx.components.android_button = {
	name: 'android_button'
	,type: 'android_button'
	,lib: _library
	,caption: 'Basic Button'
	,icon: '0 -480px'
	,helper: prx.url.devices+ _path + 'basicbutton/helper.png'
	,width: 180*prx.componentsHelper.getScale(_library)
	,height: 40*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'cecece'
	,text: 'Button'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 18*prx.componentsHelper.getScale(_library)
	,textColor:  '333333'
	,textProperties: []
	,shadowColor: '999999'
	,iconpos: ''
	,buttonicon: {
		fileId: '',
		folderId: '',
		url: '',
		assetType: '',
		name: ''
	}
	,iconSize: 3
	,actions: []
}

prx.components.android_borderlessbutton = {
	name: 'android_borderlessbutton'
	,type: 'android_borderlessbutton'
	,lib: _library
	,caption: 'Borderless Button'
	,icon: '-80px -480px'
	,helper: prx.url.devices+ _path + 'borderlessbutton/helper.png'
	,width: 180*prx.componentsHelper.getScale(_library)
	,height: 40*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'transparent'
	,text: 'Button'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 18*prx.componentsHelper.getScale(_library)
	,textColor:  '333333'
	,textProperties: []
	,shadowColor: 'transparent'
	,iconpos: ''
	,buttonicon: {
		fileId: '',
		folderId: '',
		url: '',
		assetType: '',
		name: ''
	}
	,iconSize: 3
	,actions: []
}

prx.components.android_actionoverflow = {
		name: 'android_actionoverflow'
		,type: 'android_actionoverflow'
		,lib: _library
		,caption: 'Action Overflow'
		,icon: '-890px -960px'
		,helper: prx.url.devices+_path + 'actionoverflow/helper.png'
		,width: 30*prx.componentsHelper.getScale(_library)
		,height: 20*prx.componentsHelper.getScale(_library)
		,resizable : true
		,borderRadius: 50*prx.componentsHelper.getScale(_library)
		,actionOverflowColor: '999999'
		,actionbarActionOverflowActions: []
	}


/***** FORM COMPONENTS *****/
prx.components.android_label = {
	name: 'android_label'
	,type: 'android_label'
	,lib: _library
	,caption: 'Label'
	,icon: '-160px -480px'
	,helper: prx.url.devices+ _path + 'label/helper.png'
	,width: 440*prx.componentsHelper.getScale(_library)
	,height: 20*prx.componentsHelper.getScale(_library)
	,resizable : true
	,text: 'LABEL'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  '999999'
	,textProperties: []
	,bottomBorder: false
	,bottomBorderWidth: 2*prx.componentsHelper.getScale(_library)
	,bottomBorderColor: 'bababa'
}

prx.components.android_textfield = {
	name: 'android_textfield'
	,type: 'android_textfield'
	,lib: _library
	,caption: 'Text Field'
	,icon: '-240px -480px'
	,helper: prx.url.devices+ _path + 'textfield/helper.png'
	,width: 440*prx.componentsHelper.getScale(_library)
	,height: 30*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  '7A7A7A'
	,placeholderColor: '999999'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'a9a9a9'
	,focusedBorderColor: '0099cc'
	,backgroundColor: 'none'
	,textAlign: 'left'
}

prx.components.android_textarea = {
		name: 'android_textarea'
		,type: 'android_textarea'
		,lib: _library
		,caption: 'Textarea'
		,icon: '-890px -400px'
		,helper: prx.url.devices+ _path + 'textarea/helper.png'
		,width: 440*prx.componentsHelper.getScale(_library)
		,height: 100*prx.componentsHelper.getScale(_library)
		,value: ''
		,placeholder: 'Placeholder'
		,inputtype: 'text'
		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 14*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,placeholderColor: '999999'
		,borderWidth: 1*prx.componentsHelper.getScale(_library)
		,borderColor: 'a9a9a9'
		,focusedBorderColor: '0099cc'
		,backgroundColor: 'none'
		,textAlign: 'left'
	}

prx.components.android_passwordfield = {
	name: 'android_passwordfield'
	,type: 'android_textfield'
	,lib: _library
	,caption: 'Password Field'
	,icon: '-320px -480px'
	,helper: prx.url.devices+ _path + 'passwordfield/helper.png'
	,width: 440*prx.componentsHelper.getScale(_library)
	,height: 30*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'password'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  '7A7A7A'
	,placeholderColor: '999999'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'a9a9a9'
	,focusedBorderColor: '0099cc'
	,backgroundColor: 'none'
	,textAlign: 'left'
}

prx.components.android_checkbox = {
	name: 'android_checkbox'
	,type: 'android_checkbox'
	,lib: _library
	,caption: 'Checkbox'
	,icon: '-480px -480px'
	,helper: prx.url.devices+ _path + 'checkbox/helper.png'
	,width: 16*prx.componentsHelper.getScale(_library)
	,height: 16*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'none'
	,borderColor: '999999'
	,activeColor: '0099cc'
	,active: true
	,checkboxActionsOnActive: []
	,checkboxActionsOnDeactive: []
}

prx.components.android_radiobutton = {
	name: 'android_radiobutton'
	,type: 'android_radiobutton'
	,lib: _library
	,caption: 'Radio Button'
	,icon: '-400px -480px'
	,helper: prx.url.devices+ _path + 'radiobutton/helper.png'
	,width: 16*prx.componentsHelper.getScale(_library)
	,height: 16*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'none'
	,borderColor: '999999'
	,activeColor: '0099cc'
	,active: true
	,actAsCheckbox: true
	,checkboxActionsOnActive: []
   	,checkboxActionsOnDeactive: []
}

prx.components.android_onoffswitch = {
	name: 'android_onoffswitch'
	,type: 'android_onoffswitch'
	,lib: _library
	,caption: 'On/Off switch'
	,icon: '-720px -480px'
	,helper: prx.url.devices+_path + 'onoffswitch/helper.png'
	,width: 180*prx.componentsHelper.getScale(_library)
	,height: 44*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'C2C2C2'
	,textSize: 21*prx.componentsHelper.getScale(_library)
	,textProperties: []
    ,textFont: 'Roboto Regular, sans-serif'
	,activeLabelText: 'ON'
	,activeLabelColor: '27A1CA'
	,activeLabelTextColor: 'FFFFFF'
	,inactiveLabelText: 'OFF'
	,inactiveLabelColor: 'A1A1A1'
	,inactiveLabelTextColor: 'FFFFFF'
	,kitkat: false
	,active: true
	,flipswitchActionsOnActive: []
	,flipswitchActionsOnDeactive: []
}

prx.components.android_onoffswitch_kitkat = {
	name: 'android_onoffswitch_kitkat'
	,type: 'android_onoffswitch'
	,lib: _library
	,caption: 'KitKat On/Off switch'
	,icon: '-890px -640px'
	,helper: prx.url.devices+_path + 'onoffswitchkitkat/helper.png'
	,width: 180*prx.componentsHelper.getScale(_library)
	,height: 44*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'C2C2C2'
	,textSize: 21*prx.componentsHelper.getScale(_library)
	,textProperties: []
    ,textFont: 'Roboto Regular, sans-serif'
	,activeLabelText: 'ON'
	,activeLabelColor: '27A1CA'
	,activeLabelTextColor: 'FFFFFF'
	,inactiveLabelText: 'OFF'
	,inactiveLabelColor: 'A1A1A1'
	,inactiveLabelTextColor: 'FFFFFF'
	,kitkat: true
	,active: true
	,flipswitchActionsOnActive: []
	,flipswitchActionsOnDeactive: []
}

prx.components.android_slider = {
	name: 'android_slider'
	,type: 'android_slider'
	,lib: _library
	,caption: 'Slider'
	,icon: '-810px -160px'
	,helper: prx.url.devices+_path + 'slider/helper.png'
	,width: 440*prx.componentsHelper.getScale(_library)
	,height: 30*prx.componentsHelper.getScale(_library)
	,resizable : true
	,barThickness: 2*prx.componentsHelper.getScale(_library)
	,barColor: 'AAAAAA'
	,fillBarColor: '27A1CA'
	,sliderPosition: 70
	,properties: "v,l,o,hpos,vpos,w,h"
}

/***** LIST COMPONENTS *****/
prx.components.android_listdivider = {
	name: 'android_listdivider'
	,type: 'android_listdivider'
	,lib: _library
	,caption: 'List divider'
	,icon: '0 -560px'
	,helper: prx.url.devices+ _path + 'listdivider/helper.png'
	,width: 440*prx.componentsHelper.getScale(_library)
	,height: 20*prx.componentsHelper.getScale(_library)
	,resizable : true
	,text: 'LIST DIVIDER'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor:  '999999'
	,textProperties: ['bold']
	,dividerThickness: 1*prx.componentsHelper.getScale(_library)
	,dividerColor: 'bababa'

}

prx.components.android_listcomplex = {
		name: 'android_listcomplex'
		,type: 'android_listcomplex'
		,lib: _library
		,caption: 'Complex List'
		,icon: '-890px -800px'
		,helper: prx.url.devices+ _path + 'listcomplex/helper.png'
		,width: 400*prx.componentsHelper.getScale(_library)
		,height: 100*prx.componentsHelper.getScale(_library)
		,resizable : true
		,dividerThickness: 1*prx.componentsHelper.getScale(_library)
		,dividerColor: 'd9d9d9'
		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textAlign: 'left'
		,textProperties: []
		,subSize: 14*prx.componentsHelper.getScale(_library)
		,subFont: 'Roboto Regular, sans-serif'
		,subColor: '999999'
		,subProperties: []
		,backgroundColor: 'none'
		,activeTextColor: '7A7A7A'
		,activeBackgroundColor: 'none'
		,activeSubColor: '999999'
		,iconpos: 'right'
		,iconSize: 2
		,listitems: [
             {
            	 text: "Label 1"
        		 ,itemtype: 'basic'
    			 ,subtitle: ''
				 ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
             	 ,buttonicon: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
             	 ,actions: []
             	 ,checked: false
          	}
            ,{
            	text: "Label 2"
        		,itemtype: 'basic'
    			,subtitle: ''
				,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
            	,buttonicon: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
            	,actions: []
        		,checked: false
      		}
         ]
	    ,dynamicSizeExpand: 'v'
}

prx.components.android_listbasic = {
		name: 'android_listbasic'
		,type: 'android_listbasic'
		,lib: _library
		,caption: 'Basic List'
		,icon: '-810px -640px'
		,helper: prx.url.devices+ _path + 'listbasic/helper.png'
		,width: 400*prx.componentsHelper.getScale(_library)
		,height: 100*prx.componentsHelper.getScale(_library)
		,resizable : true
		,dividerThickness: 1*prx.componentsHelper.getScale(_library)
		,dividerColor: 'd9d9d9'
		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textAlign: 'left'
		,textProperties: []
		,subSize: 14*prx.componentsHelper.getScale(_library)
		,subFont: 'Roboto Regular, sans-serif'
		,subColor: '999999'
		,subProperties: []
		,backgroundColor: 'none'
		,activeTextColor: '7A7A7A'
		,activeBackgroundColor: 'none'
		,activeSubColor: '999999'
		,iconpos: 'right'
		,iconSize: 2
		,listitems: [
             {
            	 text: "Label 1"
        		 ,itemtype: 'basic'
    			 ,subtitle: ''
				 ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
             	 ,buttonicon: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
             	 ,actions: []
         		 ,checked: false
          	}
            ,{
            	text: "Label 2"
        		,itemtype: 'basic'
    			,subtitle: ''
				,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
            	,buttonicon: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
            	,actions: []
        		,checked: false
      		}
         ]
	    ,dynamicSizeExpand: 'v'
}

prx.components.android_listwithicon = {
		name: 'android_listwithicon'
		,type: 'android_listwithicon'
		,lib: _library
		,caption: 'List with Icon'
		,icon: '-810px -720px'
		,helper: prx.url.devices+ _path + 'listwithicon/helper.png'
		,width: 400*prx.componentsHelper.getScale(_library)
		,height: 100*prx.componentsHelper.getScale(_library)
		,resizable : true
		,dividerThickness: 1*prx.componentsHelper.getScale(_library)
		,dividerColor: 'd9d9d9'
		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textAlign: 'left'
		,textProperties: []
		,subSize: 14*prx.componentsHelper.getScale(_library)
		,subFont: 'Roboto Regular, sans-serif'
		,subColor: '999999'
		,subProperties: []
		,backgroundColor: 'none'
		,activeTextColor: '7A7A7A'
		,activeBackgroundColor: 'none'
		,activeSubColor: '999999'
		,iconpos: 'right'
		,iconSize: 2
		,listitems: [
             {
            	 text: "Label 1"
        		 ,itemtype: 'withIcon'
    			 ,subtitle: ''
				 ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
             	 ,buttonicon: {"fileId":"693bf32e7424f6bf747696ddab19cdf5.svg","name":"speech-1.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/693bf32e7424f6bf747696ddab19cdf5.svg","folderId":"f1352971179296"}
             	 ,actions: []
         		 ,checked: false
          	}
            ,{
            	text: "Label 2"
        		,itemtype: 'withIcon'
    			,subtitle: ''
				,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
            	,buttonicon: {"fileId":"eb72ee7a19eba5a21595c680452907fd.svg","name":"phone-1.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/eb72ee7a19eba5a21595c680452907fd.svg","folderId":"f1352971179296"}
            	,actions: []
        		,checked: false
      		}
         ]
	    ,dynamicSizeExpand: 'v'
}

prx.components.android_listwithiconandsubtitle = {
		name: 'android_listwithiconandsubtitle'
		,type: 'android_listwithiconandsubtitle'
		,lib: _library
		,caption: 'List with Icon and Subtitle'
		,icon: '-810px -880px'
		,helper: prx.url.devices+ _path + 'listwithiconandsubtitle/helper.png'
		,width: 400*prx.componentsHelper.getScale(_library)
		,height: 100*prx.componentsHelper.getScale(_library)
		,resizable : true
		,dividerThickness: 1*prx.componentsHelper.getScale(_library)
		,dividerColor: 'd9d9d9'
		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textAlign: 'left'
		,textProperties: []
		,subSize: 14*prx.componentsHelper.getScale(_library)
		,subFont: 'Roboto Regular, sans-serif'
		,subColor: '999999'
		,subProperties: []
		,backgroundColor: 'none'
		,activeTextColor: '7A7A7A'
		,activeBackgroundColor: 'none'
		,activeSubColor: '999999'
		,iconpos: 'right'
		,iconSize: 2
		,listitems: [
             {
            	 text: "Label 1"
        		 ,itemtype: 'withIcon'
    			 ,subtitle: 'Subtitle'
				 ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
             	 ,buttonicon: {"fileId":"693bf32e7424f6bf747696ddab19cdf5.svg","name":"speech-1.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/693bf32e7424f6bf747696ddab19cdf5.svg","folderId":"f1352971179296"}
             	 ,actions: []
             	 ,checked: false
          	}
            ,{
            	text: "Label 2"
        		,itemtype: 'withIcon'
    			,subtitle: 'Subtitle'
				,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
            	,buttonicon: {"fileId":"eb72ee7a19eba5a21595c680452907fd.svg","name":"phone-1.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/eb72ee7a19eba5a21595c680452907fd.svg","folderId":"f1352971179296"}
            	,actions: []
        		,checked: false
      		}
         ]
	    ,dynamicSizeExpand: 'v'
}

prx.components.android_listwithsubtitle = {
		name: 'android_listwithsubtitle'
		,type: 'android_listwithsubtitle'
		,lib: _library
		,caption: 'List with Subtitle'
		,icon: '-810px -800px'
		,helper: prx.url.devices+ _path + 'listwithsubtitle/helper.png'
		,width: 400*prx.componentsHelper.getScale(_library)
		,height: 100*prx.componentsHelper.getScale(_library)
		,resizable : true
		,dividerThickness: 1*prx.componentsHelper.getScale(_library)
		,dividerColor: 'd9d9d9'
		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textAlign: 'left'
		,textProperties: []
		,subSize: 14*prx.componentsHelper.getScale(_library)
		,subFont: 'Roboto Regular, sans-serif'
		,subColor: '999999'
		,subProperties: []
		,backgroundColor: 'none'
		,activeTextColor: '7A7A7A'
		,activeBackgroundColor: 'none'
		,activeSubColor: '999999'
		,iconpos: 'right'
		,iconSize: 2
		,listitems: [
             {
            	 text: "Label 1"
        		 ,itemtype: 'withSubtitle'
    			 ,subtitle: 'Subtitle'
    			 ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
             	 ,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
             	 ,actions: []
             	 ,checked: false
          	}
            ,{
            	text: "Label 2"
        		,itemtype: 'withSubtitle'
    			,subtitle: 'Subtitle'
    			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
            	,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
            	,actions: []
        		,checked: false
      		}
         ]
	    ,dynamicSizeExpand: 'v'
}

prx.components.android_listwiththumbnail = {
		name: 'android_listwiththumbnail'
		,type: 'android_listwiththumbnail'
		,lib: _library
		,caption: 'List with Thumbnail'
		,icon: '-890px -480px'
		,helper: prx.url.devices+ _path + 'listwiththumbnail/helper.png'
		,width: 400*prx.componentsHelper.getScale(_library)
		,height: 100*prx.componentsHelper.getScale(_library)
		,resizable : true
		,dividerThickness: 1*prx.componentsHelper.getScale(_library)
		,dividerColor: 'd9d9d9'
		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textAlign: 'left'
		,textProperties: []
		,subSize: 14*prx.componentsHelper.getScale(_library)
		,subFont: 'Roboto Regular, sans-serif'
		,subColor: '999999'
		,subProperties: []
		,backgroundColor: 'none'
		,activeTextColor: '7A7A7A'
		,activeBackgroundColor: 'none'
		,activeSubColor: '999999'
		,iconpos: 'right'
		,iconSize: 2
		,listitems: [
             {
            	 text: "Label 1"
        		 ,itemtype: 'withThumbnail'
    			 ,subtitle: ''
    			 ,thumbnail: {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"}
             	 ,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
             	 ,actions: []
         		 ,checked: false
          	}
            ,{
            	text: "Label 2"
        		,itemtype: 'withThumbnail'
    			,subtitle: ''
    			,thumbnail: {"fileId":"fb6f0d79ca71fc442563cdb95fa60eb6.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png","bucketsource":"main","name":" avatar_male.png"}
            	,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
            	,actions: []
        		,checked: false
      		}
         ]
	    ,dynamicSizeExpand: 'v'
}

prx.components.android_listwiththumbnailandsubtitle = {
		name: 'android_listwiththumbnailandsubtitle'
		,type: 'android_listwiththumbnailandsubtitle'
		,lib: _library
		,caption: 'List with Thumbnail and Subtitle'
		,icon: '-890px -560px'
		,helper: prx.url.devices+ _path + 'listwiththumbnailandsubtitle/helper.png'
		,width: 400*prx.componentsHelper.getScale(_library)
		,height: 100*prx.componentsHelper.getScale(_library)
		,resizable : true
		,dividerThickness: 1*prx.componentsHelper.getScale(_library)
		,dividerColor: 'd9d9d9'
		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textAlign: 'left'
		,textProperties: []
		,subSize: 14*prx.componentsHelper.getScale(_library)
		,subFont: 'Roboto Regular, sans-serif'
		,subColor: '999999'
		,subProperties: []
		,backgroundColor: 'none'
		,activeTextColor: '7A7A7A'
		,activeBackgroundColor: 'none'
		,activeSubColor: '999999'
		,iconpos: 'right'
		,iconSize: 2
		,listitems: [
             {
            	 text: "Label 1"
        		 ,itemtype: 'withThumbnail'
    			 ,subtitle: 'Subtitle'
    			 ,thumbnail: {"fileId":"8ef69ccff0f6e97618dde27ce903cb15.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png","bucketsource":"main","name":" avatar_female.png"}
             	 ,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
             	 ,actions: []
         		 ,checked: false
          	}
            ,{
            	text: "Label 2"
        		,itemtype: 'withThumbnail'
    			,subtitle: 'Subtitle'
				,thumbnail: {"fileId":"fb6f0d79ca71fc442563cdb95fa60eb6.png","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png","bucketsource":"main","name":" avatar_male.png"}
            	,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
            	,actions: []
        		,checked: false
      		}
         ]
	    ,dynamicSizeExpand: 'v'
}

prx.components.android_listradio = {
	name: 'android_listradio'
	,type: 'android_listradio'
	,lib: _library
	,caption: 'Radio List'
	,icon: '-810px -960px'
	,helper: prx.url.devices+_path + 'listradio/helper.png'
	,width: 400*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,resizable : true
	,dividerThickness: 1*prx.componentsHelper.getScale(_library)
	,dividerColor: 'd9d9d9'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 18*prx.componentsHelper.getScale(_library)
	,textColor:  '7A7A7A'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 14*prx.componentsHelper.getScale(_library)
	,subFont: 'Roboto Regular, sans-serif'
	,subColor: '999999'
	,subProperties: []
	,backgroundColor: 'none'
	,activeTextColor: '7A7A7A'
	,activeBackgroundColor: 'none'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 2
	,listitems: [
       {
			text: "Label 1"
			,itemtype: 'withRadio'
			,subtitle: ''
	  		,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
  			,buttonicon: {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"}
  			,actions: []
			,checked: true
       },
       {
			text: "Label 2"
			,itemtype: 'withRadio'
			,subtitle: ''
	  		,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
  			,buttonicon: {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"}
  			,actions: []
			,checked: false
       }
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.android_listcheckbox = {
	name: 'android_listcheckbox'
	,type: 'android_listcheckbox'
	,lib: _library
	,caption: 'Checkbox List'
	,icon: '-890px -880px'
	,helper: prx.url.devices+_path + 'listcheckbox/helper.png'
	,width: 400*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,resizable : true
	,dividerThickness: 1*prx.componentsHelper.getScale(_library)
	,dividerColor: 'd9d9d9'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 18*prx.componentsHelper.getScale(_library)
	,textColor:  '7A7A7A'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 14*prx.componentsHelper.getScale(_library)
	,subFont: 'Roboto Regular, sans-serif'
	,subColor: '999999'
	,subProperties: []
	,backgroundColor: 'none'
	,activeTextColor: '7A7A7A'
	,activeBackgroundColor: 'none'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 2
	,listitems: [
       {
    	   	text: "Label 1"
   			,itemtype: 'withCheckbox'
   			,subtitle: ''
   	  		,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
  			,buttonicon: {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"}
  			,actions: []
   			,checked: true

       },
       {
   	   	text: "Label 2"
  			,itemtype: 'withCheckbox'
  			,subtitle: ''
  			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
  			,buttonicon: {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"}
  			,actions: []
  			,checked: true

      }
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.android_toast = {
	name: 'android_toast'
	,type: 'android_toast'
	,lib: _library
	,caption: 'Toast'
	,icon: '-160px -560px'
	,helper: prx.url.devices+ _path + 'toast/helper.png'
	,width: 200*prx.componentsHelper.getScale(_library)
	,height: 30*prx.componentsHelper.getScale(_library)
	,resizable : true
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 12*prx.componentsHelper.getScale(_library)
	,textColor:  'ffffff'
	,textProperties: ['bold']
	,text: 'This is a toast message'
	,backgroundColor: '222222'
	,enableShadow: true
	,shadowColor: '333333'
	,shadowSpread: 5*prx.componentsHelper.getScale(_library)
}


prx.components.android_notification_item = {
	name: 'android_notification_item'
	,type: 'android_notification_item'
	,lib: _library
	,caption: 'Notification item'
	,icon: '-810px -240px'
	,helper: prx.url.devices+ _path + 'notification_item/helper.png'
	,width: "full"
	,height:  60*prx.componentsHelper.getScale(_library)
	,resizable : true

	,titleFont: 'Roboto Regular, sans-serif'
	,titleSize: 18*prx.componentsHelper.getScale(_library)
	,titleColor:  'ffffff'
	,titleProperties: []
	,title: 'Notification title'
	,subtitleFont: 'Roboto Regular, sans-serif'
	,subtitleSize: 14*prx.componentsHelper.getScale(_library)
	,subtitleColor:  'dddddd'
	,subtitleProperties: []
	,subtitle: 'You have a new message'
	,timeFont: 'Roboto Regular, sans-serif'
	,timeSize: 14*prx.componentsHelper.getScale(_library)
	,timeColor:  'dddddd'
	,timeProperties: []
	,time: '10:30 AM'
	,backgroundColor: '000000'

	,thumbnail: {"fileId":"0169fbe3ff05191054bf13a07fa2ba16.svg","name":"android.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/0169fbe3ff05191054bf13a07fa2ba16.svg","folderId":"f1352971179296","targetSrc":"generated/0169fbe3ff05191054bf13a07fa2ba16_ffffff.svg","color":"ffffff"}
	,thumbnailSize: "4"
	,thumbnailBgColor: "ccc"
	,imgSrc: {"fileId":"8ed737a2b80a3f4c51dd7ee2403078eb.svg","name":"speech-alt-1.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/8ed737a2b80a3f4c51dd7ee2403078eb.svg","folderId":"f1352971179296","targetSrc":"generated/8ed737a2b80a3f4c51dd7ee2403078eb_ffffff.svg","color":"ffffff"}
	,iconSize: "3"
}

prx.components.android_crouton = {
	name: 'android_crouton'
	,type: 'android_crouton'
	,lib: _library
	,caption: 'Crouton'
	,icon: '-890px 0px'
	,helper: prx.url.devices+ _path + 'crouton/helper.png'
	,width: "full"
	,height: 40*prx.componentsHelper.getScale(_library)
	,resizable : true

	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 18*prx.componentsHelper.getScale(_library)
	,textColor:  'ffffff'
	,textProperties: []
	,text: 'This is a crouton message'
	,backgroundColor: 'cc0000'
	,separatorColor: 'ffffff'
	,closeIcon: {"fileId":"ca104a30a743e00e890a864e19c7738d.svg","name":"delete.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/ca104a30a743e00e890a864e19c7738d.svg","folderId":"f1352449307873","targetSrc":"generated/ca104a30a743e00e890a864e19c7738d_ffffff.svg","color":"ffffff"}
}

prx.components.android_card_small = {
		name: 'android_card_small'
		,type: 'android_card_small'
		,lib: _library
		,caption: 'Small Card'
		,icon: '-810px -560px'
		,helper: prx.url.devices+ _path + 'small_card/helper.png'
		,width: 200*prx.componentsHelper.getScale(_library)
		,height: 40*prx.componentsHelper.getScale(_library)
		,resizable : true

		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textProperties: []
		,text: 'Small card'
		,backgroundColor: 'ffffff'
		,shadowColor: 'dddddd'
		,thumbnail: {"fileId":"0169fbe3ff05191054bf13a07fa2ba16.svg","name":"android.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/0169fbe3ff05191054bf13a07fa2ba16.svg","folderId":"f1352971179296","targetSrc":"generated/0169fbe3ff05191054bf13a07fa2ba16_ffffff.svg","color":"ffffff"}
		,thumbnailSize: "4"
		,thumbnailBgColor: "E2E2E2"
}

prx.components.android_card_medium = {
		name: 'android_card_medium'
		,type: 'android_card_medium'
		,lib: _library
		,caption: 'Medium Card'
		,icon: '-810px -320px'
		,helper: prx.url.devices+ _path + 'medium_card/helper.png'
		,width: 150*prx.componentsHelper.getScale(_library)
		,height: 200*prx.componentsHelper.getScale(_library)
		,resizable : true

		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textProperties: []
		,text: 'Medium card'
		,backgroundColor: 'ffffff'
		,shadowColor: 'dddddd'
		,thumbnail: {"fileId":"01eb56561388a5a9015bcab43ddeeab5.svg","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/01eb56561388a5a9015bcab43ddeeab5.svg","bucketsource":"main","name":" image_placeholder.svg"}
		,thumbnailSize: "4"
		,thumbnailBgColor: "E2E2E2"
		,actionOverflow: true
		,actionOverflowColor: '999999'
}

prx.components.android_card_big = {
		name: 'android_card_big'
		,type: 'android_card_big'
		,lib: _library
		,caption: 'Big Card'
		,icon: '-890px -320px'
		,helper: prx.url.devices+ _path + 'big_card/helper.png'
		,width: 350*prx.componentsHelper.getScale(_library)
		,height: 150*prx.componentsHelper.getScale(_library)
		,resizable : true

		,titleFont: 'Roboto Regular, sans-serif'
		,titleSize: 18*prx.componentsHelper.getScale(_library)
		,titleColor:  '7A7A7A'
		,titleProperties: []
		,title: 'Big card Title'
		,subtitleFont: 'Roboto Regular, sans-serif'
		,subtitleSize: 14*prx.componentsHelper.getScale(_library)
		,subtitleColor:  'dddddd'
		,subtitleProperties: []
		,subtitle: 'Big card Subtitle'
		,backgroundColor: 'ffffff'
		,shadowColor: 'dddddd'
		,thumbnail: {"fileId":"01eb56561388a5a9015bcab43ddeeab5.svg","folderId":"f1353077251107","assetType":"gallery","url":"f1353077251107/01eb56561388a5a9015bcab43ddeeab5.svg","bucketsource":"main","name":" image_placeholder.svg"}
		,thumbnailSize: "4"
		,thumbnailBgColor: "E2E2E2"
		,actionOverflow: true
		,actionOverflowColor: '999999'
}

prx.components.android_alert_dialog = {
		name: 'android_alert_dialog'
		,type: 'android_alert_dialog'
		,lib: _library
		,caption: 'Alert Dialog'
		,icon: '-890px -240px'
		,helper: prx.url.devices+ _path + 'alert_dialog/helper.png'
		,width: 300*prx.componentsHelper.getScale(_library)
		,height: 110*prx.componentsHelper.getScale(_library)
		,resizable : true

		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textProperties: []
		,text: 'Delete message?'
		,backgroundColor: 'ffffff'
		,borderColor: 'a9a9a9'
		,borderWidth: 1*prx.componentsHelper.getScale(_library)
		,textAlign: 'left'
		,buttons: [{
			actions: [],
			text: 'Cancel',
			textColor: '7A7A7A',
			textProperties: []
		},{
			actions: [],
			text: 'Delete',
			textColor: '7A7A7A',
			textProperties: []
		}]
}

prx.components.android_progressbasic = {
		name: 'android_progressbasic'
		,type: 'android_progressbasic'
		,lib: _library
		,caption: 'Determinate Progress Bar'
		,icon: '-890px -80px'
		,helper: prx.url.devices+ _path + 'progressbasic/helper.png'
		,width: "full"
		,height: 60*prx.componentsHelper.getScale(_library)
		,resizable : true

		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textProperties: []
		,text: 'Downloading...'
		,percentFont: 'Roboto Regular, sans-serif'
		,percentSize: 18*prx.componentsHelper.getScale(_library)
		,percentColor:  '7A7A7A'
		,percentProperties: []
		,barHeight: 3*prx.componentsHelper.getScale(_library)
		,backgroundColor: 'none'
		,bgBarBackgroundColor: '999999'
		,cubesColor: 'ffffff'
		,percentBarBackgroundColor: '27A1CA'
		,percentBarValue : "36"
		,iconSize: "2"
		,cancelIcon: {"fileId":"ca104a30a743e00e890a864e19c7738d.svg","name":"delete.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/ca104a30a743e00e890a864e19c7738d.svg","folderId":"f1352449307873","targetSrc":"generated/ca104a30a743e00e890a864e19c7738d_7a7a7a.svg","color":"7A7A7A"}
		,isDownloading: true
}

prx.components.android_progressestimating = {
		name: 'android_progressestimating'
		,type: 'android_progressestimating'
		,lib: _library
		,caption: 'Indeterminate Progress Bar'
		,icon: '-890px -160px'
		,helper: prx.url.devices+ _path + 'progressestimating/helper.png'
		,width: "full"
		,height: 60*prx.componentsHelper.getScale(_library)
		,resizable : true

		,textFont: 'Roboto Regular, sans-serif'
		,textSize: 18*prx.componentsHelper.getScale(_library)
		,textColor:  '7A7A7A'
		,textProperties: []
		,text: 'Estimating...'
		,barHeight: 3*prx.componentsHelper.getScale(_library)
		,backgroundColor: 'none'
		,bgBarBackgroundColor: '27A1CA'
		,cubesColor: 'ffffff'
		,iconSize: "2"
		,cancelIcon: {"fileId":"ca104a30a743e00e890a864e19c7738d.svg","name":"delete.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/ca104a30a743e00e890a864e19c7738d.svg","folderId":"f1352449307873","targetSrc":"generated/ca104a30a743e00e890a864e19c7738d_7a7a7a.svg","color":"7A7A7A"}
		,isDownloading: false
}

prx.components.android_statusbar = {
	name: 'android_statusbar'
	,type: 'android_statusbar'
	,lib: _library
	,caption: 'Statusbar'
	,icon: '-560px -1280px'
	,helper: prx.url.devices+_path+ 'statusbar/helper.png'
	,width: "full"
	,height: 30*prx.componentsHelper.getScale(_library)
	,resizable : true
	,overlay: false
	,backgroundColor: '000000'
	,foregroundColor: 'ffffff'
}

prx.components.android_navigationbar = {
	name: 'android_navigationbar'
	,type: 'android_navigationbar'
	,lib: _library
	,caption: 'Navigation Bar'
	,icon: '-640px -1280px'
	,helper: prx.url.devices+_path+ 'navigationbar/helper.png'
	,width: "full"
	,height: 55*prx.componentsHelper.getScale(_library)
	,resizable : true
	,overlay: false
	,backgroundColor: '000000'
	,icon1: {"fileId":"f62aedc955740902e4763fb37dbef2c7.svg","name":"android-navbar-back.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/f62aedc955740902e4763fb37dbef2c7.svg","folderId":"f1352449307873","targetSrc":"generated/f62aedc955740902e4763fb37dbef2c7_aaaaaa.svg","color":"AAAAAA"}
	,icon2: {"fileId":"aa38d28df6f7726351fcb80ea90550dc.svg","name":"android-navbar-home.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/aa38d28df6f7726351fcb80ea90550dc.svg","folderId":"f1352449307873","targetSrc":"generated/aa38d28df6f7726351fcb80ea90550dc_aaaaaa.svg","color":"AAAAAA"}
	,icon3: {"fileId":"0114277296a89969ff00ca95c131e302.svg","name":"android-navbar-system.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/0114277296a89969ff00ca95c131e302.svg","folderId":"f1352449307873","targetSrc":"generated/0114277296a89969ff00ca95c131e302_aaaaaa.svg","color":"AAAAAA"}
}
