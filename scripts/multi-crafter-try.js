const multiLib=require("multi-lib/library");
const bottler=multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"bottler",[
    {
        input:{
            items: ["metaglass/1"],
            liquids: ["water/15"],
            power:1
        },
        output:{
            items:["the-asparta-experience-water-container/1"]
        },
        craftTime:60
    },
    {
        input:{
            items: ["metaglass/1"],
            liquids: ["cryofluid/15"],
            power:1
        },
        output:{
            items:["the-asparta-experience-cryofluid-container/1"]
        },
        craftTime:60
    },
    {
        input:{
            items: ["metaglass/1"],
            liquids: ["oil/15"],
            power:1
        },
        output:{
            items:["the-asparta-experience-oil-container/1"]
        },
        craftTime:60
    },
	{
		input:{
            items: ["metaglass/1"],
            liquids: ["slag/15"],
            power:1
        },
        output:{
            items:["the-asparta-experience-slag-container/1"]
        },
        craftTime:60
	}
],{
},
function Extra(){
});
bottler.craftEffect= Fx.pulverizeMedium;
bottler.updateEffect=Fx.none;

const unbottler=multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"unbottler",[
    {
        input:{
            items: ["the-asparta-experience-water-container/1"],
            power:1
        },
        output:{
            liquids: ["water/15"]
        },
        craftTime:60
    },
    {
        input:{
            items: ["the-asparta-experience-cryofluid-container/1"],
            power:1
        },
        output:{
            liquids: ["cryofluid/15"]
        },
        craftTime:60
    },
    {
        input:{
            items: ["the-asparta-experience-oil-container/1"],
            power:1
        },
        output:{
            liquids: ["oil/15"]
        },
        craftTime:60
    },
	{
		input:{
            items: ["the-asparta-experience-slag-container/1"],
            power:1
        },
        output:{
            liquids: ["slag/15"]
        },
        craftTime:60
	}
],{
},
function Extra(){
});

unbottler.craftEffect= Fx.pulverizeMedium;
unbottler.updateEffect=Fx.none;

const tradeStation=multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"trade-station",[
    {
        input:{
            items: ["copper/80"],
            power:1
        },
        output:{
            items: ["the-asparta-experience-gold/1"]
        },
        craftTime:30
    },
    {
        input:{
            items: ["lead/60"],
            power:1
        },
        output:{
            items: ["the-asparta-experience-gold/1"]
        },
        craftTime:30
    },
	{
		input:{
            items: ["coal/30"],
            power:1
        },
        output:{
            items: ["the-asparta-experience-gold/1"]
        },
        craftTime:30
	},
    {
        input:{
            items: ["titanium/30"],
            power:1
        },
        output:{
            items: ["the-asparta-experience-gold/1"]
        },
        craftTime:30
    },
	{
		input:{
            items: ["thorium/15"],
            power:1
        },
        output:{
            items: ["the-asparta-experience-gold/1"]
        },
        craftTime:30
	},
	{
		input:{
            items: ["metaglass/15"],
            power:1
        },
        output:{
            items: ["the-asparta-experience-gold/1"]
        },
        craftTime:30
	},
	{
		input:{
            items: ["plastanium/5"],
            power:1
        },
        output:{
            items: ["the-asparta-experience-gold/1"]
        },
        craftTime:30
	},
	{
		input:{
            items: ["phase-fabric/1"],
            power:1
        },
        output:{
            items: ["the-asparta-experience-gold/2"]
        },
        craftTime:30
	},
	{
		input:{
            items: ["surge-alloy/1"],
            power:1
        },
        output:{
            items: ["the-asparta-experience-gold/4"]
        },
        craftTime:30
	}
],{
},
function Extra(){
});

tradeStation.craftEffect= Fx.pulverizeMedium;
tradeStation.updateEffect=Fx.none;