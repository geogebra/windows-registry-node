// Minimal wrappers for Advapi32.dll to support basic registry manipulations

'use strict';
var ffi = require('ffi-napi'),
    types = require('../types');

// Javascript bindings for native Win32 registry APIs
var advApi = ffi.Library('Advapi32', {
    /*
    LONG WINAPI RegOpenCurrentUser(
    _In_  REGSAM samDesired,
    _Out_ PHKEY  phkResult
    );
    */
    RegOpenCurrentUser: ['long', [types.REGSAM, types.PHKEY]],
    /*
    LONG WINAPI RegQueryValueEx(
    _In_        HKEY    hKey,
    _In_opt_    LPCTSTR lpValueName,
    _Reserved_  LPDWORD lpReserved,
    _Out_opt_   LPDWORD lpType,
    _Out_opt_   LPBYTE  lpData,
    _Inout_opt_ LPDWORD lpcbData
    );
    */
    RegQueryValueExW: ['long', [types.HKEY, types.LPCWSTR, 'pointer', types.LPDWORD, types.LPBYTE, types.LPDWORD]],
    /*
    LONG WINAPI RegOpenKeyEx(
    _In_     HKEY    hKey,
    _In_opt_ LPCTSTR lpSubKey,
    _In_     DWORD   ulOptions,
    _In_     REGSAM  samDesired,
    _Out_    PHKEY   phkResult
    );
    */
    RegOpenKeyExW: ['long', ['longlong', types.LPCWSTR, types.DWORD, types.REGSAM, types.PHKEY]],
    /*
    LONG WINAPI RegSetValueEx(
    _In_             HKEY    hKey,
    _In_opt_         LPCTSTR lpValueName,
    _Reserved_       DWORD   Reserved,
    _In_             DWORD   dwType,
    _In_       const BYTE    *lpData,
    _In_             DWORD   cbData
    );
    */
    RegSetValueExW: ['long', [types.HKEY, types.LPCWSTR, 'pointer', types.DWORD, types.LPBYTE, types.DWORD]],
    /**
     * LONG WINAPI RegCreateKeyEx(
        _In_       HKEY                  hKey,
        _In_       LPCTSTR               lpSubKey,
        _Reserved_ DWORD                 Reserved,
        _In_opt_   LPTSTR                lpClass,
        _In_       DWORD                 dwOptions,
        _In_       REGSAM                samDesired,
        _In_opt_   LPSECURITY_ATTRIBUTES lpSecurityAttributes,
        _Out_      PHKEY                 phkResult,
        _Out_opt_  LPDWORD               lpdwDisposition
      );
    */
    RegCreateKeyExW: ['long', [types.HKEY, types.LPCWSTR, 'pointer', 'pointer', types.DWORD, types.REGSAM, 'pointer', types.PHKEY, 'pointer']],
    /*
      LONG WINAPI RegDeleteTree(
      _In_     HKEY    hKey,
      _In_opt_ LPCTSTR lpSubKey
      );
    */
    RegDeleteTreeW: ['long', [types.HKEY, types.LPCWSTR]],
    /*
      LONG WINAPI RegDeleteValue(
      _In_     HKEY    hKey,
      _In_opt_ LPCTSTR lpValueName
      );
    */

    RegDeleteValueW: ['long', [types.HKEY, types.LPCWSTR]],
    /*
    LONG WINAPI RegCloseKey(
    _In_ HKEY hKey
    );
    */
    RegCloseKey: ['long', [types.HKEY]]
});

module.exports = advApi;
