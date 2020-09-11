
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
account = Account.create(name: 'Checking', balance: 1000)

transaction = Transaction.create(account_id: 1, amount: 10, kind: 'deposit', date: DateTime.now, description: 'Found $10')

transaction_two = Transaction.create(account_id: 1, amount: 10, kind: 'withdraw', date: DateTime.now, description: 'Found $10')
