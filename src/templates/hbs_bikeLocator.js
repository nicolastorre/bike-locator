this["templates"] = this["templates"] || {};

this["templates"]["bikelocator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <option value=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"search-box\" class=\"container\">\n    <div id=\"form-locator\" class=\"container well\">\n        <form>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-2\">\n                    <label for=\"search-location\" class=\"form-control-label\">Location</label>\n                    <input type=\"text\" id=\"search-location\" name=\"location\" class=\"form-control\" >\n                </div>\n                <div class=\"col-sm-2\">\n                    <label for=\"distance\" class=\"form-control-label\">Distance</label>\n                    <select class=\"form-control\" id=\"distance\" name=\"distance\">\n                        <option value=\"none\">None</option>\n                        <option value=\"5\">5 km</option>\n                        <option value=\"10\">10 km</option>\n                        <option value=\"15\">15 km</option>\n                    </select>\n                </div>\n                <div class=\"col-sm-2\">\n                    <label for=\"contract\" class=\"form-control-label\">City</label>\n                    <select class=\"form-control\" id=\"contract\" name=\"contract\">\n                        <option value=\"all\" selected=\"selected\">All</option>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.contracts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                    </select>\n                </div>\n                <button type=\"button\" id=\"search-button\" class=\"col-sm-2 btn btn-primary\">Search</button>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-2\">\n                    <label for=\"min-available-bike\" class=\"form-control-label\">Min available bike</label>\n                </div>\n                <div class=\"col-sm-2\">\n                    <div id=\"min-available-bike\" class=\"slider\"></div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-2\">\n                    <label for=\"min-free-stand\" class=\"form-control-label\">Min free stand</label>\n                </div>\n                <div class=\"col-sm-2\">\n                    <div id=\"min-free-stand\" class=\"slider\"></div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div id=\"list-velib\" class=\"col-sm-3\">\n        </div>\n        <div id=\"map-canvas\" class=\"col-sm-9\"></div>\n    </div>\n</div>";
},"useData":true});

this["templates"]["emptyresult"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"stations-list-panel\" class=\"panel panel-default stations-list-panel\">\n    <div class=\"panel-heading\">\n        <h3>0 bike stations</h3>\n    </div>\n    <div class=\"panel-body stations-list\">\n    </div>\n</div>";
},"useData":true});

this["templates"]["stationdetail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div id=\"detail-station\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Details<button type=\"button\" class=\"btn-close btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove\"></span></button></h3>\n    </div>\n    <div class=\"detail panel-body\">\n        <h4>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h4>\n        <address>\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.address : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.city : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.country : stack1), depth0))
    + "\n        </address>\n        <p>Bike stands: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.bike_stands : stack1), depth0))
    + "</p>\n        <p>Available bikes: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.available_bikes : stack1), depth0))
    + "</p>\n        <p>Available bike stands: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.available_bike_stands : stack1), depth0))
    + "</p>\n    </div>\n</div>";
},"useData":true});

this["templates"]["stationlist"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li data-station=\""
    + alias2(alias1((depth0 != null ? depth0.number : depth0), depth0))
    + "\" data-contract=\""
    + alias2(alias1((depth0 != null ? depth0.contract_name : depth0), depth0))
    + "\" class=\"station\">\n                <strong>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</strong>\n						<span>\n							"
    + alias2(alias1((depth0 != null ? depth0.address : depth0), depth0))
    + " <br/> "
    + alias2(alias1((depth0 != null ? depth0.postcode : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? depth0.city : depth0), depth0))
    + " <br/>\n							<!--<a href='#' class='directions'>Get directions</a>-->\n						</span>\n                <hr/>\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"stations-list-panel\" class=\"panel panel-default stations-list-panel\">\n    <div class=\"panel-heading\">\n        <h3>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.stations : depth0)) != null ? stack1.length : stack1), depth0))
    + " bike stations</h3>\n    </div>\n    <div class=\"panel-body stations-list\">\n        <ul id=\"stations-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.stations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</div>";
},"useData":true});