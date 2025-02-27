lint:
	golangci-lint run --timeout=5m controllers/ database/ models/ routes/

test:
	docker compose exec app go test main_test.go

start:
	docker compose up -d

ci: start lint test
