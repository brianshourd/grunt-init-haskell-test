# grunt-init-haskell-test

This is a [grunt-init scaffolding project][grunt-init] that creates a sandboxed
Haskell project (library and executable), with HUnit and QuickCheck tests set up
using [test-framework][].

This version is a minor fork of
[devshorts/grunt-init-haskell-test](https://github.com/devshorts/grunt-init-haskell-test),
with some changes to use cabal sandboxing, test-framework, add an executable,
and some restructuring to suit my own preferences.

## Usage

```
mkdir MyNewProject
cd MyNewProject
grunt-init haskell-test
# And answer the prompts
```

This will set up a cabal sandbox, install testing dependencies (so HUnit,
QuickCheck, test-framework, and base), and configure the project. It takes a
minute or two to complete, depending on download speed. After that, you can use

```
cabal test
```

to run the tests,

```
cabal build
```

to build,

```
cabal repl [projectname]
```

to start a ghci session with the correct libraries loaded (esp testing), and

```
cabal run
```

to run the executable.

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/`
directory. It's recommended that you use git to clone this template into that
directory, as follows:

```
git clone https://github.com/brianshourd/grunt-init-haskell-test ~/.grunt-init/haskell-test
```

_(Windows users, see [the grunt-init documentation][grunt-init] for the correct
destination directory path)_

[grunt-init]: http://gruntjs.com/project-scaffolding
[test-framework]: https://hackage.haskell.org/package/test-framework
