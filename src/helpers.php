<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/13/20, 8:07 AM
 * Copyright (c) 2020. Powered by iamir.net
 */

function icredit_path($path = null)
{
    $path = trim($path, '/');
    return __DIR__ . ($path ? "/$path" : '');
}

function icredit($key = null, $default = null)
{
    return iconfig('icredit' . ($key ? ".$key" : ''), $default);
}
