﻿function test1(callback,arr,max){for(var obj={},ndx=0;ndx<max;++ndx)callback(arr[ndx],obj)}function test2(callback,arr,max){for(var list=[],ndx=0;ndx<max;++ndx)callback(arr[ndx],list)}