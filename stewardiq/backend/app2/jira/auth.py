from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import requests
import json
import pybase64
from requests.auth import HTTPBasicAuth
import httpx

# Configuration for Jira API
JIRA_BASE_URL = "https://stewardiq.atlassian.net"
JIRA_API_URL = f"{JIRA_BASE_URL}/rest/api/3/project"
email = "daniel.carpenter@stewardiq.com"
api_token = "ATATT3xFfGF0hcDhDA0wogvOyXnfdK9qBIoUjYWYOdU1t484uS3eKGN9dA14YxE6jWxtTUiloG7Q38sz8eEwsmoFU0tKei6H3KgUpIvMEiV5S8FXfVHHmqcaTqsPai_SzO3oQpuR3QM9wUY9LrnS4CKy2DS6UKIBywpKgimU8meG49AamcljctM=5B4201D2"
JIRA_PROJECT_KEY = "GTMS"
payload = {
        "jql": f"project={JIRA_PROJECT_KEY}",
        "maxResults": 2000,  # Adjust as per your needs
        "fields": "*all"
    }

async def get_jira_projects():
    async with httpx.AsyncClient(auth=(email, api_token)) as client:
        response = await client.get(f"{JIRA_BASE_URL}/rest/api/3/search", params=payload)
        if response.status_code == 200:
            return response.json()
        else:
            raise HTTPException(status_code=response.status_code, detail=response.text)

async def fetch_custom_fields():
    async with httpx.AsyncClient(auth=(email, api_token)) as client:
        response = await client.get(f"{JIRA_BASE_URL}/rest/api/3/field", params=payload)
        if response.status_code == 200:
            return response.json()
        else:
            raise HTTPException(status_code=response.status_code, detail=response.text)


