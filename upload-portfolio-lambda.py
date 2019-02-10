import json
import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    
    portfolio_bucket=s3.Bucket('portfolio.donaldtoombs.com')
    build_bucket = s3.Bucket('portfolio-build-donaldtoombs.com')
    
    portfolio_zip = StringIO.StringIO(0)
    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)
    
    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj,nm, 
                ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

    print "Job Done"

    return 'Hello from Lambda'
