module Main
where

import Test.Framework (defaultMain, testGroup)
import Test.Framework.Providers.HUnit
import Test.Framework.Providers.QuickCheck2 (testProperty)

import Test.QuickCheck
import Test.HUnit

import {%= name %}

main :: IO ()
main = defaultMain tests
  where
    tests = [
            testGroup "First test group" [
                    testProperty "Property 1" prop_property1,
                    testProperty "Property 2" prop_property2
                ],
            testGroup "Second test group" [
                    testProperty "Property 3" prop_property3,
                    testCase "Case 1" case_case1
                ]
        ]

prop_property1 :: Positive Integer -> Bool
prop_property1 (Positive n) = idSample n == n

prop_property2 :: NonEmptyList Char -> Bool
prop_property2 (NonEmpty xs) = idSample xs == xs

prop_property3 :: String -> Bool
prop_property3 s = idSample s == s

case_case1 :: Assertion
case_case1 = idSample "Hello World" @?= "Designed to Fail"
