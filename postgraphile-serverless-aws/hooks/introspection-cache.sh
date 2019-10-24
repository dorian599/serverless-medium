export $(egrep -v '^#' .env | xargs)

echo "Creating introspection cache"

postgraphile -c $POSTGRES_CONNECTION \
  -s $SCHEMA \
  --write-cache 'introspection.cache' \
  --no-server