(()=>{var A=Object.defineProperty;var n=(e,t)=>()=>(e&&(t=e(e=0)),t);var w=(e,t)=>{for(var a in t)A(e,a,{get:t[a],enumerable:!0})};var y={};w(y,{default:()=>l,version:()=>T});var T,l,c=n(()=>{T="0.0.7",l=window.bcModSdk.registerMod({name:"Shizuku",version:T,fullName:"Shizuku Bondage Club Mod",repository:"https://github.com/arare-app/shizuku"})});function I(){let e=[{Stage:"0",Option:"(Cheat: Quick Bondage Menu)",Function:null,NextStage:"ShizukuDialogCheatQuickBondageMenu",Group:null,Prerequisite:null,Result:"(You can restrain or release yourself with a single click.)",Trait:null},{Stage:"ShizukuDialogCheatQuickBondageMenu",Option:"(Remove Restrains Not Locked)",Function:"DialogReleaseNoLock()",NextStage:"0",Group:null,Prerequisite:"CurrentCharacter.IsRestrained()",Result:"(You have been released except for locked items.)",Trait:null},{Stage:"ShizukuDialogCheatQuickBondageMenu",Option:"(Remove All Restrains Except Collars)",Function:"DialogReleaseTotal()",NextStage:"0",Group:null,Prerequisite:"CurrentCharacter.IsRestrained()",Result:"(You have been released except for slave collars.)",Trait:null},{Stage:"ShizukuDialogCheatQuickBondageMenu",Option:"(Remove All Restrains)",Function:"DialogRelease()",NextStage:"0",Group:null,Prerequisite:"CurrentCharacter.IsRestrained()",Result:"(You have been released.)",Trait:null},{Stage:"ShizukuDialogCheatQuickBondageMenu",Option:"(Apply Random Bondage)",Function:"DialogFullRandomRestrain()",NextStage:"0",Group:null,Prerequisite:"!CurrentCharacter.IsRestrained()",Result:"(You have been restrained.)",Trait:null},{Stage:"ShizukuDialogCheatQuickBondageMenu",Option:"(Apply Random Shibari)",Function:"DialogShibariRandomBondage()",NextStage:"0",Group:null,Prerequisite:"!CurrentCharacter.IsRestrained()",Result:"(You have been restrained with Hemp Rope.)",Trait:null},{Stage:"ShizukuDialogCheatQuickBondageMenu",Option:"(Back to main menu.)",Function:null,NextStage:"0",Group:null,Prerequisite:null,Result:"(Main menu.)",Trait:null}],t=Player.Dialog.findIndex(a=>a.Stage==="0"&&a.Option==="(Leave this menu.)");for(let a=0;a<e.length;a++)Player.Dialog.includes(e[a])||Player.Dialog.splice(t+a,0,e[a])}function F(){var e,t;if((t=(e=window==null?void 0:window.Player)==null?void 0:e.Dialog)!=null&&t.length)I();else{let a=l.hookFunction("CharacterBuildDialog",10,(o,r)=>{r(o),o[0].IsPlayer()&&(I(),a())})}}var D,R,v,C=n(()=>{c();(D=window.DialogShibariRandomBondage)!=null||(window.DialogShibariRandomBondage=function(){ShibariRandomBondage(Player,Math.floor(Math.random()*6))});(R=window.DialogReleaseNoLock)!=null||(window.DialogReleaseNoLock=function(){CharacterReleaseNoLock(CurrentCharacter)});(v=window.DialogReleaseTotal)!=null||(window.DialogReleaseTotal=function(){CharacterReleaseTotal(CurrentCharacter)});F()});function z(){return CurrentModule=="Online"&&CurrentScreen=="ChatRoom"&&ChatRoomGame=="GGTS"&&ChatRoomSpace==="Asylum"}function P(){var a,o,r,s,S,G,k,d,h,g,m;let e=[{Stage:"0",Option:"(Cheat: GGTS Helper Menu)",Function:null,NextStage:"ShizukuDialogGGTSHelperMenu",Group:null,Prerequisite:"DialogShizukuGGTSIsGGTS()",Result:"(You can do the required task with a single click.)",Trait:null},{Stage:"ShizukuDialogGGTSHelperMenu",Option:"(Cheat: Auto Do Required Task)",Function:"DialogShizukuGGTSAutoDoRequiredTask()",NextStage:"0",Group:null,Prerequisite:"DialogShizukuGGTSEnabledAutoDoRequiredTask",Result:"(Auto do required task enabled.)",Trait:null},{Stage:"ShizukuDialogGGTSHelperMenu",Option:"(Cheat: Disable Auto Do Required Task)",Function:"DialogShizukuGGTSDisableAutoDoRequiredTask()",NextStage:"0",Group:null,Prerequisite:"!DialogShizukuGGTSEnabledAutoDoRequiredTask",Result:"(Auto do required task disabled.)",Trait:null},{Stage:"ShizukuDialogGGTSHelperMenu",Option:"(Cheat: New Task without Waiting)",Function:"DialogShizukuGGTSDoRequiredTask()",NextStage:"0",Group:null,Prerequisite:"DialogShizukuGGTSNoCurrentTask()",Result:null,Trait:null},{Stage:"ShizukuDialogGGTSHelperMenu",Option:"(Cheat: Set Required Pose)",Function:"DialogShizukuGGTSDoRequiredTask()",NextStage:"0",Group:null,Prerequisite:"DialogShizukuGGTSRequiresPose()",Result:null,Trait:null},{Stage:"ShizukuDialogGGTSHelperMenu",Option:"(Cheat: Set Required Clothes)",Function:"DialogShizukuGGTSDoRequiredTask()",NextStage:"0",Group:null,Prerequisite:"DialogShizukuGGTSRequiresCloth()",Result:null,Trait:null},{Stage:"ShizukuDialogGGTSHelperMenu",Option:"(Cheat: Do Required Activity)",Function:"DialogShizukuGGTSDoRequiredTask()",NextStage:"0",Group:null,Prerequisite:"DialogShizukuGGTSRequiresActivity()",Result:null,Trait:null},{Stage:"ShizukuDialogGGTSHelperMenu",Option:"(Cheat: Restrain Legs)",Function:"DialogShizukuGGTSDoRequiredTask()",NextStage:"0",Group:null,Prerequisite:"DialogShizukuGGTSRequiresRestrainLegs()",Result:null,Trait:null},{Stage:"ShizukuDialogGGTSHelperMenu",Option:"(Cheat: Wear Required Items)",Function:"DialogShizukuGGTSDoRequiredTask()",NextStage:"0",Group:null,Prerequisite:"DialogShizukuGGTSRequiresItems()",Result:null,Trait:null},{Stage:"ShizukuDialogGGTSHelperMenu",Option:"(Back to main menu.)",Function:null,NextStage:"0",Group:null,Prerequisite:null,Result:"(Main menu.)",Trait:null}];(a=window.DialogShizukuGGTSIsGGTS)!=null||(window.DialogShizukuGGTSIsGGTS=z),(o=window.DialogShizukuGGTSNoCurrentTask)!=null||(window.DialogShizukuGGTSNoCurrentTask=function(){return AsylumGGTSTask==null}),(r=window.DialogShizukuGGTSRequiresActivity)!=null||(window.DialogShizukuGGTSRequiresActivity=function(){return AsylumGGTSTask==null?void 0:AsylumGGTSTask.startsWith("Activity")}),(s=window.DialogShizukuGGTSRequiresPose)!=null||(window.DialogShizukuGGTSRequiresPose=function(){return AsylumGGTSTask==null?void 0:AsylumGGTSTask.startsWith("Pose")}),(S=window.DialogShizukuGGTSRequiresCloth)!=null||(window.DialogShizukuGGTSRequiresCloth=function(){return AsylumGGTSTask==null?void 0:AsylumGGTSTask.startsWith("Cloth")}),(G=window.DialogShizukuGGTSRequiresRestrainLegs)!=null||(window.DialogShizukuGGTSRequiresRestrainLegs=function(){return AsylumGGTSTask==null?void 0:AsylumGGTSTask.startsWith("RestrainLegs")}),(k=window.DialogShizukuGGTSRequiresItems)!=null||(window.DialogShizukuGGTSRequiresItems=function(){return AsylumGGTSTask==null?void 0:AsylumGGTSTask.startsWith("Item")}),(d=window.DialogShizukuGGTSDoRequiredTask)!=null||(window.DialogShizukuGGTSDoRequiredTask=f),(h=window.DialogShizukuGGTSEnabledAutoDoRequiredTask)!=null||(window.DialogShizukuGGTSEnabledAutoDoRequiredTask=!1),(g=window.DialogShizukuGGTSAutoDoRequiredTask)!=null||(window.DialogShizukuGGTSAutoDoRequiredTask=function(){window.DialogShizukuGGTSEnabledAutoDoRequiredTask=!0}),(m=window.DialogShizukuGGTSDisableAutoDoRequiredTask)!=null||(window.DialogShizukuGGTSDisableAutoDoRequiredTask=function(){window.DialogShizukuGGTSEnabledAutoDoRequiredTask=!1});let t=Player.Dialog.findIndex(u=>u.Stage==="0"&&u.Option==="(Leave this menu.)");for(let u=0;u<e.length;u++)Player.Dialog.includes(e[u])||Player.Dialog.splice(t+u,0,e[u])}function q(){var e,t;if((t=(e=window==null?void 0:window.Player)==null?void 0:e.Dialog)!=null&&t.length)P();else{let a=l.hookFunction("CharacterBuildDialog",10,(o,r)=>{r(o),o[0].IsPlayer()&&(P(),a())})}}function i(e,t){InventoryGet(Player,e)==null?InventoryWear(Player,t,e,"#202020",0):console.warn(`Cannot wear ${t} because ${e} is already worn.`)}function f(){var e;if(AsylumGGTSTask==null)return AsylumGGTSNewTask(),DialogLeave();switch(AsylumGGTSTask){case"ActivityBite":case"ActivityCaress":case"ActivityHandGag":case"ActivityKiss":case"ActivityLick":case"ActivityMasturbateHand":case"ActivityNod":case"ActivityPet":case"ActivityPinch":case"ActivitySpank":case"ActivityTickle":case"ActivityWiggle":{let t=ActivityFemale3DCG.find(s=>s.Name===AsylumGGTSTask.substr(8)),o=((e=t.TargetSelf===!0?t.Target:t.TargetSelf)!=null?e:[]).filter(s=>ActivityCheckPrerequisites(t,Player,AsylumGGTSTaskTarget!=null?AsylumGGTSTaskTarget:Player,AssetGroupGet("Female3DCG",s)));(!t||o.length==0)&&ChatRoomSendLocal("Activity group not found: "+t);let r=AssetGroupGet("Female3DCG",CommonRandomItemFromList(null,o));ActivityRun(Player,AsylumGGTSTaskTarget!=null?AsylumGGTSTaskTarget:Player,r,{Activity:t},!0)}break;case"PoseKneel":CharacterSetActivePose(Player,"Kneel");break;case"PoseStand":CharacterSetActivePose(Player,"BaseLower");break;case"PoseOverHead":CharacterSetActivePose(Player,"Yoked");break;case"PoseBehindBack":CharacterSetActivePose(Player,"BackCuffs");break;case"PoseLegsOpen":CharacterSetActivePose(Player,"BaseLower");break;case"PoseLegsClosed":CharacterSetActivePose(Player,"LegsClosed");break;case"ClothHeels":InventoryWear(Player,"Heels1","Shoes","#72686F",0);break;case"ClothSocks":InventoryGet(Player,"Socks")==null&&InventoryWear(Player,"Socks4","Socks","#BCBCBC",0),InventoryGet(Player,"Shoes")!=null&&InventoryRemove(Player,"Shoes"),InventoryGet(Player,"ItemBoots")!=null&&InventoryRemove(Player,"ItemBoots");break;case"ClothBarefoot":InventoryGet(Player,"Socks")!=null&&InventoryRemove(Player,"Socks"),InventoryGet(Player,"Shoes")!=null&&InventoryRemove(Player,"Shoes"),InventoryGet(Player,"ItemBoots")!=null&&InventoryRemove(Player,"ItemBoots");break;case"ClothUpperLowerOn":InventoryGet(Player,"Cloth")==null&&WardrobeFastLoad(Player,0,!1);break;case"ClothUpperLowerOff":InventoryGet(Player,"Cloth")!=null&&InventoryRemove(Player,"Cloth"),InventoryGet(Player,"ClothLower")!=null&&InventoryRemove(Player,"ClothLower");break;case"ClothUnderwear":(CharacterIsNaked(Player)||!CharacterIsInUnderwear(Player))&&(CharacterNaked(Player),InventoryWear(Player,"Bra2","Bra","#FFFFFF"),InventoryWear(Player,"Panties7","Panties","#DE21A7"));break;case"ClothNaked":CharacterNaked(Player);break;case"RestrainLegs":InventoryWear(Player,"HempRope","ItemLegs",null,100);break;case"ItemHandsFuturisticMittens":i("ItemHands","FuturisticMittens");break;case"ItemHeadFuturisticMask":i("ItemHead","FuturisticMask");break;case"ItemEarsFuturisticEarphones":i("ItemEars","FuturisticEarphones");break;case"ItemNeckFuturisticCollar":i("ItemNeck","FuturisticCollar");break;case"ItemArmsFuturisticArmbinder":i("ItemArms","FuturisticArmbinder");break;case"ItemArmsFuturisticStraitjacket":i("ItemArms","FuturisticStraitjacket");break;case"ItemArmsFuturisticCuffs":i("ItemArms","FuturisticCuffs");break;case"ItemArmsFeetFuturisticCuffs":i("ItemArms","FuturisticCuffs"),i("ItemFeet","FuturisticCuffs");break;case"ItemBootsFuturisticHeels":i("ItemBoots","FuturisticHeels");break;case"ItemMouthFuturisticBallGag":i("ItemMouth","FuturisticBallGag");break;case"ItemMouthFuturisticPanelGag":InventoryGet(Player,"ItemMouth")==null?i("ItemMouth","FuturisticPanelGag"):InventoryGet(Player,"ItemMouth2")==null?i("ItemMouth2","FuturisticPanelGag"):InventoryGet(Player,"ItemMouth3")==null&&i("ItemMouth3","FuturisticPanelGag");break;case"ItemPelvisFuturisticChastityBelt":i("ItemPelvis","FuturisticChastityBelt");break;case"ItemPelvisFuturisticTrainingBelt":i("ItemPelvis","FuturisticTrainingBelt");break;case"ItemBreastFuturisticBra":i("ItemBreast","FuturisticBra");break;case"ItemBreastFuturisticBra2":i("ItemBreast","FuturisticBra2");break;case"ItemTorsoFuturisticHarness":InventoryGet(Player,"ItemTorso")==null?i("ItemTorso","FuturisticHarness"):InventoryGet(Player,"ItemTorso2")==null&&i("ItemTorso2","FuturisticHarness");break;case"NoTalking":case"ItemPose":case"ItemRemoveLimb":case"ItemRemoveBody":case"ItemRemoveHead":case"ItemUngag":case"ItemChaste":case"ItemUnchaste":case"ItemIntensity":case"ItemEarsDeaf":case"ItemMaskBlind":case"ItemFuckMachineIntensity":case"ItemTransform":case"ItemChangeGag":case"ItemBeltToFuck":case"ItemFuckToBelt":case"NewRuleNoOrgasm":case"UndoRuleNoOrgasm":case"UndoRuleKeepPose":case"LockRoom":case"UnlockRoom":break}AsylumGGTSTask!=null&&AsylumGGTSTask.startsWith("Query")&&M(),DialogLeave()}function M(){if(!AsylumGGTSTask)return;let e="",t=AsylumGGTSGetLevel(Player);switch(AsylumGGTSTask){case"QueryWhatIsGGTS":e="Good Girl Training System";break;case"QueryWhatAreYou":t<=4?e="I'm a good girl.":t==5?e="I'm a good slave girl.":t>=6&&(e="I'm a good slave.");break;case"QueryWhoControl":e="GGTS is in control.";break;case"QueryWhoControlMaster":e="Master GGTS is in control.";break;case"QueryLove":e="I love GGTS.";break;case"QueryLoveMaster":e="I love Master GGTS.";break;case"QueryCanFail":e="GGTS cannot fail.";break;case"QueryCanFailMaster":e="Master GGTS cannot fail.";break;case"QuerySurrender":e="I surrender to GGTS.";break;case"QuerySurrenderMaster":e="I surrender to Master GGTS.";break;case"QueryServeObey":e="I serve and obey GGTS.";break;case"QueryServeObeyMaster":e="I serve and obey Master GGTS.";break;case"QueryFreeWill":e="I don't have free will.";break;case"QuerySlaveWorthy":e="I strive to be slave worthy.";break;default:console.log("Unknown query: "+AsylumGGTSTask);break}if(e){let a=document.getElementById("InputChat");if(!a)return;a.value=e,ChatRoomSendChat()}}var p=n(()=>{c();l.hookFunction("AsylumGGTSNewTask",10,(e,t)=>{t(e),Notification.permission==="granted"?new Notification("New GGTS Task",{body:AsylumGGTSTask,icon:"Icons/Logo.png"}):Notification.permission!=="denied"&&Notification.requestPermission().then(a=>{a==="granted"&&new Notification("New GGTS Task",{body:AsylumGGTSTask,icon:"Icons/Logo.png"})}),window.DialogShizukuGGTSEnabledAutoDoRequiredTask&&setTimeout(()=>{f()},2e3)});q()});var B={};var b=n(()=>{C();p()});(async()=>{if(window.MaikoScriptShizukuLoaded!==!0){for(;!window.bcModSdk;)await new Promise(e=>setTimeout(e,100));for(window.MaikoScriptShizukuLoaded=!0,console.log("Shizuku loaded"),await Promise.resolve().then(()=>(b(),B));(ServerBeep==null?void 0:ServerBeep.Timer)>CommonTime();)await new Promise(e=>setTimeout(e,1e3));ServerBeep={Message:`Shizuku Loaded, Version: ${await Promise.resolve().then(()=>(c(),y)).then(e=>e.version)}`,Timer:CommonTime()+3e3}}else console.log("Shizuku already loaded")})();})();
//# sourceMappingURL=index.global.js.map