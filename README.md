# cutie-process

[![NPM Version](https://img.shields.io/npm/v/@cuties/process.svg)](https://npmjs.org/package/@cuties/process)
[![Build Status](https://travis-ci.org/Guseyn/cutie-process.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-process)
[![codecov](https://codecov.io/gh/Guseyn/cutie-process/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-process)

[Cutie](https://github.com/Guseyn/cutie) extension for <b>process</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-process/tree/master/test).

## Install

`npm install @cuties/process`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/process');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>process</b> module.

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `Arch` | `process.arch` | `process` | `string` |
| `Argv` | `process.argv` | `process` | `string[]` |
| `Argv0` | `process.argv0` | `process` | `string` |
| `Channel` | `process.channel` | `process` | `object\|undefined` |
| `Chdir` | `process.chdir` | `process, dir` | `string` |
| `Config` | `process.config` | `process` | `object` |
| `CpuUsage` | `process.cpuUsage` | `process, previousValue` | `object` |
| `Cwd` | `process.cwd` | `process` | `string` |
| `DebugPort` | `process.debugPort` | `process` | `number` |
| `DisconnectedProcess` | `process.disconnect` | `process` | `process` |
| `Egid` | `process.getegid` | `process` | `number` |
| `Env` | `process.env` | `process` | `object` |
| `Euid` | `process.geteuid` | `process` | `number` |
| `ExecArgv` | `process.execArgv` | `process` | `object` |
| `ExecPath` | `process.execPath` | `process` | `string` |
| `ExitCode` | `process.exitCode` | `process` | `number` |
| `ExitedProcess` | `process.exit` | `process, code` | `process` |
| `FoundProcessOnPort` | `find(from find-process)` | `port` | `first found process or {} if no process on the specified port` |
| `Gid` | `process.getgid` | `process` | `number` |
| `Hrtime` | `process.hrtime` | `process, time` | `number[]` |
| `IsConnected` | `process.connected` | `process` | `boolean` |
| `KilledProcess` | `process.kill` | `pid, signal` | `process(as pid)` |
| `MainModule` | `process.mainModule` | `process` | `module` |
| `MemoryUsage` | `process.memoryUsage` | `process` | `object` |
| `NextTick` | `process.nextTick` | `process, callback, ...args` | `process` |
| `NoDeprecation` | `process.noDeprecation` | `process` | `boolean` |
| `Pid` | `process.pid` | `process` | `number` |
| `Platform` | `process.platform` | `process` | `string` |
| `ProcessWithBeforeExitEvent` | `process.on('beforeExit', event)` | `process, event(Event with definedBody(exitCode))` | `process` |
| `ProcessWithDisconnectEvent` | `process.on('disconnect', event)` | `process, event(Event with definedBody())` | `process` |
| `ProcessWithEmitedWarning` | `process.emitWarning` | `warning, options` | `process` |
| `ProcessWithExitEvent` | `process.on('exit', event)` | `process, event(Event with definedBody(code))` | `process` |
| `ProcessWithMessageEvent` | `process.on('message', event)` | `process, event(Event with definedBody(message, sendHandle))` | `process` |
| `ProcessWithRejectionHandledEvent` | `process.on('rejectionHandled', event)` | `process, event(Event with definedBody(p), p - promise)` | `process` |
| `ProcessWithSignalEvent` | `process.on(signal, event)` | `process, signal, event(Event with definedBody())` | `process` |
| `ProcessWithUncaughtExceptionEvent` | `process.on('uncaughtException', event)` | `process, event(Event with definedBody(error))` | `process` |
| `ProcessWithUnhandledRejectionEvent` | `process.on('unhandledRejection', event)` | `process, event(Event with definedBody(reason, p))` | `process` |
| `ProcessWithWarningEvent` | `process.on('warning', event)` | `process, event(Event with definedBody(warning))` | `process` |
| `Release` | `process.release` | `process` | `object` |
| `SentMessage` | `process.send` | `process, message, sendHandle, options, callback` | `message` |
| `StdErr` | `process.stderr` | `process` | `stream` |
| `StdIn` | `process.stdin` | `process` | `stream` |
| `StdOut` | `process.stdout` | `process` | `stream` |
| `ThrowDeprecation` | `process.throwDeprecation` | `process` | `boolean` |
| `Title` | `process.title` | `process` | `string` |
| `TraceDeprecation` | `process.traceDeprecation` | `process` | `boolean` |
| `Uid` | `process.getuid` | `process` | `number` |
| `Umask` | `process.umask` | `process, mask` | `process` |
| `Uptime` | `process.uptime` | `process` | `number` |
| `Version` | `process.version` | `process` | `string` |
| `Versions` | `process.versions` | `process` | `object` |
