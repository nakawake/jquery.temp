/**
 * This is a jQuery template file
 *
 * @Since 12th Dec. 2013
 * @Author Nakawake
 */
;(function($){
    $.temp = function(elememt, options){
        var defaults = {
            // Options
            hoge: '',
            // Callbacks
            onHoge: function(){}
        };

        var _this = this;
        _this.settings = {};

        // Private functions
        var init = function(){
            _this.settings = $.extend({}, defaults, options);
            fuga();
        }

        var fuga = function(){
        };

        // Public functions
        _this.getSettings = function(){
            return _this.settings;
        };

        init();

        return this;
    };

    $.fn.temp = function(options){
        if(this.length == 0) return this;

        if(this.length > 1){
            this.each(function(){$(this).temp(options)});
            return this;
        }

        //console.log('each');
        var temp = new $.temp(this, options);

        // Public function
        this.getSettings = function(){
            return temp.getSettings();
        };

        return this;
    };
})(jQuery);
