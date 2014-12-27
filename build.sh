#!/bin/bash
sudo rm -rf ./dist/*
sudo rm -rf ../stpa-modal-doc/*
sudo gulp build
sudo cp -rf ./dist/doc/* ../stpa-modal-doc