{-# OPTIONS_GHC -F -pgmF htfpp #-}
module Test{%= name %} where

import Test.HUnit.Lang
import Test.Framework

import {%= name %}

-- this should fail
test_initial = assertEqual 0 1
