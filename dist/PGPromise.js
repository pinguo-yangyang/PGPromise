
/**************************************************************************/
/*                                                                        */
/* Copyright (c)2010-2012  Pinguo Company             　　　　　　　      */
/*                 品果科技                            版权所有 2010-2012 */
/*                                                                        */
/* PROPRIETARY RIGHTS of Pinguo Company are involved in the  　　　　　　 */
/* subject matter of this material.  All manufacturing, reproduction, use,*/
/* and sales rights pertaining to this subject matter are governed by the */
/* license agreement.  The recipient of this software implicitly accepts  */
/* the terms of the license.                                              */
/* 本软件文档资料是品果公司的资产,任何人士阅读和使用本资料必须获得        */
/* 相应的书面授权,承担保密责任和接受相应的法律约束.                       */
/*                                                                        */
/**************************************************************************/

/*
@author zhangzhi
@email zhangzhi@camera360.com
@edit by liangyunzhu 2015/06/17
@email liangyunzhu@camera360.com
*/

;(function(){

	window.PGPromise = function(func){

		if (!(func instanceof Function)) {
			throw new Error('not a function');
			return;
		}

		var me = this;

		this.status = 'pending';
		this.callbackArr = [];

		var resolve = function(data){
			me.callbackArr.forEach(function(callback){
				callback(data);
			});
			me.status = 'end';
		}

		func && func(resolve);
	}

	var fn = window.PGPromise.prototype;

	fn.then = function(func){
		if (!(func instanceof Function)) {
			throw new Error('not a function');
			return this;
		}

		this.callbackArr.push(func);
		return this;
	}

})();




