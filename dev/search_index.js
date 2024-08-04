var documenterSearchIndex = {"docs":
[{"location":"algorithms/fpclose/#FPClose","page":"FPClose","title":"FPClose","text":"","category":"section"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"The fpclose function implements the FPClose (Frequent Pattern Close) algorithm for mining closed itemsets. This algorithm, proposed by Gösta Grahne and Jianfei Zhu in 2005, builds on the FP-Growth alogrithm to discover closed itemsets in a dataset without candidate generation.","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"fpclose(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/fpclose/#RuleMiner.fpclose-Tuple{Transactions, Union{Float64, Int64}}","page":"FPClose","title":"RuleMiner.fpclose","text":"fpclose(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify closed itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, eclat will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/fpclose/#Parameters","page":"FPClose","title":"Parameters","text":"","category":"section"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/fpclose/#Output","page":"FPClose","title":"Output","text":"","category":"section"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"Algorithm Overview","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"The function starts by constructing an FP-tree from the transaction dataset.\nIt then recursively mines the FP-tree to find all closed itemsets, with closed-ness checking occuring at each level of recursion.\nThe process continues until all closed itemsets are discovered.","category":"page"},{"location":"algorithms/fpclose/","page":"FPClose","title":"FPClose","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = fpclose(txns, 0.05)","category":"page"},{"location":"algorithms/fpmax/#FPMax","page":"FPMax","title":"FPMax","text":"","category":"section"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"The fpmax function implements the FPMax (Frequent Pattern Max) algorithm for mining closed itemsets. This algorithm, proposed by Gösta Grahne and Jianfei Zhu in 2005, builds on the FP-Growth alogrithm to discover maximal itemsets in a dataset.","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"fpmax(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/fpmax/#RuleMiner.fpmax-Tuple{Transactions, Union{Float64, Int64}}","page":"FPMax","title":"RuleMiner.fpmax","text":"fpmax(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify maximal frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, fpmax will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/fpmax/#Parameters","page":"FPMax","title":"Parameters","text":"","category":"section"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/fpmax/#Output","page":"FPMax","title":"Output","text":"","category":"section"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"Algorithm Overview","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"The function starts by constructing an FP-tree from the transaction dataset.\nIt then recursively mines the FP-tree to find all candidate maximal itemsets.\nPrune all non-maximal itemsets by checking for supersets.","category":"page"},{"location":"algorithms/fpmax/","page":"FPMax","title":"FPMax","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = fpmax(txns, 0.05)","category":"page"},{"location":"transactions/#Transactions-Objects","page":"Transactions Objects","title":"Transactions Objects","text":"","category":"section"},{"location":"transactions/#Transactions","page":"Transactions Objects","title":"Transactions","text":"","category":"section"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"struct Transactions\n    matrix::SparseMatrixCSC{Bool,Int64}\n    colkeys::Dict{Int,String} \n    linekeys::Dict{Int,String} \nend","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"The Transactions struct consists of three fields:","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"matrix: Sparse matrix showing the locations of the items (columns) in the transactions(rows)\ncolkeys: Dictionary mapping column indexes to their original values in the source\nlinekeys: Dictionary mapping line indexes to their original values in the source (or generated index number)","category":"page"},{"location":"transactions/#load_transactions","page":"Transactions Objects","title":"load_transactions","text":"","category":"section"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Note: this reads basket-format data, not tabular data!","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"load_transactions(file::String, delimiter::Char; id_col::Bool = false, skiplines::Int = 0)","category":"page"},{"location":"transactions/#RuleMiner.load_transactions-Tuple{String, Char}","page":"Transactions Objects","title":"RuleMiner.load_transactions","text":"load_transactions(file::String, delimiter::Char; id_col::Bool= false, skiplines::Int= 0, nlines::Int= 0)::Transactions\n\nRead transaction data from a file where each line is a list of items separated by a given delimiter\n\nIf the first item of each list is a transaction identifier, set id_col to true\n\nSpecify the number header lines to skip with skiplines\n\nSpecify a specific number of lines to read with nlines\n\n\n\n\n\n","category":"method"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Reads transaction data from a file basket-format file, where each line is a list of items, and returns a Transactions object.","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Parameters:","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"file: Path to the input file\ndelimiter: Character used to separate items in each transaction\nid_col: Set to true if the first item in each line is a transaction identifier (default: false)\nskiplines: Number of header lines to skip (optional)\nnlines:Number of lines to read (optional)","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Returns: ","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Transactions: A Transactions object with a sparse matrix representing the treansactions (rows) and items (columns) as well as dictionary keys for the names of the rows and columns","category":"page"},{"location":"transactions/#transactions","page":"Transactions Objects","title":"transactions","text":"","category":"section"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"transactions(df::DataFrame;indexcol::Union{Symbol,Nothing}=nothing)","category":"page"},{"location":"transactions/#RuleMiner.transactions-Tuple{DataFrame}","page":"Transactions Objects","title":"RuleMiner.transactions","text":"transactions(df::DataFrame; indexcol::Union{Symbol,Nothing}= nothing)::Transactions\n\nConverts a one-hot encoded DataFrame object into a Transactions object\n\nDesignate a column as an index column with indexcol \n\n\n\n\n\n","category":"method"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Converts a one-hot encoded DataFrame into a Transactions object.","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Parameters:","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"df: Input DataFrame\nindexcol: Column to use as the index (optional)","category":"page"},{"location":"transactions/#txns_to_df","page":"Transactions Objects","title":"txns_to_df","text":"","category":"section"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"txns_to_df(txns::Transactions; indexcol::Bool= false)","category":"page"},{"location":"transactions/#RuleMiner.txns_to_df-Tuple{Transactions}","page":"Transactions Objects","title":"RuleMiner.txns_to_df","text":"txns_to_df(txns::Transactions; id_col::Bool= false)::DataFrame\n\nConvert a Transactions object to a DataFrame. Specify whether the Transactions linekey field should be included as an Index column with indexcol\n\n\n\n\n\n","category":"method"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Parameters:","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"txns: The Transactions object to be converted.\nid_col: If true, an additional 'Index' column is added to the DataFrame containing the values from the linekeys dictionary.","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Returns","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"DataFrame: A one-hot encoded DataFrame representation of the Transactions object.","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"Usage Examples","category":"page"},{"location":"transactions/","page":"Transactions Objects","title":"Transactions Objects","text":"# Load transactions from a file\ntxns = load_transactions(\"transactions.txt\", ' ', id_col=true, skiplines=1)\n\n# Convert a DataFrame to Transactions\ndf = DataFrame(Index = [1,2,3], A=[1,0,1], B=[0,1,1], C=[1,1,0])\n\ntxns = transactions(df, indexcol=:Index)","category":"page"},{"location":"algorithms/charm/#CHARM","page":"CHARM","title":"CHARM","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"The charm function implements the CHARM (Closed, Hash-based Association Rule Mining) algorithm for mining closed itemsets proposed by Mohammad Zaki and Ching-Jui Hsiao in 2002. This algorithm uses a depth-first search with hash-based approaches to pruning non-closed itemsets and is particularly efficient for dense datasets.","category":"page"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"charm(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/charm/#RuleMiner.charm-Tuple{Transactions, Union{Float64, Int64}}","page":"CHARM","title":"RuleMiner.charm","text":"charm(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify closed frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, charm will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/charm/#Parameters","page":"CHARM","title":"Parameters","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/charm/#Output","page":"CHARM","title":"Output","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/charm/#Algorithm-Overview","page":"CHARM","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"The function starts by initializing tidsets (transaction ID sets) for each item.\nIt then generates an ordered list of frequent items based on the minimum support threshold.\nThe algorithm uses a depth-first search strategy to explore the itemset lattice.\nFor each itemset, it checks if it's closed by comparing it with previously found closed itemsets.\nThe process continues recursively, building larger itemsets from smaller ones.","category":"page"},{"location":"algorithms/charm/#Usage-Example","page":"CHARM","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/charm/","page":"CHARM","title":"CHARM","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = charm(txns, 0.05)","category":"page"},{"location":"algorithms/levelwise/#LevelWise","page":"Levelwise","title":"LevelWise","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"The levelwise function implements the levelwise algorithm for mining closed itemsets proposed by Pasquier et al in 1999. This algorithm generates all subsets of the closed itemsets, derives their supports, and then returns the results. This particular implementation is designed to take a result datafrom from the various closed itemset mining algorithms in this package as its input.","category":"page"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"levelwise(df::DataFrame, min_n::Int)","category":"page"},{"location":"algorithms/levelwise/#RuleMiner.levelwise-Tuple{DataFrame, Int64}","page":"Levelwise","title":"RuleMiner.levelwise","text":"levelwise(df::DataFrame, min_n::Int)::DataFrame\n\nRecover frequent itemsets from a dataframe df of closed itemsets with minimum absolute support min_n\n\n\n\n\n\n","category":"method"},{"location":"algorithms/levelwise/#Parameters","page":"Levelwise","title":"Parameters","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"df::DataFrame: A DataFrame DataFrame object with four columns:\nItemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset\nmin_support::Int: The minimum support threshold for the rules. This algorithm only takes absolute (integer) support","category":"page"},{"location":"algorithms/levelwise/#Output","page":"Levelwise","title":"Output","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"A DataFrame object with three columns:","category":"page"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"Itemset: Vector of item names in the frequent itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/levelwise/#Algorithm-Overview","page":"Levelwise","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"The function starts by creating candidates from all subcombinations of the closed itemsets\nIt computes their supports by finding the smallest closed itemset that is a superset of the candiate\nThe algorithm loops thorugh, building larger combinations until there are no combinations left","category":"page"},{"location":"algorithms/levelwise/#Usage-Example","page":"Levelwise","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/levelwise/","page":"Levelwise","title":"Levelwise","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nclosed_sets = fpclose(txns, 0.05)\n\n# Recover all frequent itemsets from the result\nlevelwise(closed_sets,0.05)","category":"page"},{"location":"algorithms/carpenter/#Carpenter","page":"Carpenter","title":"Carpenter","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"The carpenter function implements the CARPENTER (Closed Pattern Discovery by Transposing Tables that are Extremely Long) algorithm for mining closed itemsets proposed by Pan et al. in 2003. This algorithm uses a transposed structure to optimize for datasets that have far more items than transactions, such as those found in genetic research and bioinformatics. It may not be the best choice if your data does not fit that format.","category":"page"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"carpenter(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/carpenter/#RuleMiner.carpenter-Tuple{Transactions, Union{Float64, Int64}}","page":"Carpenter","title":"RuleMiner.carpenter","text":"carpenter(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify closed frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, carpenter will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/carpenter/#Parameters","page":"Carpenter","title":"Parameters","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/carpenter/#Output","page":"Carpenter","title":"Output","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/carpenter/#Algorithm-Overview","page":"Carpenter","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"Check if the current itemset has been discovered before (pruning 3)\nCalculate the support of the current itemset\nRemove infrequent itemsets (pruning 1)\nVerify if the itemset is closed \nFind items that can be added without changing support (pruning 2)\nAdd closed frequent itemsets to the results\nRecursively enumerate larger itemsets","category":"page"},{"location":"algorithms/carpenter/#Usage-Example","page":"Carpenter","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/carpenter/","page":"Carpenter","title":"Carpenter","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = carpenter(txns, 0.05)","category":"page"},{"location":"algorithms/lcm/#LCM","page":"LCM","title":"LCM","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"The LCM function implements the LCM (Linear-time Closed Mier) algorithm for mining frequent closed itemsets first proposed by Uno et al. in 2004. This is an efficient method for discovering closed itemsets in a dataset with a linear time complexity.","category":"page"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"   LCM(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/lcm/#RuleMiner.LCM-Tuple{Transactions, Union{Float64, Int64}}","page":"LCM","title":"RuleMiner.LCM","text":"LCM(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify frequent closed itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, lcm will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/lcm/#Parameters","page":"LCM","title":"Parameters","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/lcm/#Output","page":"LCM","title":"Output","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/lcm/#Algorithm-Overview","page":"LCM","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"The function starts by identifying frequent items based on the minimum support threshold.\nIt then recursively explores the search space, using a depth-first approach.\nFor each itemset explored, it computes the closure (the largest superset with the same support).\nThe algorithm uses several pruning techniques to avoid generating non-closed or infrequent itemsets:\nIt skips itemsets whose closure has already been discovered.\nIt only extends itemsets with items that come after the current items in the frequency order.\nIt stops exploring when the support falls below the minimum threshold.\nThe process continues until all frequent closed itemsets are discovered.","category":"page"},{"location":"algorithms/lcm/#Usage-Example","page":"LCM","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/lcm/","page":"LCM","title":"LCM","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = LCM(txns, 0.05)","category":"page"},{"location":"algorithms/eclat/#ECLAT","page":"ECLAT","title":"ECLAT","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"The eclat function implements the Equivalence CLAss Transformation algorithm for frequent itemset mining proposed by Mohammad Zaki in 2000. This algorithm identifies frequent itemsets in a dataset utilizing a column-first search and supplied minimum support.","category":"page"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"eclat(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/eclat/#RuleMiner.eclat-Tuple{Transactions, Union{Float64, Int64}}","page":"ECLAT","title":"RuleMiner.eclat","text":"eclat(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, eclat will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/eclat/#Parameters","page":"ECLAT","title":"Parameters","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/eclat/#Output","page":"ECLAT","title":"Output","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/eclat/#Algorithm-Overview","page":"ECLAT","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"The algorithm calculates support for individual items and keeps only items meeting the minimum support threshold.\nIt then orders the remaining items by their support (ascending).\nThen it begins recursively build itemsets from the initial items. \nFor each itemset, it adds one item at a time from the remaining sorted items, calculates the support, and if the support meets the threshold, it stores the itemset and continue building larger sets with it. If not, it stops exploring that branch and backtracks.","category":"page"},{"location":"algorithms/eclat/#Usage-Example","page":"ECLAT","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/eclat/","page":"ECLAT","title":"ECLAT","text":"\n# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = eclat(txns, 0.05)","category":"page"},{"location":"algorithms/apriori/#A-Priori","page":"A Priori","title":"A Priori","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"The apriori function implements the A Priori algorithm for association rule mining first proposed by Rakesh Agrawal and Srikant Ramakrishnan in 1994. This algorithm identifies frequent itemsets in a dataset and generates association rules based on specified support thresholds.","category":"page"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"apriori(txns::Transactions, min_support::Union{Int,Float64}, max_length::Int)","category":"page"},{"location":"algorithms/apriori/#RuleMiner.apriori-Tuple{Transactions, Union{Float64, Int64}, Int64}","page":"A Priori","title":"RuleMiner.apriori","text":"apriori(txns::Transactions, min_support::Union{Int,Float64}, max_length::Int)::DataFrame\n\nIdentify association rules in a transactional dataset txns, with minimum support, min_support,  and maximum rule length, max_length.\n\nWhen an Int value is supplied to min_support, apriori will use absolute support (count) of transactions as minimum support.\n\nWhen a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/apriori/#Parameters","page":"A Priori","title":"Parameters","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.\nmax_length::Int: An integer value specifying the maximum length of the rules generated by the function","category":"page"},{"location":"algorithms/apriori/#Output","page":"A Priori","title":"Output","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"The function returns a DataFrame containing the discovered association rules. Each row in the DataFrame represents a rule with the following columns:","category":"page"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"LHS: The left-hand side of the rule (antecedent)\nRHS: The right-hand side of the rule (consequent)\nSupport: Relative support of the rule\nConfidence: Confidence of the rule\nCoverage: Coverage (RHS support) of the rule\nLift: Lift of the assocation rule\nN: Absolute support of association rule\nLength: Length of the association rule","category":"page"},{"location":"algorithms/apriori/#Algorithm-Overview","page":"A Priori","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"The function starts by identifying base nodes (single-item rules) that meet the minimum support criteria.\nIt then iteratively generates longer rules up to the specified max_length.\nFor each rule length, it generates candidate rules by combining shorter rules with additional candidate items.\nThese candidate rules are then evaluated on whether they meet the minimum support citeria.\nVarious metrics (support, confidence, coverage, lift) are calculated for each rule which meets the min_support criterion.","category":"page"},{"location":"algorithms/apriori/#Usage-Example","page":"A Priori","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/apriori/","page":"A Priori","title":"A Priori","text":"\n# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5% and maximum length of 3\nresult = apriori(txns, 0.05,3)","category":"page"},{"location":"algorithms/fpgrowth/#FP-Growth","page":"FP-Growth","title":"FP-Growth","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"The fpgrowth function implements the FP-Growth (Frequent Pattern Growth) algorithm for mining frequent itemsets. This algorithm, proposed by Han et al. in 2000, is an efficient method for discovering frequent itemsets in a dataset without candidate generation. It is generally more efficient than other algorithms when transactions have large numbers of items","category":"page"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"fpgrowth(txns::Transactions, min_support::Union{Int,Float64})","category":"page"},{"location":"algorithms/fpgrowth/#RuleMiner.fpgrowth-Tuple{Transactions, Union{Float64, Int64}}","page":"FP-Growth","title":"RuleMiner.fpgrowth","text":"fpgrowth(txns::Transactions, min_support::Union{Int,Float64})::DataFrame\n\nIdentify frequent itemsets in a transactional dataset txns with a minimum support: min_support.\n\nWhen an Int value is supplied to min_support, eclat will use absolute support (count) of transactions as minimum support. When a Float value is supplied, it will use relative support (percentage).\n\n\n\n\n\n","category":"method"},{"location":"algorithms/fpgrowth/#Parameters","page":"FP-Growth","title":"Parameters","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"txns::Transactions: A Transactions type object that contains the encoded transaction dataset as a sparse CSC matrix along with row and column name keys\nmin_support::Union{Int,Float64}: The minimum support threshold for the rules. This can be specified as either:\nAn Int represents the absolute support (count) of transactions.\nA Float64 represents the relative support (percentage) of transactions.","category":"page"},{"location":"algorithms/fpgrowth/#Output","page":"FP-Growth","title":"Output","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"A DataFrame object with four columns:","category":"page"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"Itemset: Vector of item names in the frequent itemset\nSupport: Relative support of the itemset\nN: Absolute support count of the itemset\nLength: Number of items in the itemset","category":"page"},{"location":"algorithms/fpgrowth/#Algorithm-Overview","page":"FP-Growth","title":"Algorithm Overview","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"The function starts by constructing an FP-tree from the transaction dataset.\nIt then recursively mines the FP-tree to find all frequent itemsets.\nThe algorithm uses a divide-and-conquer approach, creating conditional FP-trees for each frequent item.\nIt traverses the tree in a bottom-up manner, combining frequent items to generate longer frequent itemsets.\nThe process continues until all frequent itemsets are discovered.","category":"page"},{"location":"algorithms/fpgrowth/#Usage-Example","page":"FP-Growth","title":"Usage Example","text":"","category":"section"},{"location":"algorithms/fpgrowth/","page":"FP-Growth","title":"FP-Growth","text":"# Load transactions\ntxns = load_transactions(\"transactions.txt\", ' ')\n\n# Find frequent itemsets with minimum support of 5%\nresult = fpgrowth(txns, 0.05)","category":"page"},{"location":"#RuleMiner.jl","page":"Home","title":"RuleMiner.jl","text":"","category":"section"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"RuleMiner.jl is a Julia package for association rule and frequent itemset mining inspired by the arules R package and SPMF Java library.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Key features of RuleMiner.jl include:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Support for Julia's native multithreading capabilities for improved performance\nDirect interfaces with DataFrames.jl for loading transactional data and exporting results\nFlexible handling of either relative (percentage) support or absolute (count) support in minimum support thresholds","category":"page"},{"location":"#Contents","page":"Home","title":"Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"transactions.md\", \"algorithms/apriori.md\", \"algorithms/eclat.md\",\"algorithms/fpgrowth.md\",\"algorithms/charm.md\",\"algorithms/fpclose.md\",\"algorithms/lcm.md\",\"algorithms/carpenter.md\",\"algorithms/levelwise.md\",\"algorithms/fpmax.md\"]\nDepth = 2","category":"page"}]
}
