#!/usr/bin/env bash

openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -in private.pem -outform PEM -pubout -out public.pem