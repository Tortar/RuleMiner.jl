var documenterSearchIndex = {"docs":
[{"location":"algorithms/fpclose/#FPClose","page":"FPClose","title":"FPClose","text":"","category":"section"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"The fpclose function implements the FPClose (Frequent Pattern Close) algorithm for mining closed itemsets. This algorithm, proposed by Gösta Grahne and Jianfei Zhu in 2005, builds on the FP-Growth alogrithm to discover closed itemsets in a dataset without candidate generation.","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"fpclose(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/fpclose/#RuleMiner.fpclose-Tuple{Transactions, Union{Float64, Int64}}","page":"FPClose","title":"RuleMiner.fpclose","text":"fpclose(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify closed itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, eclat will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/fpclose/#Parameters","page":"FPClose","title":"Parameters","text":"","category":"section"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/fpclose/#Output","page":"FPClose","title":"Output","text":"","category":"section"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"Algorithm Overview","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"The function starts by constructing an FP-tree from the transaction dataset.\nIt then recursively mines the FP-tree to find all closed itemsets, with closed-ness checking occuring at each level of recursion.\nThe process continues until all closed itemsets are discovered.","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = fpclose(txns, 0.05)","category":"page"},{"location":"algorithms/fpmax/#FPMax","page":"FPMax","title":"FPMax","text":"","category":"section"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"The fpmax function implements the FPMax (Frequent Pattern Max) algorithm for mining closed itemsets. This algorithm, proposed by Gösta Grahne and Jianfei Zhu in 2005, builds on the FP-Growth alogrithm to discover maximal itemsets in a dataset.","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"fpmax(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/fpmax/#RuleMiner.fpmax-Tuple{Transactions, Union{Float64, Int64}}","page":"FPMax","title":"RuleMiner.fpmax","text":"fpmax(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify maximal frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, fpmax will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/fpmax/#Parameters","page":"FPMax","title":"Parameters","text":"","category":"section"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/fpmax/#Output","page":"FPMax","title":"Output","text":"","category":"section"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"Algorithm Overview","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"The function starts by constructing an FP-tree from the transaction dataset.\nIt then recursively mines the FP-tree to find all candidate maximal itemsets.\nPrune all non-maximal itemsets by checking for supersets.","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = fpmax(txns, 0.05)","category":"page"},{"location":"transactions/#Transactions-Objects","page":"Transactions Objects","title":"Transactions Objects","text":"","category":"section"},{"location":"transactions/#Transactions","page":"Transactions Objects","title":"Transactions","text":"","category":"section"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"    Transactions","category":"page"},{"location":"transactions/#RuleMiner.Transactions","page":"Transactions Objects","title":"RuleMiner.Transactions","text":"Transactions\n\nA struct representing a collection of transactions in a sparse matrix format.\n\nFields\n\nmatrix::SparseMatrixCSC{Bool,Int64}: A sparse boolean matrix representing the transactions. Rows correspond to transactions, columns to items. A true value at position (i,j)  indicates that the item j is present in transaction i.\ncolkeys::Dict{Int,String}: A dictionary mapping column indices to item names. This allows retrieval of the original item names from the matrix column indices.\nlinekeys::Dict{Int,String}: A dictionary mapping row indices to transaction identifiers. This can be used to map matrix rows back to their original transaction IDs or line numbers.\n\nConstructors\n\nTransactions(matrix::SparseMatrixCSC{Bool,Int64}, colkeys::Dict{Int,String}, linekeys::Dict{Int,String})\n\nTransactions(df::DataFrame, indexcol::Union{Symbol,Nothing}=nothing)\n\nDescription\n\nThe Transactions struct provides an efficient representation of transaction data,  particularly useful for large datasets in market basket analysis, association rule mining, or similar applications where memory efficiency is crucial.\n\nThe sparse matrix representation allows for efficient storage and computation,  especially when dealing with datasets where each transaction contains only a small  subset of all possible items.\n\nDataFrame Constructor\n\nThe DataFrame constructor allows direct creation of a Transactions object from a DataFrame:\n\ndf: Input DataFrame where each row is a transaction and each column is an item.\nindexcol: Optional. Specifies a column to use as transaction identifiers.   If not provided, row numbers are used as identifiers.\n\nExamples\n\n# Create from existing data\nmatrix = SparseMatrixCSC{Bool,Int64}(...)\ncolkeys = Dict(1 => \"apple\", 2 => \"banana\", 3 => \"orange\")\nlinekeys = Dict(1 => \"T001\", 2 => \"T002\", 3 => \"T003\")\ntxns = Transactions(matrix, colkeys, linekeys)\n\n# Create from DataFrame\ndf = DataFrame(\n    ID = [\"T1\", \"T2\", \"T3\"],\n    Apple = [1, 0, 1],\n    Banana = [1, 1, 0],\n    Orange = [0, 1, 1]\n)\ntxns_from_df = Transactions(df, indexcol=:ID)\n\n# Access data\nitem_in_transaction = txns.matrix[2, 1]  # Check if item 1 is in transaction 2\nitem_name = txns.colkeys[1]              # Get the name of item 1\ntransaction_id = txns.linekeys[2]\n\n\n\n\n\n","category":"type"},{"location":"transactions/#load_transactions","page":"Transactions Objects","title":"load_transactions","text":"","category":"section"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"load_transactions(file::String, delimiter::Char; id_col::Bool = false, skiplines::Int = 0)","category":"page"},{"location":"transactions/#RuleMiner.load_transactions-Tuple{String, Char}","page":"Transactions Objects","title":"RuleMiner.load_transactions","text":"load_transactions(file::String, delimiter::Char; id_col::Bool = false, skiplines::Int = 0, nlines::Int = 0)::Transactions\n\nLoad transaction data from a file and return a Transactions struct.\n\nArguments\n\nfile::String: Path to the input file containing transaction data.\ndelimiter::Char: Character used to separate items in each transaction.\n\nKeyword Arguments\n\nid_col::Bool = false: If true, treats the first item in each line as a transaction identifier.\nskiplines::Int = 0: Number of lines to skip at the beginning of the file (e.g., for headers).\nnlines::Int = 0: Maximum number of lines to read. If 0, reads the entire file.\n\nReturns\n\nTransactions: A struct containing:\nmatrix: A sparse boolean matrix where rows represent transactions and columns represent items.\ncolkeys: A dictionary mapping column indices to item names.\nlinekeys: A dictionary mapping row indices to transaction identifiers.\n\nDescription\n\nThis function reads transaction data from a file, where each line represents a transaction and items are separated by the specified delimiter. It constructs a sparse matrix  representation of the transactions, with rows as transactions and columns as unique items.\n\nThe function uses memory mapping to read the file and construct the sparse matrix directly without materializing dense intermediate representations.\n\nNote\n\nThis function may not be suitable for extremely large files that exceed available system memory.\n\nExample\n\ntxns = load_transactions(\"transactions.txt\", ',', id_col=true, skiplines=1)\n\n\n\n\n\n","category":"method"},{"location":"transactions/#txns_to_df","page":"Transactions Objects","title":"txns_to_df","text":"","category":"section"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"txns_to_df(txns::Transactions; indexcol::Bool= false)","category":"page"},{"location":"transactions/#RuleMiner.txns_to_df-Tuple{Transactions}","page":"Transactions Objects","title":"RuleMiner.txns_to_df","text":"txns_to_df(txns::Transactions, id_col::Bool = false)::DataFrame\n\nConvert a Transactions object into a DataFrame.\n\nArguments\n\ntxns::Transactions: The Transactions object to be converted.\nid_col::Bool = false: (Optional) If true, includes an 'Index' column with transaction identifiers.\n\nReturns\n\nDataFrame: A DataFrame representation of the transactions.\n\nDescription\n\nThis function converts a Transactions object, which uses a sparse matrix representation, into a DataFrame. Each row of the resulting DataFrame represents a transaction, and each column represents an item.\n\nThe values in the DataFrame are integers, where 1 indicates the presence of an item in a transaction, and 0 indicates its absence.\n\nFeatures\n\nPreserves the original item names as column names.\nOptionally includes an 'Index' column with the original transaction identifiers.\n\nExample\n\n# Assuming 'txns' is a pre-existing Transactions object\ndf = txns_to_df(txns, id_col=true)\n\n\n\n\n\n","category":"method"},{"location":"algorithms/charm/#CHARM","page":"CHARM","title":"CHARM","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"The charm function implements the CHARM (Closed, Hash-based Association Rule Mining) algorithm for mining closed itemsets proposed by Mohammad Zaki and Ching-Jui Hsiao in 2002. This algorithm uses a depth-first search with hash-based approaches to pruning non-closed itemsets and is particularly efficient for dense datasets.","category":"page"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"charm(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/charm/#RuleMiner.charm-Tuple{Transactions, Union{Float64, Int64}}","page":"CHARM","title":"RuleMiner.charm","text":"charm(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify closed frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, charm will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/charm/#Parameters","page":"CHARM","title":"Parameters","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/charm/#Output","page":"CHARM","title":"Output","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/charm/#Algorithm-Overview","page":"CHARM","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"The function starts by initializing tidsets (transaction ID sets) for each item.\nIt then generates an ordered list of frequent items based on the minimum support threshold.\nThe algorithm uses a depth-first search strategy to explore the itemset lattice.\nFor each itemset, it checks if it's closed by comparing it with previously found closed itemsets.\nThe process continues recursively, building larger itemsets from smaller ones.","category":"page"},{"location":"algorithms/charm/#Usage-Example","page":"CHARM","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = charm(txns, 0.05)","category":"page"},{"location":"algorithms/levelwise/#LevelWise","page":"Levelwise","title":"LevelWise","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"The levelwise function implements the levelwise algorithm for mining closed itemsets proposed by Pasquier et al in 1999. This algorithm generates all subsets of the closed itemsets, derives their supports, and then returns the results. This particular implementation is designed to take a result datafrom from the various closed itemset mining algorithms in this package as its input.","category":"page"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"levelwise(df::DataFrame, min_n::Int)","category":"page"},{"location":"algorithms/levelwise/#RuleMiner.levelwise-Tuple{DataFrame, Int64}","page":"Levelwise","title":"RuleMiner.levelwise","text":"levelwise(df::DataFrame, min_n::Int)::DataFrame\n\nRecover frequent itemsets from a dataframe df of closed itemsets with minimum absolute support min_n\n\n\n\n\n\n","category":"method"},{"location":"algorithms/levelwise/#Parameters","page":"Levelwise","title":"Parameters","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"df::DataFrame: A DataFrame DataFrame object with four columns:\nItemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset\nmin_support::Int: The minimum support threshold for the rules. This algorithm only takes absolute (integer) support","category":"page"},{"location":"algorithms/levelwise/#Output","page":"Levelwise","title":"Output","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"A DataFrame object with three columns:","category":"page"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"Itemset: Vector of item names in the frequent itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/levelwise/#Algorithm-Overview","page":"Levelwise","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"The function starts by creating candidates from all subcombinations of the closed itemsets\nIt computes their supports by finding the smallest closed itemset that is a superset of the candiate\nThe algorithm loops thorugh, building larger combinations until there are no combinations left","category":"page"},{"location":"algorithms/levelwise/#Usage-Example","page":"Levelwise","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nclosed_sets = fpclose(txns, 0.05)\n\n# Recover all frequent itemsets from the result\nlevelwise(closed_sets,0.05)","category":"page"},{"location":"algorithms/carpenter/#Carpenter","page":"Carpenter","title":"Carpenter","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"The carpenter function implements the CARPENTER (Closed Pattern Discovery by Transposing Tables that are Extremely Long) algorithm for mining closed itemsets proposed by Pan et al. in 2003. This algorithm uses a transposed structure to optimize for datasets that have far more items than transactions, such as those found in genetic research and bioinformatics. It may not be the best choice if your data does not fit that format.","category":"page"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"carpenter(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/carpenter/#RuleMiner.carpenter-Tuple{Transactions, Union{Float64, Int64}}","page":"Carpenter","title":"RuleMiner.carpenter","text":"carpenter(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify closed frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, carpenter will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/carpenter/#Parameters","page":"Carpenter","title":"Parameters","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/carpenter/#Output","page":"Carpenter","title":"Output","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/carpenter/#Algorithm-Overview","page":"Carpenter","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"Check if the current itemset has been discovered before (pruning 3)\nCalculate the support of the current itemset\nRemove infrequent itemsets (pruning 1)\nVerify if the itemset is closed \nFind items that can be added without changing support (pruning 2)\nAdd closed frequent itemsets to the results\nRecursively enumerate larger itemsets","category":"page"},{"location":"algorithms/carpenter/#Usage-Example","page":"Carpenter","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = carpenter(txns, 0.05)","category":"page"},{"location":"algorithms/lcm/#LCM","page":"LCM","title":"LCM","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"The LCM function implements the LCM (Linear-time Closed Mier) algorithm for mining frequent closed itemsets first proposed by Uno et al. in 2004. This is an efficient method for discovering closed itemsets in a dataset with a linear time complexity.","category":"page"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"   LCM(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/lcm/#RuleMiner.LCM-Tuple{Transactions, Union{Float64, Int64}}","page":"LCM","title":"RuleMiner.LCM","text":"LCM(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify frequent closed itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, lcm will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/lcm/#Parameters","page":"LCM","title":"Parameters","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/lcm/#Output","page":"LCM","title":"Output","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/lcm/#Algorithm-Overview","page":"LCM","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"The function starts by identifying frequent items based on the minimum support threshold.\nIt then recursively explores the search space, using a depth-first approach.\nFor each itemset explored, it computes the closure (the largest superset with the same support).\nThe algorithm uses several pruning techniques to avoid generating non-closed or infrequent itemsets:\nIt skips itemsets whose closure has already been discovered.\nIt only extends itemsets with items that come after the current items in the frequency order.\nIt stops exploring when the support falls below the minimum threshold.\nThe process continues until all frequent closed itemsets are discovered.","category":"page"},{"location":"algorithms/lcm/#Usage-Example","page":"LCM","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = LCM(txns, 0.05)","category":"page"},{"location":"algorithms/eclat/#ECLAT","page":"ECLAT","title":"ECLAT","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"The eclat function implements the Equivalence CLAss Transformation algorithm for frequent itemset mining proposed by Mohammad Zaki in 2000. This algorithm identifies frequent itemsets in a dataset utilizing a column-first search and supplied minimum support.","category":"page"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"eclat(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/eclat/#RuleMiner.eclat-Tuple{Transactions, Union{Float64, Int64}}","page":"ECLAT","title":"RuleMiner.eclat","text":"eclat(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, eclat will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/eclat/#Parameters","page":"ECLAT","title":"Parameters","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/eclat/#Output","page":"ECLAT","title":"Output","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/eclat/#Algorithm-Overview","page":"ECLAT","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"The algorithm calculates support for individual items and keeps only items meeting the minimum support threshold.\nIt then orders the remaining items by their support (ascending).\nThen it begins recursively build itemsets from the initial items. \nFor each itemset, it adds one item at a time from the remaining sorted items, calculates the support, and if the support meets the threshold, it stores the itemset and continue building larger sets with it. If not, it stops exploring that branch and backtracks.","category":"page"},{"location":"algorithms/eclat/#Usage-Example","page":"ECLAT","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"\n# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = eclat(txns, 0.05)","category":"page"},{"location":"algorithms/apriori/#A-Priori","page":"A Priori","title":"A Priori","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"The apriori function implements the A Priori algorithm for association rule mining first proposed by Rakesh Agrawal and Srikant Ramakrishnan in 1994. This algorithm identifies frequent itemsets in a dataset and generates association rules based on specified support thresholds.","category":"page"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"apriori(txns::Transactions, min_support::Union{Int,Float64}, max_length::Int)","category":"page"},{"location":"algorithms/apriori/#RuleMiner.apriori-Tuple{Transactions, Union{Float64, Int64}, Int64}","page":"A Priori","title":"RuleMiner.apriori","text":"apriori(txns::Transactions, min_support::Union{Int,Float64}, max_length::Int)::DataFrame\n\nIdentify association rules in a transactional dataset txns, with minimum support, min_support,  and maximum rule length, max_length.\n\nWhen an Int value is supplied to min_support, apriori will use absolute support (count) of transactions as minimum support.\n\nWhen a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/apriori/#Parameters","page":"A Priori","title":"Parameters","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.\nmax_length::Int: An integer value specifying the maximum length of the rules generated by the function","category":"page"},{"location":"algorithms/apriori/#Output","page":"A Priori","title":"Output","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"The function returns a DataFrame containing the discovered association rules. Each row in the DataFrame represents a rule with the following columns:","category":"page"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"LHS: The left-hand side of the rule (antecedent)\nRHS: The right-hand side of the rule (consequent)\nSupport: Relative support of the rule\nConfidence: Confidence of the rule\nCoverage: Coverage (RHS support) of the rule\nLift: Lift of the assocation rule\nN: Absolute support of association rule\nLength: Length of the association rule","category":"page"},{"location":"algorithms/apriori/#Algorithm-Overview","page":"A Priori","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"The function starts by identifying base nodes (single-item rules) that meet the minimum support criteria.\nIt then iteratively generates longer rules up to the specified max_length.\nFor each rule length, it generates candidate rules by combining shorter rules with additional candidate items.\nThese candidate rules are then evaluated on whether they meet the minimum support citeria.\nVarious metrics (support, confidence, coverage, lift) are calculated for each rule which meets the min_support criterion.","category":"page"},{"location":"algorithms/apriori/#Usage-Example","page":"A Priori","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"\n# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5% and maximum length of 3\nresult = apriori(txns, 0.05,3)","category":"page"},{"location":"algorithms/fpgrowth/#FP-Growth","page":"FP-Growth","title":"FP-Growth","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"The fpgrowth function implements the FP-Growth (Frequent Pattern Growth) algorithm for mining frequent itemsets. This algorithm, proposed by Han et al. in 2000, is an efficient method for discovering frequent itemsets in a dataset without candidate generation. It is generally more efficient than other algorithms when transactions have large numbers of items","category":"page"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"fpgrowth(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/fpgrowth/#RuleMiner.fpgrowth-Tuple{Transactions, Union{Float64, Int64}}","page":"FP-Growth","title":"RuleMiner.fpgrowth","text":"fpgrowth(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, eclat will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/fpgrowth/#Parameters","page":"FP-Growth","title":"Parameters","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/fpgrowth/#Output","page":"FP-Growth","title":"Output","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/fpgrowth/#Algorithm-Overview","page":"FP-Growth","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"The function starts by constructing an FP-tree from the transaction dataset.\nIt then recursively mines the FP-tree to find all frequent itemsets.\nThe algorithm uses a divide-and-conquer approach, creating conditional FP-trees for each frequent item.\nIt traverses the tree in a bottom-up manner, combining frequent items to generate longer frequent itemsets.\nThe process continues until all frequent itemsets are discovered.","category":"page"},{"location":"algorithms/fpgrowth/#Usage-Example","page":"FP-Growth","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = fpgrowth(txns, 0.05)","category":"page"},{"location":"#RuleMiner.jl","page":"Home","title":"RuleMiner.jl","text":"","category":"section"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"RuleMiner.jl is a Julia package for association rule and frequent itemset mining inspired by the arules R package and SPMF Java library.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Key features of RuleMiner.jl include:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Support for Julia's native multithreading capabilities for improved performance\nDirect interfaces with DataFrames.jl for loading transactional data and exporting results\nFlexible handling of either relative (percentage) support or absolute (count) support in minimum support thresholds","category":"page"},{"location":"#Contents","page":"Home","title":"Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"transactions.md\", \"algorithms/apriori.md\", \"algorithms/eclat.md\",\"algorithms/fpgrowth.md\",\"algorithms/charm.md\",\"algorithms/fpclose.md\",\"algorithms/lcm.md\",\"algorithms/carpenter.md\",\"algorithms/levelwise.md\",\"algorithms/fpmax.md\"]\nDepth = 2","category":"page"}]
}
