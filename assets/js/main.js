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
            this.splitText = [];
            if(this.text[this.text.length -1] == this.del.includes(this.text[this.text.length -1])){
                this.text = this.text.slice(0, -1);
            }
            
            this.del.split(' ').forEach(function(e){
                this.splitText = this.splitText.concat(this.text.split(e));
            }.bind(this));

            // this.splitText = this.text.split(this.del);
            this.splitText.forEach(function(el, i){
                this[i] = el.trim();
            }, this.splitText);

            
            this.splitText = this.splitText.filter(function(value, index){ return this.splitText.indexOf(value) == index }.bind(this));
            console.log(this.splitText);
            // this.splitText = this.splitText.filter(function(el) { return el; });
            // app.text.split('.', app.text.split('.').length - 1)
            this.setStep(2);
        }
    }
});