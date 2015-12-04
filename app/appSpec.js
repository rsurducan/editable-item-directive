describe('makeEditable', function() {
	
	var scope,
		element,
		compiled,
		html,
		content;

	beforeEach(module("myApp"));
	beforeEach(module('editable.html'));
	beforeEach(inject(function($rootScope, $compile) {

		content = 'Content that will become editable when the directive rendered.';
		
		html="";
		html += "<div make-editable>";
		html += "	<p>" + content + "</p>";
		html += "</div>";

		scope = $rootScope.$new();
		compiled = $compile(html)
		element = compiled(scope);
		scope.$digest();

	}));
	it('should render the element correctly', function(){
    	expect(element.find('div').length).toBe(2);
    	expect(element.find("div[ng-init='isEditable=false'][contenteditable='false'][ng-class='{ editable: isEditable }'][ng-transclude='']")).toBeTruthy();
    	expect(element.find('p').text()).toEqual(content);
    	expect(element.find("button[ng-click='isEditable=true'][ng-show='!isEditable']").text()).toEqual('Edit');
    	expect(element.find("button[ng-click='isEditable=false'][ng-show='isEditable']").text()).toEqual('Save');
    });
});