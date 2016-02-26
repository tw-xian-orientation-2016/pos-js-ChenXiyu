describe('parsePromotion',function(){
    var cart;
    beforeEach(function(){
	promotions = loadPromotions();
	 cart = [
	    {
		item: {
		    barcode:'ITEM000001',
		    name:'雪碧',
		    unit:'瓶',
		    price: 3.00
		},
		count : 5.00
	    },
	    {
		item: {
		    barcode:'ITEM000003',
		    name:'荔枝',
		    unit:'斤',
		    price:15.00
		},
		count : 2
	    },
	    {
		item:{
		    barcode:'ITEM000005',
		    name:'方便面',
		    unit:'袋',
		    price:4.50
		},
		count : 3
	    }
	];
    });

    it('must add an saved price element',function(){
	spyOn(console,"log");

	billing = parsePromotion( cart , promotions);

	var expectBilling = [
	    {
		good:{
		    item: {
			barcode:'ITEM000001',
			name:'雪碧',
			unit:'瓶',
			price: 3.00
		    },
		    count : 5.00
		},
		saved : 3.00
	    },
	    {
		good:{
		    item: {
			barcode:'ITEM000003',
			name:'荔枝',
			unit:'斤',
			price:15.00
		    },
		    count : 2
		},
		saved : 0.00
	    },
	    {
		good:{
		    item:{
			barcode:'ITEM000005',
			name:'方便面',
			unit:'袋',
			price:4.50
		    },
		    count : 3
		},
		saved : 4.50
	    }
	];
	expect(expectBilling+"").toEqual(billing+"");
    });
});
