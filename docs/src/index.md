# RuleMiner.jl

## Introduction
RuleMiner.jl is a Julia package for association rule and frequent itemset mining inspired by the [arules](https://github.com/mhahsler/arules) R package and [SPMF](https://www.philippe-fournier-viger.com/spmf/) Java library.

Key features of RuleMiner.jl include:

- Support for Julia's native multithreading capabilities for improved performance
- Direct interfaces with DataFrames.jl for loading transactional data and exporting results
- Flexible handling of either relative (percentage) support or absolute (count) support in minimum support thresholds

## Contents
```@contents
Pages = ["transactions.md", "algorithms/apriori.md", "algorithms/eclat.md","algorithms/fpgrowth.md","algorithms/charm.md","algorithms/fpclose.md","algorithms/lcm.md","algorithms/carpenter.md","algorithms/levelwise.md"]
Depth = 2
```