var app = new Vue({
    el: '#mainapp',
    data: {
        test: 0,
        dir: "ltr",
        text: "",
        splitText: [],
        del: ".",
        step: 1,
        selectedSplits: []
    },
    methods: {
        addRow: function(){
            this.rows.push(this.rowCount);
            this.rowCount++;
        },
        setDir: function(dir){
            this.dir = dir;
        },
        addSelected: function(selected){
            this.selectedSplits.push(selected);
        },
        setStep: function(step){
            this.step = step;
        },
        restart: function(){
            this.text = "";
            this.splitText = [];
            this.selectedSplits = [];
            this.step = 1;
        },
        download: function(){
            csv = "data:text/csv;charset=utf-8," + this.selectedSplits.join(",");
            var encodedUri = encodeURI(csv);
            window.open(csv);
        },
        split: function(){
            if(this.text[this.text.length -1] == this.del){
                this.text = this.text.slice(0, -1);
            }
            this.splitText = this.text.split(this.del);
            this.splitText = this.splitText.filter(function(el) { return el; });
            app.text.split('.', app.text.split('.').length - 1)
            this.setStep(2);
        }
    }
});