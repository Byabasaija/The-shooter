(()=>{"use strict";var t,e={448:(t,e,n)=>{var o=n(260),r=n.n(o);const i={type:r().AUTO,width:480,height:640,backgroundColor:"black",physics:{default:"arcade",arcade:{gravity:{x:0,y:0}}},pixelArt:!0,roundPixels:!0};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var e,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(o);if(r){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,"Boot")}return e=s,(n=[{key:"create",value:function(){this.scene.start("Preloader")}}])&&a(e.prototype,n),s}(r().Scene);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(s,t);var e,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(o);if(r){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return d(this,t)});function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,"Preloader")}return e=s,(n=[{key:"preload",value:function(){var t=this.add.graphics(),e=this.add.graphics();e.fillStyle(2236962,.8),e.fillRect(240,270,320,50);var n=this.cameras.main.width,o=this.cameras.main.height,r=this.make.text({x:n/2,y:o/2-50,text:"Loading...",style:{font:"20px monospace",fill:"#ffffff"}});r.setOrigin(.5,.5);var i=this.make.text({x:n/2,y:o/2-5,text:"0%",style:{font:"18px monospace",fill:"#ffffff"}});i.setOrigin(.5);var s=this.make.text({x:n/2,y:o/2+50,text:"",style:{font:"18px monospace",fill:"orange"}});s.setOrigin(.5,.5),this.load.on("progress",(function(e){i.setText("".concat(parseInt(100*e),"%")),t.clear(),t.fillStyle(16777215,1),t.fillRect(250,280,300*e,30)})),this.load.on("fileprogress",(function(t){s.setText("Loading asset: ".concat(t.key))})),this.load.on("complete",(function(){t.destroy(),e.destroy(),r.destroy(),i.destroy(),s.destroy()})),this.timedEvent=this.time.delayedCall(3e3,this.ready,[],this),this.load.image("blueButton1","assets/ui/blue_button02.png"),this.load.image("blueButton2","assets/ui/blue_button03.png"),this.load.image("box","assets/ui/grey_box.png"),this.load.audio("sndBtnOver",["assets/sndBtnOver.wav"]),this.load.audio("sndBtnDown",["assets/sndBtnDown.wav"])}},{key:"create",value:function(){this.scene.start("Title")}}])&&y(e.prototype,n),s}(r().Scene);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(s,t);var e,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(o);if(r){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,"Title")}return e=s,(n=[{key:"prealod",value:function(){this.load.image("sprBtnPlay","assets/sprBtnPlay.png"),this.load.image("sprBtnPlayHover","assets/sprBtnPlayHover.png"),this.load.image("sprBtnPlayDown","assets/sprBtnPlayDown.png"),this.load.audio("sndBtnOver","assets/sndBtnOver.wav"),this.load.audio("sndBtnDown","assets/sndBtnDown.wav")}},{key:"create",value:function(){this.btnPlay=this.add.text(.5*this.game.config.width,.5*this.game.config.height,"START",{fontFamily:"Courgette, cursive",fontSize:48}),this.btnPlay.setOrigin(.5,.5),this.btnPlay.setInteractive(),this.btnPlay.on("pointerup",(function(){this.scene.start("Game")}),this),this.title=this.add.text(.5*this.game.config.width,128,"Shooter Ship",{fontFamily:"Courgette, cursive",fontSize:48,fontStyle:"italic",color:"#ffffff",align:"center"}),this.title.setOrigin(.5)}}])&&g(e.prototype,n),s}(r().Scene);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?E(t):e}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(a,t);var e,n,o,i,s=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(o);if(i){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function a(t,e,n,o,r){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(i=s.call(this,t,e,n,o)).scene=t,i.scene.add.existing(E(i)),i.scene.physics.world.enableBody(E(i),0),i.setData("type",r),i.setData("isDead",!1),i}return e=a,(n=[{key:"explode",value:function(){this.getData("isDead")||(this.setTexture("sprExplosion"),this.play("sprExplosion"),this.scene.sfx.explosions[r().Math.Between(0,this.scene.sfx.explosions.length-1)].play(),void 0!==this.shootTimer&&this.shootTimer&&this.shootTimer.remove(!1),this.setAngle(0),this.body.setVelocity(0,0),this.on("animationcomplete",(function t(){t?this.destroy():this.setVisible(!1)}),this),this.setData("isDead",!0))}}])&&R(e.prototype,n),a}(r().GameObjects.Sprite);function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t,e){return!e||"object"!==B(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(r,t);var e,n,o=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=L(e);if(n){var r=L(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return C(this,t)});function r(t,e,n){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(i=o.call(this,t,e,n,"laser")).body.angularVelocity=200,i}return r}(D);function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e){return!e||"object"!==G(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(s,t);var e,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(o);if(r){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return I(this,t)});function s(t,e,n,o){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(r=i.call(this,t,e,n,o,"Player")).setData("speed",200),r.setData("isShooting",!1),r.setData("timerShootDelay",20),r.setData("timerShootTick",r.getData("timerShootDelay")-1),r}return e=s,(n=[{key:"create",value:function(){this.body.collideWorldBounds=!0}},{key:"moveUp",value:function(){this.body.angularVelocity=-this.getData("speed")}},{key:"moveDown",value:function(){this.body.angularVelocity=this.getData("speed")}},{key:"moveLeft",value:function(){this.body.angularVelocity=-this.getData("speed")}},{key:"moveRight",value:function(){this.body.angularVelocity=this.getData("speed")}},{key:"update",value:function(){if(this.body.maxVelocity.set(400),this.getData("isShooting"))if(this.getData("timerShootTick")<this.getData("timerShootDelay"))this.setData("timerShootTick",this.getData("timerShootTick")+1);else{var t=new K(this.scene,this.x,this.y);this.scene.playerLasers.add(t),this.scene.sfx.laser.play(),this.setData("timerShootTick",0)}}}])&&F(e.prototype,n),s}(D);function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function U(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(r,t);var e,n,o=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=z(e);if(n){var r=z(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return U(this,t)});function r(t,e,n){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(i=o.call(this,t,e,n,"sprLaserEnemy0")).body.velocity.y=200,i}return r}(D);function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Q(t,e){return!e||"object"!==X(e)&&"function"!=typeof e?Y(t):e}function Y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(a,t);var e,n,o,i,s=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Z(o);if(i){var n=Z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Q(this,t)});function a(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(o=s.call(this,t,e,n,"sprEnemy0","GunShip")).play("sprEnemy0"),o.body.velocity.y=r().Math.Between(50,100),o.shootTimer=o.scene.time.addEvent({delay:1e3,callback:function(){var t=new M(this.scene,this.x,this.y);t.setScale(this.scaleX),this.scene.enemyLasers.add(t)},callbackScope:Y(o),loop:!0}),o}return e=a,(n=[{key:"onDestroy",value:function(){void 0!==this.shootTimer&&this.shootTimer&&this.shootTimer.remove(!1)}}])&&q(e.prototype,n),a}(D);function tt(t){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function et(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function nt(t,e){return(nt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ot(t,e){return!e||"object"!==tt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var it=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&nt(t,e)}(a,t);var e,n,o,i,s=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=rt(o);if(i){var n=rt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ot(this,t)});function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=s.call(this,"Game")).score=0,t}return e=a,(n=[{key:"preload",value:function(){this.load.image("laser","assets/SpaceShooterRedux/PNG/Lasers/laserBlue01.png"),this.load.image("darkPurple","assets/darkPurple.png"),this.load.image("sprBg1","assets/sprBg1.png"),this.load.spritesheet("sprExplosion","assets/sprExplosion.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("sprEnemy0","assets/sprEnemy0.png",{frameWidth:16,frameHeight:16}),this.load.image("sprEnemy1","assets/sprEnemy1.png"),this.load.spritesheet("sprEnemy2","assets/sprEnemy2.png",{frameWidth:16,frameHeight:16}),this.load.image("sprLaserEnemy0","assets/sprLaserEnemy0.png"),this.load.image("sprLaserPlayer","assets/sprLaserPlayer.png"),this.load.image("sprPlayer","assets/SpaceShooterRedux/PNG/playerShip3_blue.png",{frameWidth:16,frameHeight:16}),this.load.audio("sndExplode0","assets/sndExplode0.wav"),this.load.audio("sndExplode1","assets/sndExplode1.wav"),this.load.audio("sndLaser","assets/sndLaser.wav")}},{key:"create",value:function(){var t=this;this.score=this.add.text(100,10,"Score: ".concat(this.score),{fontSize:"32px",fill:"#fff"}),this.anims.create({key:"sprEnemy0",frames:this.anims.generateFrameNumbers("sprEnemy0"),frameRate:20,repeat:-1}),this.anims.create({key:"sprEnemy2",frames:this.anims.generateFrameNumbers("sprEnemy2"),frameRate:20,repeat:-1}),this.anims.create({key:"sprExplosion",frames:this.anims.generateFrameNumbers("sprExplosion"),frameRate:20,repeat:0}),this.anims.create({key:"sprPlayer",frames:this.anims.generateFrameNumbers("sprPlayer"),frameRate:20,repeat:-1}),this.sfx={explosions:[this.sound.add("sndExplode0"),this.sound.add("sndExplode1")],laser:this.sound.add("sndLaser")},this.player=new W(this,.5*this.game.config.width,.5*this.game.config.height,"sprPlayer"),this.keyLeft=this.input.keyboard.addKey(r().Input.Keyboard.KeyCodes.LEFT),this.keyRight=this.input.keyboard.addKey(r().Input.Keyboard.KeyCodes.RIGHT),this.keyUp=this.input.keyboard.addKey(r().Input.Keyboard.KeyCodes.UP),this.keyDown=this.input.keyboard.addKey(r().Input.Keyboard.KeyCodes.DOWN),this.keySpace=this.input.keyboard.addKey(r().Input.Keyboard.KeyCodes.SPACE),this.enemies=this.add.group(),this.enemyLasers=this.add.group(),this.playerLasers=this.add.group(),this.physics.add.collider(this.playerLasers,this.enemies,(function(e,n){n&&(void 0!==n.onDestroy&&n.onDestroy(),t.score++,n.explode(!0),e.destroy())})),this.time.addEvent({delay:1e3,callback:function(){var t=new $(this,r().Math.Between(0,this.game.config.width),0);this.enemies.add(t)},callbackScope:this,loop:!0}),this.time.addEvent({delay:3e4,loop:!1,callback:function(){t.scene.start("GameOver")}})}},{key:"update",value:function(){this.player.getData("isDead")||(this.player.update(),this.keyUp.isDown?this.player.moveUp():this.keyDown.isDown&&this.player.moveDown(),this.keyLeft.isDown?this.player.moveLeft():this.keyRight.isDown&&this.player.moveRight(),this.keySpace.isDown?this.player.setData("isShooting",!0):(this.player.setData("timerShootTick",this.player.getData("timerShootDelay")-1),this.player.setData("isShooting",!1)));for(var t=0;t<this.enemies.getChildren().length;t++){var e=this.enemies.getChildren()[t];e.update(),(e.x<-e.displayWidth||e.x>this.game.config.width+e.displayWidth||e.y<4*-e.displayHeight||e.y>this.game.config.height+e.displayHeight)&&e&&(void 0!==e.onDestroy&&e.onDestroy(),e.destroy())}}}])&&et(e.prototype,n),a}(r().Scene);function st(t){return(st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function at(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function ct(t,e){return(ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ut(t,e){return!e||"object"!==st(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var lt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(s,t);var e,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ft(o);if(r){var n=ft(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ut(this,t)});function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,"GameOver")}return e=s,(n=[{key:"prealod",value:function(){this.load.image("sprBtnRestart","assets/sprBtnRestart.png")}},{key:"create",value:function(){this.title=this.add.text(.5*this.game.config.width,128,"GAME OVER",{fontFamily:"Roboto",fontSize:48,fontStyle:"bold",color:"#ffffff",align:"center"}),this.title.setOrigin(.5),this.btnRestart=this.add.text(.5*this.game.config.width,.5*this.game.config.height,"RESTART",{fontFamily:"Courgette, cursive",fontSize:48}),this.btnRestart.setOrigin(.5,.5),this.btnRestart.setInteractive(),this.btnRestart.on("pointerup",(function(){this.scene.start("Game")}),this)}}])&&at(e.prototype,n),s}(r().Scene);function pt(t){return(pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function yt(t,e){return(yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ht(t,e){return!e||"object"!==pt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function dt(t){return(dt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var bt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&yt(t,e)}(r,t);var e,n,o=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=dt(e);if(n){var r=dt(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return ht(this,t)});function r(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=o.call(this,i)).scene.add("Boot",l),t.scene.add("Preloader",m),t.scene.add("Title",_),t.scene.add("Game",it),t.scene.add("GameOver",lt),t.scene.start("Boot"),t}return r}(r().Game);window.game=new bt}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,n,r,i)=>{if(!n){var s=1/0;for(u=0;u<t.length;u++){for(var[n,r,i]=t[u],a=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((t=>o.O[t](n[c])))?n.splice(c--,1):(a=!1,i<s&&(s=i));a&&(t.splice(u--,1),e=r())}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,r,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={143:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,[s,a,c]=n,u=0;for(r in a)o.o(a,r)&&(o.m[r]=a[r]);for(c&&c(o),e&&e(n);u<s.length;u++)i=s[u],o.o(t,i)&&t[i]&&t[i][0](),t[s[u]]=0;o.O()},n=self.webpackChunkthe_shooter=self.webpackChunkthe_shooter||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[592],(()=>o(448)));r=o.O(r)})();