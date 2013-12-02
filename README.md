HaskellTestGrunt
================

Create a scaffold for a haskell library ready for unit testing.  

Items created:
                   
```
{projectName}.cabal
Setup.hs
src/
src/tests/Test{ProjectName}.hs
src/tests/TestMain.hs
```

`cabal configure --enable-tests` is automatically called after running.