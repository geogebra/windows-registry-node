'use strict';
var ref = require('ref-napi'),
    LPWSTR = require('./ref-LPWSTR.js');

var types = {
    REGSAM: ref.types.ulong,
    DWORD: ref.types.uint32,
    ULONG: ref.types.ulong,
    HWND: ref.refType(ref.types.void),
    BYTE: ref.types.uint8,
    HKEY: ref.refType(ref.types.void),
    PVOID: ref.refType('pointer'),
    HANDLE: ref.refType(ref.types.void),
    HINSTANCE: ref.refType(ref.types.void),
    LPCSTR: ref.refType(ref.types.CString),
    LPCWSTR: LPWSTR,
    STRING: ref.types.CString,
    INT: ref.types.int,
    LPVOID: ref.refType(ref.types.void)
};

types.PHKEY = ref.refType(types.HKEY);
types.LPBYTE = ref.refType(types.BYTE);
types.LPDWORD = ref.refType(types.DWORD);
module.exports = types;
