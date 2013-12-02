{-# OPTIONS_GHC -F -pgmF htfpp #-}
module Test{%= name %} where

import Test.HUnit.Lang
import Test.Framework

test_initial = assertEqual 0 0    