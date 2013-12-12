/**
 * This is a jQuery template file
 *
 * @Since 12th Dec. 2013
 * @Author Nakawake
 */
;(function($){
    var defaults = {
        // Options
        hoge: '',
        // Callbacks
        onHoge: function(){}
    };

    $.fn.temp = function(options){
        // Return this
        if(this.length == 0) return this;

        // Support mutltiple elements
        if(this.length > 1){
            this.each(function(){$(this).temp(options)});
            return this;
        }

        var _this = this;

        // Private functions
        var init = function(){
            var settings = $.extend(defaults, options);
            $(_this).click(function(e){
                showLayer();
                showContent();
                console.log('clicked!');
            });
        };
        /**
         * Show Layer
         */
        var showLayer = function(){};
        /**
         * Show Content as a modal.
         */
        var showContent = function(){};
        /**
         * Close the modal
         */
        var close = function(){};

        // Public functions
        _this.hoge = function(){};

        // Return this for Method Chain
        return this;
    }


})(jQuery);
