
#include <napi.h>

#include <iostream>
#include <chrono>

#include "./Lib/SortLib.h"

using namespace Napi;


Napi::Array QuickSortJS( const CallbackInfo& info ) {

    Array a = info[ 0 ].As<Array>();

    int length = (int)a.Length();
    int *array = new int[length];

    for(int i = 0; i<length; i++){
      Napi::Value v = a[i];
      if (v.IsNumber())
      {
        array[i] = (int)v.As<Napi::Number>();
      }
    }

    int start, end;
    start = info[ 1 ].As<Number>().DoubleValue();
    end = info[ 2 ].As<Number>().DoubleValue();

    // quicksort
    SortLib sortLib;
    sortLib.QuickSort(array, start, end);


    Napi::Env env = info.Env();
    Napi::Array outputArray = Napi::Array::New(env, length);
    for (int i = 0; i < length; i++) {
        outputArray[i] = Napi::Number::New(env, double(array[i]));
    }

    delete[] array;

    return outputArray;

}

double timeSum = 0.0;
int count = 0;

Napi::Array QuickSortJS2( const CallbackInfo& info ) {

    Array a = info[ 0 ].As<Array>();

    int length = (int)a.Length();
    int *array = new int[length];

    for(int i = 0; i<length; i++){
      Napi::Value v = a[i];
      if (v.IsNumber())
      {
        array[i] = (int)v.As<Napi::Number>();
      }
    }

    int start, end;
    start = info[ 1 ].As<Number>().DoubleValue();
    end = info[ 2 ].As<Number>().DoubleValue();

    // quicksort
    SortLib sortLib;

    std::chrono::system_clock::time_point  startA, endA; // 型は auto で可
    startA = std::chrono::system_clock::now(); // 計測開始時間
    
    sortLib.QuickSort(array, start, end);

    // 処理
    endA = std::chrono::system_clock::now();  // 計測終了時間
    double elapsed = std::chrono::duration_cast<std::chrono::microseconds>(endA-startA).count();
    std::cout << "Rap:  " << elapsed << " micro sec" << std::endl;
    
    timeSum += elapsed;
    count++;

    if(count==10){
        std::cout << "Avg:  " << timeSum / count << " micro sec" << std::endl;
    }

    Napi::Env env = info.Env();
    Napi::Array outputArray = Napi::Array::New(env, length);
    for (int i = 0; i < length; i++) {
        outputArray[i] = Napi::Number::New(env, double(array[i]));
    }

    delete[] array;

    return outputArray;

}


Object
Init( Env env, Object exports ) {
    exports.Set( String::New( env, "quickSortJS" ), Function::New( env, QuickSortJS ) );
    exports.Set( String::New( env, "quickSortJS2" ), Function::New( env, QuickSortJS2 ) ); // 時間計測用
    
    return exports;
}

NODE_API_MODULE( addon, Init )