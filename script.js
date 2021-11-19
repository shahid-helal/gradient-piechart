(function ($) {
    "use strict";
    var chartjs = $(".lang-skill");
    if (chartjs.length) {
        

        var inView = false;
        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
        }
        $(window).scroll(function() {
            if (isScrolledIntoView('.lang-skill')) {
                if (inView) { return; }
                inView = true;
                startAnimate();
            } else {
                inView = false;                 
            }
        });


        function startAnimate() {
            var ctx1 = document.getElementById('skill-1');
            var ctx2 = document.getElementById('skill-2');
            var ctx3 = document.getElementById('skill-3');
            var ctx4 = document.getElementById('skill-4');
            var myPieChart = new Chart(ctx1, {
                type: 'pie',                
                data : {
                    datasets: [{
                        data: [95, 15],
                        backgroundColor: [
                            '#FBBD41',
                            '#FEF1D9'
                        ],
                        borderColor: [
                            '#FEF1D9',
                            '#FEF1D9',
                        ],
                        borderWidth: 10,
                    }]
                },
                options: {
                    responsive: true,    
                    tooltips: {
                        enabled: false
                    },            
                    hover: {
                        mode: null,                    
                    },
                    animation: {
                        animateScale: true,
                        delay: 100,
                        duration: 2000,
                    }
                },            
            }); 
            var myPieChart = new Chart(ctx2, {
                type: 'pie',                
                data : {
                    datasets: [{
                        data: [70, 30],
                        backgroundColor: [
                            '#A345FB',
                            '#ECD9FE',
                        ],
                        borderColor: [
                            '#ECD9FE',
                            '#ECD9FE',
                        ],
                        borderWidth: 10,
                    }]
                },
                options: {
                    responsive: true,    
                    tooltips: {
                        enabled: false
                    },            
                    hover: {
                        mode: null,                    
                    },
                    animation: {
                        animateScale: true,
                        delay: 200,
                        duration: 2000,
                    }
                },            
            }); 
            var myPieChart = new Chart(ctx3, {
                type: 'pie',                
                data : {
                    datasets: [{
                        data: [40, 60],
                        backgroundColor: [
                            '#FF2E59',
                            '#FFD5DD'
                        ],
                        borderColor: [
                            '#FFD5DD',
                            '#FFD5DD',
                        ],
                        borderWidth: 10,
                    }]
                },
                options: {
                    responsive: true,    
                    tooltips: {
                        enabled: false
                    },            
                    hover: {
                        mode: null,                    
                    },
                    animation: {
                        animateScale: true,
                        delay: 300,
                        duration: 2000,
                    }
                },            
            }); 
            var myPieChart = new Chart(ctx4, {
                type: 'pie',                
                data : {
                    datasets: [{
                        data: [60, 40],
                        backgroundColor: [
                            '#2EFFCD',
                            '#D5FFF5'
                        ],
                        borderColor: [
                            '#D5FFF5',
                            '#D5FFF5',
                        ],
                        borderWidth: 10,
                    }]
                },
                options: {
                    responsive: true,    
                    tooltips: {
                        enabled: false
                    },            
                    hover: {
                        mode: null,                    
                    },
                    animation: {
                        animateScale: true,
                        delay: 400,
                        duration: 2000,
                    }
                },            
            }); 
        }
         
    }

})(jQuery);