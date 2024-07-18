using Documenter, RuleMiner,DataFrames


makedocs(
    format = Documenter.HTML(prettyurls = haskey(ENV, "CI")),
    sitename="RuleMiner.jl",
    pagesonly = true,
    draft = false,
    pages=[
        "Home" => "index.md",
        "Transactions Objects" => "transactions.md",
        "Frequent Itemset Mining" => Any[
            "A Priori" => "algorithms/apriori.md",
            "ECLAT" => "algorithms/eclat.md",
            "FP-Growth" => "algorithms/fpgrowth.md"
        ],
        "Closed Itemset Mining" => Any[
            "FPClose" => "algorithms/fpclose.md",
            "CHARM" => "algorithms/charm.md",
            "LCM" => "algorithms/lcm.md",
            "Carpenter" => "algorithms/carpenter.md"
        ],
    ],
    warnonly = [:missing_docs, :cross_references],
)

deploydocs(
    repo = "github.com/JaredSchwartz/RuleMiner.jl.git",
)