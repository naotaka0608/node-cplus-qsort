{   "targets":
    [   
        {   
            "target_name"   : "addon",
            
            "sources"       : [ 
                "addon.cpp", 
                "Lib/SortLib.h",  "Lib/SortLib.cpp" 
            ],

            "defines"       : [ "NAPI_DISABLE_CPP_EXCEPTIONS" ],
            
            "include_dirs"  : [ "<!@(node -p \"require( 'node-addon-api' ).include\")" ]
        }
    ]
}